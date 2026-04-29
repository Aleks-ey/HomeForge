import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About HomeForge LLC
          </h1>
          <p className="text-lg opacity-75 max-w-xl leading-relaxed">
            Built on a foundation of craftsmanship, honesty, and a genuine
            commitment to the communities we serve.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Who We Are
            </h2>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
              HomeForge LLC was founded with a simple mission: deliver
              exceptional construction services with the transparency and
              professionalism that homeowners and business owners deserve. Over
              the years, we&apos;ve grown from a small remodeling outfit into a
              full-service general contractor, tackling everything from
              single-room renovations to large-scale commercial fit-outs.
            </p>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">
              Every project we take on carries the same commitment — show up on
              time, communicate clearly, and deliver work that stands the test
              of time. We&apos;re proud of our track record of completing projects on
              schedule and within budget, and we measure our success by the
              long-term relationships we build with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-muted)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔨",
                title: "Quality Craftsmanship",
                desc: "We use high-grade materials and experienced tradespeople on every job. Our work is backed by a satisfaction guarantee.",
              },
              {
                icon: "💬",
                title: "Transparent Communication",
                desc: "No surprises. You get detailed written estimates, regular progress updates, and direct access to your project lead.",
              },
              {
                icon: "📅",
                title: "On-Time Delivery",
                desc: "We respect your time and your space. Projects are planned and managed to hit agreed deadlines without cutting corners.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl p-6"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              Licensing &amp; Service Area
            </h2>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed">
              HomeForge LLC is a fully licensed, bonded, and insured general
              contractor. We carry comprehensive general liability and workers&apos;
              compensation coverage on every project. Our team handles all
              permitting requirements and works closely with local building
              departments to ensure full code compliance. We currently serve
              residential and commercial clients throughout the region — reach
              out through our contact page to confirm availability in your area.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
