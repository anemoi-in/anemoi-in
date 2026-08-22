import React, { useState } from "react";
import { INDUSTRIES, MATERIALS } from "../data";
import { goSection, href } from "../router";
import { Reveal, Eyebrow, SectionHead, BtnLink, Accordion, Corners, CertPills } from "../ui";
import { ArrowRight, CheckIcon, ShieldCheck } from "../icons";

export default function IndustryPage({ id }: { id: string }) {
  const ind = INDUSTRIES.find((i) => i.id === id);
  const [open, setOpen] = useState(0);
  if (!ind) return null;
  const others = INDUSTRIES.filter((i) => i.id !== id);

  return (
    <>
      {/* hero */}
      <section className="grid-paper relative overflow-hidden border-b border-mist">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-10 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{ind.tagline}</Eyebrow>
                <h1 className="mt-5 max-w-xl font-display text-[2.3rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                  {ind.heroTitle}
                </h1>
                <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-smoke">
                  {ind.heroCopy}
                </p>
              </Reveal>
              <Reveal delay={130}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {ind.callouts.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1.5 rounded-full border border-mist bg-card px-3 py-1.5 font-mono text-[10.5px] font-medium tracking-[0.08em] text-ink/80"
                    >
                      <CheckIcon className="h-3 w-3 text-accent" strokeWidth={2.4} />
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <BtnLink href={href("/quote")} arrow>
                    Request quote
                  </BtnLink>
                  <BtnLink
                    href={href(`/industries/${id}`)}
                    variant="outline"
                    arrow
                    onClick={(e) => {
                      e.preventDefault();
                      goSection("recommended");
                    }}
                  >
                    Browse recommended
                  </BtnLink>
                </div>
                <div className="mt-8">
                  <CertPills />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="relative mx-auto max-w-[440px]">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-md border border-mist bg-mist">
                    <img
                      src={ind.image}
                      alt={`${ind.name} team wearing Anemoi gloves at work`}
                      className="h-full w-full object-cover"
                    />
                    <Corners />
                  </div>
                  <div className="drift absolute -bottom-5 left-4 rounded-[4px] border border-mist bg-card px-3.5 py-2 font-mono text-[10px] font-medium tracking-[0.18em] text-smoke shadow-sm">
                    DOC PACK: {ind.name.toUpperCase()} · READY
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* recommended */}
      <section id="recommended" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <SectionHead
              no="01"
              eyebrow={`Recommended for ${ind.name.toLowerCase()}`}
              title="Start with the right polymer."
              lead="Three SKUs cover almost every station in this environment. Mix the case counts to match your consumption — one PO, one delivery."
            />
          </Reveal>
          <div className="mt-12 space-y-4">
            {ind.recommended.map((r, i) => {
              const m = MATERIALS.find((x) => x.id === r.materialId)!;
              return (
                <Reveal key={r.role} delay={i * 100}>
                  <a
                    href={href(`/materials/${m.id}`)}
                    className="group grid gap-5 rounded-md border border-mist bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_36px_-22px_rgba(12,33,37,0.35)] sm:grid-cols-[112px_1fr] sm:p-5 lg:grid-cols-[150px_1.2fr_1fr_auto] lg:items-center"
                  >
                    <div className="relative h-24 overflow-hidden rounded-[4px] border border-mist sm:h-full sm:min-h-[96px]">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent-dark">
                        {r.role}
                      </p>
                      <h3 className="mt-1.5 font-display text-[19px] font-medium text-ink group-hover:text-accent-dark">
                        {m.name}
                      </h3>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {[m.palmMil, m.sizes, `${m.boxCount}/box`].map((c) => (
                          <span key={c} className="rounded-[3px] bg-accent-tint px-2 py-0.5 font-mono text-[10px] font-medium text-accent-dark">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-smoke">{r.reason}</p>
                    <span className="hidden items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-dark lg:inline-flex">
                      Specs
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* compliance */}
      <section className="grid-paper-dark border-y border-abyss bg-deep">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <SectionHead
              tone="dark"
              no="02"
              eyebrow="Compliance, filed"
              title={`What ships with every ${ind.name.toLowerCase()} order.`}
              lead="The documentation your auditors ask for, included by default — not as a favor, and not for a fee."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ind.compliance.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="group h-full rounded-md border border-fog/12 bg-abyss/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-bright/50">
                  <span className="grid h-10 w-10 place-items-center rounded-[6px] border border-accent-bright/40 text-accent-bright transition-colors duration-300 group-hover:bg-accent-bright group-hover:text-deep">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[16.5px] font-medium text-fog">{c.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mist/75">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>03 — Straight answers</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl">
                  Asked by every{" "}
                  <span className="text-accent-dark">{ind.name.toLowerCase()}</span> buyer.
                </h2>
                <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-smoke">
                  Anything missing? The sales desk answers inside one business day —
                  usually faster.
                </p>
                <BtnLink href={href("/quote")} variant="outline" className="mt-7 h-11" arrow>
                  Ask a question
                </BtnLink>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <div className="border-t border-mist">
                  {ind.faqs.map((f, i) => (
                    <Accordion
                      key={f.q}
                      q={f.q}
                      a={f.a}
                      open={open === i}
                      onToggle={() => setOpen(open === i ? -1 : i)}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* next-industry rail */}
      <section className="border-t border-mist bg-card">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-smoke">
              Other workplaces we stock
            </p>
            <div className="flex flex-wrap gap-3">
              {others.map((o) => (
                <a
                  key={o.id}
                  href={href(`/industries/${o.id}`)}
                  className="group inline-flex items-center gap-2 rounded-full border border-mist px-4 py-2 font-display text-[13.5px] font-medium text-ink transition-all duration-200 hover:border-accent hover:bg-accent hover:text-card"
                >
                  {o.name}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
