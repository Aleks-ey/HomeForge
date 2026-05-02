import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
          <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
            <p className="mb-4 text-sm font-semibold tracking-widest text-orange-400 uppercase">
              Licensed General Contractor · Colorado
            </p>
            <h1 className="mb-6 max-w-2xl text-4xl leading-tight font-bold tracking-tight md:text-6xl">
              Building What Matters.
            </h1>
            <p className="mb-4 max-w-xl text-lg leading-relaxed opacity-75 md:text-xl">
              From custom homes and new business build-outs to ADUs, decks,
              patios, and verandas — HomeForge handles every phase of
              construction across Colorado.
            </p>
            <p className="mb-10 text-sm opacity-60">
              Get in touch for a free estimate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-orange-500 text-white hover:bg-orange-600"
                )}
              >
                Request a Free Estimate
              </Link>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-[var(--color-primary-foreground)]/30 text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-foreground)]/10 hover:text-[var(--color-primary-foreground)]"
                )}
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[var(--color-background)] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
              What We Build
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-center text-[var(--color-muted-foreground)]">
              From ground-up custom homes to outdoor living spaces, HomeForge
              handles every phase of construction across Colorado.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Custom Homes",
                  desc: "Ground-up custom home builds designed to your specifications, managed from permit to final walkthrough.",
                },
                {
                  title: "New Business Build-Outs",
                  desc: "Helping new businesses open their doors with office fit-outs, retail spaces, and commercial renovations.",
                },
                {
                  title: "Home Additions & ADUs",
                  desc: "Expand your living space with room additions, accessory dwelling units, and in-law suites.",
                },
                {
                  title: "Decks & Patios",
                  desc: "Custom decks and patios built to complement your home and stand up to Colorado's four seasons.",
                },
                {
                  title: "Verandas & Covered Outdoor Living",
                  desc: "Covered verandas and pergolas that turn your backyard into a year-round outdoor living space.",
                },
                {
                  title: "Remodeling & Renovation",
                  desc: "Kitchens, bathrooms, basements, and full-home renovations tailored to your vision and lifestyle.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-[var(--color-border)] p-6 transition-colors hover:border-orange-300"
                >
                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why HomeForge */}
        <section className="bg-[var(--color-muted)] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight">
                  Why Homeowners & Businesses Choose HomeForge
                </h2>
                <p className="mb-6 leading-relaxed text-[var(--color-muted-foreground)]">
                  We believe great construction starts with clear communication.
                  Every project gets a dedicated point of contact, transparent
                  timelines, and no surprise invoices.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    "Licensed, bonded, and fully insured in Colorado",
                    "Detailed written estimates before any work begins",
                    "Progress updates throughout every project",
                    "Clean job sites and respectful crews",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-orange-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-8">
                <div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight">
                    Ready to Start Your Project?
                  </h3>
                  <p className="leading-relaxed text-[var(--color-muted-foreground)]">
                    Get in touch for a free estimate. We respond within one
                    business day.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  Request a Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
