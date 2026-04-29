"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { verifyAdminPassword, type AdminAuthState } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialState: AdminAuthState = { authenticated: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Verifying…" : "Access Admin"}
    </Button>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatProjectType(type: string) {
  return type
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function AdminPage() {
  const [state, formAction] = useActionState(verifyAdminPassword, initialState);

  if (!state.authenticated) {
    return (
      <div className="w-full max-w-sm">
        <div className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold tracking-tight mb-1">
              Home<span className="text-orange-500">Forge</span>
            </div>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Admin Access
            </p>
          </div>

          {state.error && (
            <div className="bg-red-50 border border-red-200 rounded-md px-4 py-3 text-sm text-red-700 mb-4">
              {state.error}
            </div>
          )}

          <form action={formAction} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter admin password"
                required
                autoFocus
              />
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    );
  }

  const submissions = [...(state.submissions ?? [])].reverse();

  return (
    <div className="w-full max-w-6xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Contact Submissions
          </h1>
          <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
            {submissions.length} submission{submissions.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="text-sm font-bold tracking-tight">
          Home<span className="text-orange-500">Forge</span>
        </div>
      </div>

      {submissions.length === 0 ? (
        <div className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl p-12 text-center text-[var(--color-muted-foreground)]">
          No submissions yet.
        </div>
      ) : (
        <div className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-[var(--color-border)] bg-[var(--color-muted)]">
                <tr>
                  {["Date", "Name", "Email", "Phone", "Project Type", "Message"].map(
                    (col) => (
                      <th
                        key={col}
                        className="text-left px-4 py-3 font-semibold text-[var(--color-muted-foreground)] uppercase tracking-wider text-xs whitespace-nowrap"
                      >
                        {col}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {submissions.map((s, i) => (
                  <tr
                    key={s.id}
                    className={
                      i % 2 === 0
                        ? "border-b border-[var(--color-border)]"
                        : "border-b border-[var(--color-border)] bg-[var(--color-muted)]/30"
                    }
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-[var(--color-muted-foreground)]">
                      {formatDate(s.createdAt)}
                    </td>
                    <td className="px-4 py-3 font-medium whitespace-nowrap">
                      {s.name}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted-foreground)] whitespace-nowrap">
                      {s.email}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted-foreground)] whitespace-nowrap">
                      {s.phone || "—"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                        {formatProjectType(s.projectType)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[var(--color-muted-foreground)] max-w-xs">
                      <span title={s.message}>
                        {s.message.length > 60
                          ? s.message.slice(0, 60) + "…"
                          : s.message}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
