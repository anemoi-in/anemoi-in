import React from "react";
import { MATERIALS } from "../data";
import { href } from "../router";
import { Reveal, Eyebrow, SectionHead, BtnLink, Corners, cx } from "../ui";
import {
  ArrowRight,
  BoxIcon,
  CheckIcon,
  HandIcon,
  RulerIcon,
  ShieldCheck,
} from "../icons";

const WarningTri = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 4 2.8 19.5h18.4L12 4Z" />
    <path d="M12 10v4M12 16.8v.01" />
  </svg>
);

export default function MaterialPage({ id }: { id: string }) {
  const m = MATERIALS.find((x) => x.id === id);
  if (!m) return null;
  const others = MATERIALS.filter((x) => x.id !== id);

  return (
    <>
      {/* spec hero */}
      <section className="grid-paper relative overflow-hidden border-b border-mist">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-10 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Material spec — {m.short}</Eyebrow>
                <h1 className="mt-5 font-display text-[2.3rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                  {m.name}
                </h1>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-smoke">{m.blurb}</p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: <RulerIcon className="h-3.5 w-3.5" />, v: `${m.palmMil} palm` },
                    { icon: <HandIcon className="h-3.5 w-3.5" />, v: m.sizes },
                    { icon: <BoxIcon className="h-3.5 w-3.5" />, v: `${m.boxCount}/box · ${m.caseCount}/case` },
                  ].map((c) => (
                    <span
                      key={c.v}
                      className="inline-flex items-center gap-1.5 rounded-[3px] border border-mist bg-card px-3 py-1.5 font-mono text-[10.5px] font-medium tracking-[0.06em] text-ink/85"
                    >
                      <span className="text-accent">{c.icon}</span>
                      {c.v}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {m.standards.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 font-mono text-[10px] font-medium tracking-[0.1em] text-accent-dark">
                      <ShieldCheck className="h-3 w-3" />
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <BtnLink href={href("/quote")} arrow>
                    Request quote
                  </BtnLink>
                  <div>
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-smoke">Bulk from</p>
                    <p className="font-display text-[21px] font-medium leading-tight text-ink">{m.priceFrom}</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="relative mx-auto max-w-[440px]">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-md border border-mist bg-mist">
                    <img
                      src={m.image}
                      alt={`${m.name} gloves on a neutral studio background`}
                      className="h-full w-full object-cover"
                    />
                    <Corners />
                  </div>
                  <p className="drift absolute -bottom-4 left-4 flex items-center gap-2 rounded-[4px] border border-mist bg-card px-3.5 py-2 font-mono text-[10px] font-medium tracking-[0.16em] text-smoke shadow-sm">
                    <span className="h-3 w-3 rounded-full border border-mist" style={{ backgroundColor: m.swatch }} />
                    {m.colorName.toUpperCase()} · {m.palmMil}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* spec table */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <Eyebrow>01 — Full specification</Eyebrow>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl">
                    The whole sheet,
                    <br />
                    nothing redacted.
                  </h2>
                  <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-smoke">
                    Copy this straight into your tender documents. Values below are the
                    manufacturing spec — the lot CoA carries the measured numbers.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-md border border-mist bg-card">
                  {m.specRows.map(([k, v], i) => (
                    <div
                      key={k}
                      className={cx(
                        "grid grid-cols-[130px_1fr] gap-4 px-5 py-3.5 transition-colors duration-200 hover:bg-accent-tint sm:grid-cols-[200px_1fr]",
                        i % 2 === 0 ? "bg-paper/70" : "bg-card"
                      )}
                    >
                      <p className="font-mono text-[10.5px] font-medium uppercase leading-5 tracking-[0.14em] text-smoke">
                        {k}
                      </p>
                      <p className="text-[14px] leading-5 text-ink">{v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* price breaks + best/watch */}
      <section className="border-y border-mist bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>02 — Volume pricing</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl">
                  Price breaks, printed.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8 overflow-hidden rounded-md border border-mist">
                  <div className="grid grid-cols-3 bg-deep px-5 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-mist/80">
                    <span>Volume</span>
                    <span className="text-right">Per case</span>
                    <span className="text-right">Per glove</span>
                  </div>
                  {m.priceBreaks.map((b, i) => {
                    const hot = i === m.priceBreaks.length - 1;
                    return (
                      <div
                        key={b.qty}
                        className={cx(
                          "grid grid-cols-3 items-center px-5 py-4 transition-colors duration-200",
                          hot ? "bg-accent-soft" : i % 2 ? "bg-paper/70" : "bg-card",
                          !hot && "hover:bg-accent-tint"
                        )}
                      >
                        <span className="text-[13.5px] text-ink">
                          {b.qty}
                          {hot && (
                            <span className="ml-2 rounded-[3px] bg-accent px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-card">
                              Program tier
                            </span>
                          )}
                        </span>
                        <span className="text-right font-display text-[16px] font-medium text-ink">{b.perCase}</span>
                        <span className={cx("text-right font-mono text-[12.5px]", hot ? "font-medium text-accent-dark" : "text-smoke")}>
                          {b.perGlove}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <BtnLink href={href("/quote")} arrow>
                    Request locked pricing
                  </BtnLink>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-smoke">
                    12-month locks on program agreements
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <div className="rounded-md border border-mist bg-paper p-7">
                  <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-accent-dark">
                    Where it wins
                  </p>
                  <ul className="mt-4 space-y-3">
                    {m.bestForList.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink/85">
                        <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-accent text-card">
                          <CheckIcon className="h-2.5 w-2.5" strokeWidth={2.6} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="my-6 border-t border-mist" />
                  <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-smoke">
                    Worth knowing
                  </p>
                  <ul className="mt-4 space-y-3">
                    {m.watchFor.map((w) => (
                      <li key={w} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-smoke">
                        <WarningTri className="mt-0.5 h-4 w-4 shrink-0 text-[#b98336]" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* compare rail */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead
              no="03"
              eyebrow="Keep comparing"
              title="The other two polymers."
              link={{ label: "Full comparison guide", href: href("/blog/latex-vs-nitrile-vs-vinyl") }}
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {others.map((o, i) => (
              <Reveal key={o.id} delay={i * 100}>
                <a
                  href={href(`/materials/${o.id}`)}
                  className="group flex items-center gap-5 rounded-md border border-mist bg-card p-4 pr-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_36px_-22px_rgba(12,33,37,0.35)]"
                >
                  <div className="h-20 w-24 shrink-0 overflow-hidden rounded-[4px] border border-mist">
                    <img src={o.image} alt={o.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[17px] font-medium text-ink group-hover:text-accent-dark">{o.name}</h3>
                    <p className="mt-1 truncate text-[13px] text-smoke">{o.bestFor}</p>
                    <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-dark">
                      {o.palmMil} · from {o.priceFrom}
                    </p>
                  </div>
                  <ArrowRight className="h-4.5 w-4.5 shrink-0 text-smoke transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
