"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "./actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending…" : "Send Message"}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--color-primary)] py-20 text-[var(--color-primary-foreground)]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold tracking-widest text-orange-400 uppercase">
            Get In Touch
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Contact HomeForge
          </h1>
          <p className="max-w-xl text-lg leading-relaxed opacity-75">
            Tell us about your project and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[var(--color-background)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="mb-6 text-xl font-semibold">
                Contact Information
              </h2>
              <div className="space-y-4 text-sm text-[var(--color-muted-foreground)]">
                <div>
                  <p className="mb-1 font-medium text-[var(--color-foreground)]">
                    Phone
                  </p>
                  <p>(303)946-6523</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-[var(--color-foreground)]">
                    Email
                  </p>
                  <p>info.homeforge@gmail.com</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-[var(--color-foreground)]">
                    Hours
                  </p>
                  <p>Mon–Fri, 7am – 6pm</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-[var(--color-foreground)]">
                    Service Area
                  </p>
                  <p>Residential &amp; commercial projects in the region</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {state.success ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                  <div className="mb-4 text-4xl">✅</div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Thanks, {state.submittedName}!
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    We&apos;ve received your message and will be in touch as
                    soon as possible.
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-5">
                  {state.error && (
                    <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {state.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jane Smith"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone{" "}
                      <span className="font-normal text-[var(--color-muted-foreground)]">
                        (optional)
                      </span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="projectType"
                      className="text-sm font-medium"
                    >
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="flex h-9 w-full rounded-md border border-[var(--color-input)] bg-[var(--color-background)] px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a project type…</option>
                      <option value="residential-remodel">
                        Residential Remodel
                      </option>
                      <option value="commercial-renovation">
                        Commercial Renovation
                      </option>
                      <option value="new-construction">New Construction</option>
                      <option value="addition">Addition</option>
                      <option value="roofing">Roofing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project — scope, timeline, any specific requirements…"
                      rows={5}
                      required
                    />
                  </div>

                  <SubmitButton />
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
