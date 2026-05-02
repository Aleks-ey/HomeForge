import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--color-primary)] py-20 text-[var(--color-primary-foreground)]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold tracking-widest text-orange-400 uppercase">
            Our Story
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            About HomeForge
          </h1>
          <p className="max-w-xl text-lg leading-relaxed opacity-75">
            Built on a foundation of craftsmanship, honesty, and a genuine
            commitment to the communities we serve.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-[var(--color-background)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              Who We Are
            </h2>
            <p className="mb-4 leading-relaxed text-[var(--color-muted-foreground)]">
              HomeForge was founded with a simple mission: deliver
              exceptional construction services with the transparency and
              professionalism that homeowners and business owners deserve. Over
              the years, we&apos;ve grown from a small remodeling outfit into a
              full-service general contractor, tackling everything from
              single-room renovations to large-scale commercial fit-outs.
            </p>
            <p className="leading-relaxed text-[var(--color-muted-foreground)]">
              Every project we take on carries the same commitment — show up on
              time, communicate clearly, and deliver work that stands the test
              of time. We&apos;re proud of our track record of completing
              projects on schedule and within budget, and we measure our success
              by the long-term relationships we build with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-muted)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Quality Craftsmanship",
                desc: "We use high-grade materials and experienced tradespeople on every job. Our work is backed by a satisfaction guarantee.",
              },
              {
                title: "Transparent Communication",
                desc: "No surprises. You get detailed written estimates, regular progress updates, and direct access to your project lead.",
              },
              {
                title: "On-Time Delivery",
                desc: "We respect your time and your space. Projects are planned and managed to hit agreed deadlines without cutting corners.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6"
              >
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[var(--color-background)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              Licensing &amp; Service Area
            </h2>
            <p className="leading-relaxed text-[var(--color-muted-foreground)]">
              HomeForge is a fully licensed, bonded, and insured general
              contractor based in Colorado. We carry comprehensive general
              liability coverage on every project.
              Our team handles all permitting requirements and works closely with
              local building departments to ensure full code compliance. We serve
              residential and commercial clients throughout Colorado — reach out
              through our contact page to confirm availability in your area.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
