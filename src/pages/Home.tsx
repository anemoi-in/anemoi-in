import React from "react";
import {
  HOME_STATS,
  INDUSTRIES,
  MATERIALS,
  POSTS,
  TESTIMONIALS,
  WHY_ITEMS,
  B2B_TERMS,
} from "../data";
import { goSection, href } from "../router";
import {
  Reveal,
  Eyebrow,
  SectionHead,
  BtnLink,
  Stat,
  Ticker,
  Corners,
  CertPills,
  BlogThumb,
  cx,
} from "../ui";
import {
  ArrowRight,
  ArrowUpRight,
  BoxIcon,
  CheckIcon,
  DocIcon,
  FactoryIcon,
  FlaskIcon,
  HandIcon,
  PhoneIcon,
  RulerIcon,
  ShieldCheck,
  TraceIcon,
} from "../icons";
import { IndustryGlyph } from "../layout";

const whyIcons: Record<string, React.ReactNode> = {
  flask: <FlaskIcon className="h-5 w-5" />,
  trace: <TraceIcon className="h-5 w-5" />,
  factory: <FactoryIcon className="h-5 w-5" />,
  doc: <DocIcon className="h-5 w-5" />,
};

/* ---------------- spec callout chip ---------------- */
function Callout({
  className,
  label,
  delay,
  side = "left",
}: {
  className: string;
  label: string;
  delay: number;
  side?: "left" | "right";
}) {
  return (
    <div className={cx("chip-in absolute z-10 flex items-center gap-2", className)} style={{ animationDelay: `${delay}ms` }}>
      {side === "left" ? (
        <>
          <span className="h-1.5 w-1.5 rounded-full bg-accent-bright ring-4 ring-accent-bright/20" />
          <span className="h-px w-6 bg-accent-bright/70" />
          <span className="rounded-[3px] border border-mist bg-card/95 px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.14em] text-ink shadow-sm">
            {label}
          </span>
        </>
      ) : (
        <>
          <span className="rounded-[3px] border border-mist bg-card/95 px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.14em] text-ink shadow-sm">
            {label}
          </span>
          <span className="h-px w-6 bg-accent-bright/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent-bright ring-4 ring-accent-bright/20" />
        </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="grid-paper relative overflow-hidden border-b border-mist">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-accent-soft/60 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-10 lg:px-10 lg:pt-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* left */}
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Medical &amp; industrial hand protection</Eyebrow>
                <h1 className="mt-5 max-w-xl font-display text-[2.45rem] font-bold leading-[1.04] tracking-tight text-ink sm:text-5xl xl:max-w-2xl xl:text-[3.35rem]">
                  Certified protection for teams that can&rsquo;t afford{" "}
                  <span className="relative whitespace-nowrap text-accent-dark">
                    failure.
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full"
                      viewBox="0 0 220 10"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 7.5C60 2.5 150 2 217 6"
                        stroke="#0e7c72"
                        strokeWidth="3"
                        strokeLinecap="round"
                        pathLength={1}
                        className="draw-line"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-smoke">
                  Powder-free <strong className="font-medium text-ink">nitrile, latex and vinyl</strong>{" "}
                  gloves — manufactured on audited lines, inspected to AQL&nbsp;1.5, and
                  released with the paperwork to prove it.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-6">
                  <CertPills />
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <BtnLink href={href("/quote")} arrow>
                    Request quote
                  </BtnLink>
                  <BtnLink
                    href={href("/")}
                    variant="outline"
                    arrow
                    onClick={(e) => {
                      e.preventDefault();
                      goSection("range");
                    }}
                  >
                    Shop gloves
                  </BtnLink>
                </div>
              </Reveal>
            </div>

            {/* right — annotated product photo */}
            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="relative mx-auto w-full max-w-[420px]">
                  <div className="relative aspect-[4/5] max-h-[470px] w-full overflow-hidden rounded-md border border-mist bg-mist">
                    <img
                      src="https://image.qwenlm.ai/generated-images/08ddb2a7-26f6-4aa2-bd7a-12182e38d4f9/_result.png"
                      alt="Hands wearing Anemoi teal nitrile gloves in a clinical setting"
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/25 via-transparent to-transparent" />
                    <Corners />
                  </div>

                  <Callout className="left-0 top-[12%] -translate-x-1/3" label="3.5 MIL PALM" delay={500} />
                  <Callout className="right-0 top-[42%] translate-x-1/4" label="POWDER-FREE" delay={700} side="right" />
                  <Callout className="bottom-[22%] left-0 -translate-x-1/4" label="AQL 1.5 · ASTM D6319" delay={900} />

                  {/* lot tag */}
                  <div className="drift absolute -bottom-5 right-2 rounded-md border border-mist bg-card px-4 py-3 shadow-[0_14px_34px_-14px_rgba(12,33,37,0.4)] sm:-right-6">
                    <p className="font-mono text-[10px] font-medium tracking-[0.2em] text-smoke">
                      LOT AN-24187
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 font-display text-[13.5px] font-medium text-ink">
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-accent text-card">
                        <CheckIcon className="h-2.5 w-2.5" strokeWidth={2.6} />
                      </span>
                      ASTM D6319 — PASS
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* audience selector */}
          <Reveal delay={100}>
            <div className="mt-12 lg:mt-14">
              <p className="flex items-center gap-3 font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-smoke">
                <span className="h-px w-8 bg-smoke/40" />
                Route to your workplace
                <span className="hidden h-px flex-1 bg-mist sm:block" />
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {INDUSTRIES.map((ind, i) => (
                  <a
                    key={ind.id}
                    href={href(`/industries/${ind.id}`)}
                    className="group relative overflow-hidden rounded-md border border-mist bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_36px_-20px_rgba(14,124,114,0.45)]"
                  >
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-[6px] border border-mist text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-card">
                        <IndustryGlyph icon={ind.icon} className="h-5.5 w-5.5" />
                      </span>
                      <ArrowUpRight className="h-4.5 w-4.5 text-smoke transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </span>
                    <span className="mt-4 block font-display text-[17px] font-medium text-ink">
                      {ind.name}
                    </span>
                    <span className="mt-1.5 block text-[13px] leading-relaxed text-smoke">
                      {ind.id === "healthcare" &&
                        "Exam gloves rated for clinics, dental, labs and USP <800> handling."}
                      {ind.id === "food-service" &&
                        "Food-contact compliant gloves for prep lines and front of house."}
                      {ind.id === "industrial" &&
                        "Chemical- and abrasion-resistant gloves for plant and maintenance crews."}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Ticker />

      {/* ================= PRODUCT RANGE ================= */}
      <section id="range" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <SectionHead
              no="01"
              eyebrow="The range"
              title="Three materials, one standard of inspection."
              lead="Every SKU — whatever the polymer — leaves on the same AQL discipline with a lot-level certificate of analysis. Pick by failure mode, not by habit."
              link={{ label: "Read the comparison guide", href: href("/blog/latex-vs-nitrile-vs-vinyl") }}
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {MATERIALS.map((m, i) => (
              <Reveal key={m.id} delay={i * 110}>
                <a
                  href={href(`/materials/${m.id}`)}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-mist bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_24px_48px_-24px_rgba(12,33,37,0.35)]"
                >
                  <div className="relative h-48 overflow-hidden border-b border-mist bg-mist">
                    <img
                      src={m.image}
                      alt={`${m.name} gloves product photography`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <span className="absolute left-3 top-3 rounded-[3px] bg-deep/85 px-2 py-1 font-mono text-[9.5px] font-medium tracking-[0.18em] text-fog">
                      {m.short.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[19px] font-medium text-ink transition-colors group-hover:text-accent-dark">
                        {m.name}
                      </h3>
                      <span
                        className="h-4 w-4 shrink-0 rounded-full border border-mist"
                        style={{ backgroundColor: m.swatch }}
                        title={m.colorName}
                      />
                    </div>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-smoke">{m.bestFor}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {[
                        { icon: <RulerIcon className="h-3.5 w-3.5" />, v: `${m.palmMil} palm` },
                        { icon: <HandIcon className="h-3.5 w-3.5" />, v: m.sizes },
                        { icon: <BoxIcon className="h-3.5 w-3.5" />, v: `${m.boxCount}/box` },
                      ].map((c) => (
                        <span
                          key={c.v}
                          className="inline-flex items-center gap-1.5 rounded-[3px] bg-accent-tint px-2 py-1 font-mono text-[10.5px] font-medium tracking-[0.06em] text-accent-dark"
                        >
                          {c.icon}
                          {c.v}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-end justify-between pt-5">
                      <div>
                        <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-smoke">
                          Bulk from
                        </p>
                        <p className="font-display text-[17px] font-medium text-ink">{m.priceFrom}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-dark">
                        Spec sheet
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ANEMOI ================= */}
      <section className="border-y border-mist bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* sticky intro */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <Eyebrow>02 — Why Anemoi</Eyebrow>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl">
                    Trust is a test result,
                    <br />
                    not a tagline.
                  </h2>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-smoke">
                    Anyone can print a certification logo on a carton. We built the
                    company around the artifacts that are harder to fake: sampling
                    worksheets, lot codes, and audit reports you can hold.
                  </p>
                </Reveal>
                <Reveal delay={150}>
                  <div className="mt-10 grid grid-cols-3 gap-6 border-t border-mist pt-8">
                    {HOME_STATS.map((s) => (
                      <Stat key={s.label} {...s} />
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            {/* numbered practices */}
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {WHY_ITEMS.map((w, i) => (
                  <Reveal key={w.n} delay={i * 90}>
                    <div className="group relative border-t border-mist py-8 pl-0 transition-colors duration-300 first:border-t-0 lg:pl-16">
                      <span className="absolute left-0 top-8 hidden h-full w-px bg-mist transition-colors duration-300 group-hover:bg-accent lg:block" />
                      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                        <span className="font-mono text-[12px] font-medium tracking-[0.2em] text-accent">
                          {w.n}
                        </span>
                        <h3 className="font-display text-[21px] font-medium text-ink">
                          {w.title}
                        </h3>
                        <span className="ml-auto grid h-10 w-10 place-items-center rounded-[6px] border border-mist text-smoke transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-card">
                          {whyIcons[w.icon]}
                        </span>
                      </div>
                      <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-smoke lg:pl-[52px]">
                        {w.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <div className="mt-6 flex flex-wrap items-center gap-4 rounded-md border border-dashed border-mist bg-paper px-6 py-5">
                  <ShieldCheck className="h-8 w-8 shrink-0 text-accent" />
                  <p className="min-w-[220px] flex-1 text-[13.5px] leading-relaxed text-smoke">
                    <strong className="font-medium text-ink">Want to see the paperwork first?</strong>{" "}
                    Ask for the current document pack — CoA, SDS and 510(k) listings — with any quote.
                  </p>
                  <BtnLink href={href("/quote")} variant="outline" className="h-10 px-4 text-[13px]">
                    Ask with a quote
                  </BtnLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BULK / DISTRIBUTOR BANNER ================= */}
      <section className="grid-paper-dark relative overflow-hidden bg-deep">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="dark">03 — Distribution &amp; bulk</Eyebrow>
                <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-fog sm:text-[2.6rem]">
                  Stock a quarter,
                  <br />
                  not a shelf.
                </h2>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mist/80">
                  Program accounts get locked pricing, held safety stock and scheduled
                  releases matched to consumption — so the MRO closet and central
                  supply stay boring, month after month.
                </p>
              </Reveal>
              <Reveal delay={130}>
                <ul className="mt-8 grid max-w-lg grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {B2B_TERMS.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[13.5px] text-mist/90">
                      <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full border border-accent-bright/50 text-accent-bright">
                        <CheckIcon className="h-2.5 w-2.5" strokeWidth={2.4} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <BtnLink href={href("/quote")} variant="white" arrow>
                    Request a quote
                  </BtnLink>
                  <a
                    href="tel:+13125550148"
                    className="group inline-flex items-center gap-2.5 font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-accent-bright transition-colors hover:text-fog"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call the desk
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={160}>
                <div className="relative">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-md border border-fog/15">
                    <img
                      src="https://image.qwenlm.ai/generated-images/273310ba-ce12-4ae3-9d94-abab71660c29/_result.png"
                      alt="Pallets of sealed Anemoi cartons in the Chicago distribution warehouse"
                      className="h-full w-full object-cover"
                    />
                    <Corners tone="dark" />
                  </div>
                  <p className="drift absolute -bottom-4 left-5 rounded-[4px] border border-fog/15 bg-abyss px-3.5 py-2 font-mono text-[10px] font-medium tracking-[0.2em] text-mist">
                    PALLET AN-P2214 · BAY 12 · CHICAGO
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="noise-veil">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <SectionHead
              no="04"
              eyebrow="In the field"
              title="Procurement people talk. Here's what they say."
              lead="No star widgets — just the numbers program accounts actually track, from the people who track them."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {/* featured */}
            <Reveal className="lg:col-span-3">
              <figure className="relative flex h-full flex-col rounded-md border border-mist bg-card p-8 transition-all duration-300 hover:border-accent lg:p-10">
                <svg viewBox="0 0 40 32" className="h-8 w-10 text-accent/25" fill="currentColor" aria-hidden="true">
                  <path d="M0 32V20.8C0 9.6 6.4 2.1 16.5 0l2.2 5.3C12.3 7.5 9 11.5 8.6 16H17v16H0Zm23 0V20.8C23 9.6 29.4 2.1 39.5 0l2.2 5.3c-6.4 2.2-9.7 6.2-10.1 10.7H40v16H23Z" transform="scale(0.95)" />
                </svg>
                <blockquote className="mt-5 font-display text-[21px] font-medium leading-snug text-ink sm:text-[24px]">
                  &ldquo;{TESTIMONIALS[0].quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto flex flex-wrap items-end justify-between gap-5 pt-8">
                  <div>
                    <p className="font-display text-[15px] font-medium text-ink">
                      {TESTIMONIALS[0].name}
                    </p>
                    <p className="mt-0.5 text-[12.5px] text-smoke">
                      {TESTIMONIALS[0].role} · {TESTIMONIALS[0].org}
                    </p>
                  </div>
                  <div className="rounded-[4px] border border-accent/30 bg-accent-tint px-4 py-2.5">
                    <p className="font-display text-[22px] font-bold leading-none text-accent-dark">
                      {TESTIMONIALS[0].metric}
                    </p>
                    <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-smoke">
                      {TESTIMONIALS[0].metricLabel}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>

            {/* stacked pair */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              {TESTIMONIALS.slice(1).map((t, i) => (
                <Reveal key={t.name} delay={120 + i * 110} className="flex-1">
                  <figure className="flex h-full flex-col rounded-md border border-mist bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                    <blockquote className="text-[14.5px] leading-relaxed text-ink/90">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-auto flex items-end justify-between gap-4 pt-6">
                      <div>
                        <p className="font-display text-[14px] font-medium text-ink">{t.name}</p>
                        <p className="mt-0.5 text-[12px] text-smoke">
                          {t.role} · {t.org}
                        </p>
                      </div>
                      <p className="whitespace-nowrap font-display text-[17px] font-bold text-accent-dark">
                        {t.metric}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FIELD NOTES ================= */}
      <section className="border-t border-mist bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <SectionHead
              no="05"
              eyebrow="Field notes"
              title="Reading for the people who buy the gloves."
              lead="Spec-sheet literacy, testing math and sizing strategy — written by our compliance and field teams, no filler."
              link={{ label: "All field notes", href: href("/blog") }}
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {POSTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 110}>
                <a
                  href={href(`/blog/${p.slug}`)}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-mist bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_24px_48px_-24px_rgba(12,33,37,0.3)]"
                >
                  <div className="relative h-44 overflow-hidden border-b border-mist">
                    <BlogThumb diagram={p.diagram} className="transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-accent-dark">
                      {p.category}
                      <span className="text-smoke"> · {p.date}</span>
                    </p>
                    <h3 className="mt-3 font-display text-[17.5px] font-medium leading-snug text-ink transition-colors group-hover:text-accent-dark">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-3 text-[13.5px] leading-relaxed text-smoke">
                      {p.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-dark">
                      {p.readTime}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
