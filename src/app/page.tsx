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
          <div className="max-w-6xl mx-auto px-6 py-28 md:py-36">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Licensed General Contractor
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 max-w-2xl">
              Building What Matters.
            </h1>
            <p className="text-lg md:text-xl opacity-75 mb-10 max-w-xl leading-relaxed">
              Residential remodeling and commercial renovation done right —
              on time, on budget, and built to last.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-orange-500 hover:bg-orange-600 text-white"
                )}
              >
                Start Your Project
              </Link>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/30 text-white hover:bg-white/10 hover:text-white"
                )}
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[var(--color-background)]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">
              What We Build
            </h2>
            <p className="text-center text-[var(--color-muted-foreground)] mb-12 max-w-xl mx-auto">
              From kitchen renovations to full commercial build-outs, HomeForge
              handles every phase of construction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏠",
                  title: "Residential Remodeling",
                  desc: "Kitchens, bathrooms, additions, and full-home renovations tailored to your vision and lifestyle.",
                },
                {
                  icon: "🏢",
                  title: "Commercial Renovation",
                  desc: "Office fit-outs, retail spaces, and commercial build-outs with minimal disruption to your business.",
                },
                {
                  icon: "🏗️",
                  title: "New Construction",
                  desc: "Ground-up builds for residential and commercial clients, managed from permit to final walkthrough.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="border border-[var(--color-border)] rounded-xl p-6 hover:border-orange-300 transition-colors"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why HomeForge */}
        <section className="py-20 bg-[var(--color-muted)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Why Homeowners & Businesses Choose HomeForge
                </h2>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-6">
                  We believe great construction starts with clear communication.
                  Every project gets a dedicated point of contact, transparent
                  timelines, and no surprise invoices.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    "Licensed, bonded, and fully insured",
                    "Detailed written estimates before any work begins",
                    "Weekly progress updates throughout every project",
                    "Clean job sites and respectful crews",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "15+", label: "Years of Experience" },
                  { stat: "200+", label: "Projects Completed" },
                  { stat: "100%", label: "Licensed & Insured" },
                  { stat: "5★", label: "Average Client Rating" },
                ].map(({ stat, label }) => (
                  <div
                    key={label}
                    className="bg-[var(--color-background)] rounded-xl p-6 text-center border border-[var(--color-border)]"
                  >
                    <div className="text-3xl font-bold text-orange-500 mb-1">
                      {stat}
                    </div>
                    <div className="text-xs text-[var(--color-muted-foreground)] font-medium">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-orange-500">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 mb-8 text-lg max-w-lg mx-auto">
              Get in touch for a free estimate. We respond within one business day.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-orange-600 hover:bg-white/90 font-semibold"
              )}
            >
              Request a Free Estimate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
