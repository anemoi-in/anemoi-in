import React, { useState } from "react";
import { INDUSTRIES, MATERIALS } from "../data";
import { href } from "../router";
import { Reveal, Eyebrow, CertPills, BtnLink, cx } from "../ui";
import { CheckIcon, MailIcon, PhoneIcon, BoxIcon } from "../icons";

type Form = {
  name: string;
  email: string;
  company: string;
  industry: string;
  material: string;
  notes: string;
};

const MAX_CASES = 300;

function tierFor(materialId: string, cases: number) {
  const m = MATERIALS.find((x) => x.id === materialId) ?? MATERIALS[0];
  const breaks = m.priceBreaks;
  const idx = cases >= 200 ? 3 : cases >= 50 ? 2 : cases >= 10 ? 1 : 0;
  return { m, tier: breaks[idx], idx };
}

export default function QuotePage() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    company: "",
    industry: INDUSTRIES[0].id,
    material: MATERIALS[0].id,
    notes: "",
  });
  const [cases, setCases] = useState(25);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [refNo] = useState(() => `AN-${Math.floor(2400 + Math.random() * 700)}`);

  const { m, tier, idx } = tierFor(form.material, cases);
  const monthly = Math.round(cases * parseFloat(tier.perCase.replace(/[$,]/g, "")));

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: typeof errors = {};
    if (form.name.trim().length < 2) er.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "That email doesn't look right.";
    if (form.company.trim().length < 2) er.company = "Company or facility name helps us route the quote.";
    setErrors(er);
    if (Object.keys(er).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  const fill = (cases - 1) / (MAX_CASES - 1);

  return (
    <>
      <section className="grid-paper border-b border-mist">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-12 lg:px-10 lg:pt-16">
          <Reveal>
            <Eyebrow>Quote request · Bulk &amp; program accounts</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-display text-[2.3rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Tell us the volume.
              <br />
              We&rsquo;ll hold the price.
            </h1>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-smoke">
              One business day, a named rep, and a quote that includes the lot
              documentation pack. The calculator below shows indicative pricing while
              you drag.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* form / success */}
            <div className="lg:col-span-7">
              {submitted ? (
                <Reveal>
                  <div className="rounded-md border border-accent/40 bg-card p-10">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-card">
                      <CheckIcon className="h-6 w-6" strokeWidth={2.4} />
                    </span>
                    <h2 className="mt-6 font-display text-[28px] font-bold tracking-tight text-ink">
                      Quote request received.
                    </h2>
                    <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-smoke">
                      Reference <span className="font-mono font-medium text-accent-dark">{refNo}</span>.
                      Your estimate — {cases} cases/month of {m.name} at the{" "}
                      {tier.qty} tier — is with the sales desk. Expect a firm number,
                      lead times and the document pack from a named rep within one
                      business day.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3.5">
                      <BtnLink href={href("/")} variant="outline" arrow>
                        Back to homepage
                      </BtnLink>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="rounded-[4px] px-5 text-[14px] font-medium text-accent-dark underline-offset-4 transition-colors hover:text-ink hover:underline"
                      >
                        Adjust the request
                      </button>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <form onSubmit={submit} noValidate className="rounded-md border border-mist bg-card p-7 sm:p-9">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="q-name" className="mb-1.5 block font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-smoke">
                          Full name *
                        </label>
                        <input
                          id="q-name"
                          className={cx("field", errors.name && "invalid")}
                          placeholder="Jordan Reyes"
                          value={form.name}
                          onChange={set("name")}
                        />
                        {errors.name && <p className="mt-1.5 text-[12px] text-[#a34a3e]">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="q-email" className="mb-1.5 block font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-smoke">
                          Work email *
                        </label>
                        <input
                          id="q-email"
                          type="email"
                          className={cx("field", errors.email && "invalid")}
                          placeholder="jordan@facility.org"
                          value={form.email}
                          onChange={set("email")}
                        />
                        {errors.email && <p className="mt-1.5 text-[12px] text-[#a34a3e]">{errors.email}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="q-company" className="mb-1.5 block font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-smoke">
                          Company / facility *
                        </label>
                        <input
                          id="q-company"
                          className={cx("field", errors.company && "invalid")}
                          placeholder="Riverbend Health Network"
                          value={form.company}
                          onChange={set("company")}
                        />
                        {errors.company && <p className="mt-1.5 text-[12px] text-[#a34a3e]">{errors.company}</p>}
                      </div>
                      <div>
                        <label htmlFor="q-industry" className="mb-1.5 block font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-smoke">
                          Industry
                        </label>
                        <select id="q-industry" className="field" value={form.industry} onChange={set("industry")}>
                          {INDUSTRIES.map((i) => (
                            <option key={i.id} value={i.id}>
                              {i.name}
                            </option>
                          ))}
                          <option value="other">Other / mixed</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="q-material" className="mb-1.5 block font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-smoke">
                          Material
                        </label>
                        <select id="q-material" className="field" value={form.material} onChange={set("material")}>
                          {MATERIALS.map((mm) => (
                            <option key={mm.id} value={mm.id}>
                              {mm.name} — {mm.palmMil}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* volume calculator */}
                    <div className="mt-7 rounded-md border border-mist bg-paper p-5 sm:p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <label htmlFor="q-cases" className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-smoke">
                          Estimated monthly volume
                        </label>
                        <p className="font-display text-[19px] font-medium text-ink">
                          {cases} <span className="text-[13px] text-smoke">cases / month</span>
                        </p>
                      </div>
                      <input
                        id="q-cases"
                        type="range"
                        min={1}
                        max={MAX_CASES}
                        value={cases}
                        onChange={(e) => setCases(Number(e.target.value))}
                        className="slider mt-4"
                        style={{ "--fill": `${fill * 100}%` } as React.CSSProperties}
                      />
                      <div className="mt-5 grid gap-3 rounded-[4px] border border-mist bg-card p-4 sm:grid-cols-3">
                        <div>
                          <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-smoke">Tier reached</p>
                          <p className={cx("mt-1 font-display text-[15px] font-medium", idx === 3 ? "text-accent-dark" : "text-ink")}>
                            {tier.qty}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-smoke">Per case</p>
                          <p className="mt-1 font-display text-[15px] font-medium text-ink">{tier.perCase}</p>
                        </div>
                        <div>
                          <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-smoke">Est. monthly</p>
                          <p className="mt-1 font-display text-[15px] font-medium text-accent-dark">
                            ${monthly.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-[11.5px] text-smoke">
                        Indicative list pricing for {m.name}. Program agreements lock
                        rates for 12 months — the formal quote may beat this.
                      </p>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="q-notes" className="mb-1.5 block font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-smoke">
                        Anything else
                      </label>
                      <textarea
                        id="q-notes"
                        rows={3}
                        className="field resize-none"
                        placeholder="Delivery cadence, size mix, private labeling, current supplier…"
                        value={form.notes}
                        onChange={set("notes")}
                      />
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <button
                        type="submit"
                        className="group inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-accent px-7 text-[14.5px] font-medium text-card shadow-[0_1px_0_rgba(8,26,29,0.25)] transition-all duration-200 hover:bg-accent-dark hover:shadow-[0_6px_18px_-6px_rgba(14,124,114,0.55)] active:translate-y-px"
                      >
                        Send quote request
                        <CheckIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.2} />
                      </button>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-smoke">
                        Response within 1 business day
                      </p>
                    </div>
                  </form>
                </Reveal>
              )}
            </div>

            {/* sidebar */}
            <div className="space-y-6 lg:col-span-5">
              <Reveal delay={120}>
                <div className="rounded-md border border-mist bg-card p-7">
                  <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-accent-dark">
                    What happens next
                  </p>
                  <ol className="mt-5 space-y-5">
                    {[
                      { t: "A rep, not a queue", d: "Your request routes to the desk that covers your industry. You get a name and a direct line." },
                      { t: "Firm numbers in one day", d: "Price per case at your volume, lead times from Chicago stock, and any tier you'd hit by consolidating." },
                      { t: "Paperwork included", d: "CoA, SDS and compliance letters attach to the quote — ready for your formulary or EHS file." },
                    ].map((s, i) => (
                      <li key={s.t} className="flex gap-4">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[6px] border border-mist font-display text-[14px] font-bold text-accent-dark">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-display text-[15px] font-medium text-ink">{s.t}</p>
                          <p className="mt-1 text-[13px] leading-relaxed text-smoke">{s.d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="rounded-md border border-mist bg-deep p-7">
                  <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-accent-bright">
                    Prefer to talk it through?
                  </p>
                  <div className="mt-5 space-y-3">
                    <a href="tel:+13125550148" className="flex items-center gap-3 text-[14px] text-fog transition-colors hover:text-accent-bright">
                      <PhoneIcon className="h-4.5 w-4.5 text-accent-bright" />
                      +1 (312) 555-0148 · Mon–Fri, 7a–6p CT
                    </a>
                    <a href="mailto:sales@anemoi.supply" className="flex items-center gap-3 text-[14px] text-fog transition-colors hover:text-accent-bright">
                      <MailIcon className="h-4.5 w-4.5 text-accent-bright" />
                      sales@anemoi.supply
                    </a>
                    <p className="flex items-center gap-3 text-[14px] text-fog">
                      <BoxIcon className="h-4.5 w-4.5 text-accent-bright" />
                      Sample packs ship free with any request
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="rounded-md border border-mist bg-card p-7">
                  <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-smoke">
                    On file with every quote
                  </p>
                  <div className="mt-4">
                    <CertPills />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
