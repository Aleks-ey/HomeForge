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
      <section className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Contact HomeForge
          </h1>
          <p className="text-lg opacity-75 max-w-xl leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within one
            business day with a free estimate.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 text-sm text-[var(--color-muted-foreground)]">
                <div>
                  <p className="font-medium text-[var(--color-foreground)] mb-1">
                    Phone
                  </p>
                  <p>(555) 000-0000</p>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-foreground)] mb-1">
                    Email
                  </p>
                  <p>info@homeforge.com</p>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-foreground)] mb-1">
                    Hours
                  </p>
                  <p>Mon–Fri, 7am – 6pm</p>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-foreground)] mb-1">
                    Service Area
                  </p>
                  <p>Residential &amp; commercial projects in the region</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {state.success ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-semibold text-lg mb-2">
                    Thanks, {state.submittedName}!
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    We&apos;ve received your message and will be in touch within
                    one business day.
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-5">
                  {state.error && (
                    <div className="bg-red-50 border border-red-200 rounded-md px-4 py-3 text-sm text-red-700">
                      {state.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      Phone <span className="text-[var(--color-muted-foreground)] font-normal">(optional)</span>
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
                      className="flex h-9 w-full rounded-md border border-[var(--color-input)] bg-[var(--color-background)] px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] disabled:cursor-not-allowed disabled:opacity-50"
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
