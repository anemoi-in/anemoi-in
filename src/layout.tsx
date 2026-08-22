import React, { useEffect, useRef, useState } from "react";
import { INDUSTRIES, MATERIALS, POSTS, CERT_PILLS } from "./data";
import { href, type Route } from "./router";
import {
  WindMark,
  PhoneIcon,
  MailIcon,
  PinIcon,
  MenuIcon,
  CloseIcon,
  ChevronDown,
  PulseIcon,
  ClocheIcon,
  GearIcon,
  ShieldCheck,
  ArrowUpRight,
} from "./icons";
import { cx, BtnLink } from "./ui";

export const IndustryGlyph = ({
  icon,
  className = "w-5 h-5",
}: {
  icon: "pulse" | "cloche" | "gear";
  className?: string;
}) =>
  icon === "pulse" ? (
    <PulseIcon className={className} />
  ) : icon === "cloche" ? (
    <ClocheIcon className={className} />
  ) : (
    <GearIcon className={className} />
  );

const Logo = ({ tone = "light" }: { tone?: "light" | "dark" }) => (
  <a href={href("/")} className="group flex items-center gap-2.5" aria-label="Anemoi home">
    <span
      className={cx(
        "grid h-9 w-9 place-items-center rounded-[6px] transition-colors duration-200",
        tone === "light"
          ? "bg-deep text-accent-bright group-hover:bg-accent group-hover:text-card"
          : "bg-accent-bright text-deep group-hover:bg-fog"
      )}
    >
      <WindMark className="h-5 w-5" />
    </span>
    <span className="leading-none">
      <span
        className={cx(
          "block font-display text-[19px] font-bold tracking-[0.06em]",
          tone === "light" ? "text-ink" : "text-fog"
        )}
      >
        ANEMOI
      </span>
      <span
        className={cx(
          "mt-0.5 block font-mono text-[9px] font-medium uppercase tracking-[0.3em]",
          tone === "light" ? "text-smoke" : "text-mist/70"
        )}
      >
        Supply Co.
      </span>
    </span>
  </a>
);

function Dropdown({
  label,
  active,
  children,
}: {
  label: string;
  active: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onHash = () => setOpen(false);
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={cx(
          "flex items-center gap-1.5 rounded-[4px] px-3.5 py-2 text-[14px] font-medium transition-colors duration-200",
          active || open ? "text-accent-dark" : "text-ink/80 hover:text-ink"
        )}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={cx("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <div
        className={cx(
          "absolute left-0 top-full z-50 pt-2 transition-all duration-200",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="w-72 overflow-hidden rounded-md border border-mist bg-card shadow-[0_18px_40px_-18px_rgba(12,33,37,0.35)]">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Nav({ route }: { route: Route }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const isActive = (check: (r: Route) => boolean) => check(route);

  return (
    <>
      {/* utility strip */}
      <div className="hidden bg-deep text-fog md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">
          <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.2em] text-mist/80">
            CoA included with every lot · Safety stock held in Chicago
          </p>
          <a
            href="tel:+13125550148"
            className="group flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.2em] text-fog transition-colors hover:text-accent-bright"
          >
            <PhoneIcon className="h-3.5 w-3.5 text-accent-bright" />
            +1 (312) 555-0148
          </a>
        </div>
      </div>

      {/* main nav */}
      <header className="sticky top-0 z-40 border-b border-mist bg-paper/92 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <Dropdown
              label="Materials"
              active={isActive((r) => r.name === "material")}
            >
              {MATERIALS.map((m) => (
                <a
                  key={m.id}
                  href={href(`/materials/${m.id}`)}
                  className="group flex items-center gap-3 border-b border-fog px-4 py-3.5 transition-colors last:border-0 hover:bg-accent-tint"
                >
                  <span
                    className="h-8 w-8 shrink-0 rounded-[4px] border border-mist"
                    style={{ backgroundColor: m.swatch }}
                  />
                  <span>
                    <span className="block font-display text-[14.5px] font-medium text-ink group-hover:text-accent-dark">
                      {m.name}
                    </span>
                    <span className="mt-0.5 block text-[12px] text-smoke">
                      {m.palmMil} · {m.powder} · {m.boxCount}/box
                    </span>
                  </span>
                </a>
              ))}
            </Dropdown>
            <Dropdown
              label="Industries"
              active={isActive((r) => r.name === "industry")}
            >
              {INDUSTRIES.map((ind) => (
                <a
                  key={ind.id}
                  href={href(`/industries/${ind.id}`)}
                  className="group flex items-center gap-3 border-b border-fog px-4 py-3.5 transition-colors last:border-0 hover:bg-accent-tint"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[4px] border border-mist text-accent group-hover:border-accent">
                    <IndustryGlyph icon={ind.icon} className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block font-display text-[14.5px] font-medium text-ink group-hover:text-accent-dark">
                      {ind.name}
                    </span>
                    <span className="mt-0.5 block text-[12px] text-smoke">
                      {ind.recommended[0].role}
                    </span>
                  </span>
                </a>
              ))}
            </Dropdown>
            <a
              href={href("/blog")}
              className={cx(
                "rounded-[4px] px-3.5 py-2 text-[14px] font-medium transition-colors",
                isActive((r) => r.name === "blog" || r.name === "article")
                  ? "text-accent-dark"
                  : "text-ink/80 hover:text-ink"
              )}
            >
              Field Notes
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <BtnLink href={href("/quote")} className="hidden h-10 px-5 text-[13.5px] sm:inline-flex">
              Request quote
            </BtnLink>
            <button
              className="grid h-10 w-10 place-items-center rounded-[4px] border border-mist text-ink lg:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* mobile panel */}
        <div
          className={cx(
            "grid overflow-hidden border-mist bg-card transition-[grid-template-rows] duration-300 lg:hidden",
            mobileOpen ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="space-y-6 px-6 py-6">
              <div>
                <p className="mb-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-smoke">
                  Materials
                </p>
                {MATERIALS.map((m) => (
                  <a
                    key={m.id}
                    href={href(`/materials/${m.id}`)}
                    className="flex items-center gap-3 border-b border-fog py-3 last:border-0"
                  >
                    <span className="h-6 w-6 rounded-[3px] border border-mist" style={{ backgroundColor: m.swatch }} />
                    <span className="font-display text-[15px] font-medium text-ink">{m.name}</span>
                  </a>
                ))}
              </div>
              <div>
                <p className="mb-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-smoke">
                  Industries
                </p>
                {INDUSTRIES.map((ind) => (
                  <a
                    key={ind.id}
                    href={href(`/industries/${ind.id}`)}
                    className="flex items-center gap-3 border-b border-fog py-3 last:border-0"
                  >
                    <IndustryGlyph icon={ind.icon} className="h-4.5 w-4.5 text-accent" />
                    <span className="font-display text-[15px] font-medium text-ink">{ind.name}</span>
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <BtnLink href={href("/blog")} variant="outline" className="h-11">
                  Field Notes
                </BtnLink>
                <BtnLink href={href("/quote")} className="h-11">
                  Request quote
                </BtnLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="grid-paper-dark relative bg-deep text-mist">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-mist/75">
              Named for the Greek gods of the wind — because our gloves ship on
              all of them. Batch-tested hand protection for teams that count on
              every carton.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href="mailto:sales@anemoi.supply" className="group flex w-fit items-center gap-2.5 text-[13.5px] text-fog transition-colors hover:text-accent-bright">
                <MailIcon className="h-4 w-4 text-accent-bright" />
                sales@anemoi.supply
              </a>
              <a href="tel:+13125550148" className="group flex w-fit items-center gap-2.5 text-[13.5px] text-fog transition-colors hover:text-accent-bright">
                <PhoneIcon className="h-4 w-4 text-accent-bright" />
                +1 (312) 555-0148
              </a>
              <p className="flex items-center gap-2.5 text-[13.5px] text-fog">
                <PinIcon className="h-4 w-4 text-accent-bright" />
                2401 W Carroll Ave, Chicago, IL
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.26em] text-accent-bright">
                Materials
              </p>
              <ul className="mt-4 space-y-2.5">
                {MATERIALS.map((m) => (
                  <li key={m.id}>
                    <a href={href(`/materials/${m.id}`)} className="text-[13.5px] text-mist/85 transition-colors hover:text-fog">
                      {m.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={href("/blog/latex-vs-nitrile-vs-vinyl")} className="text-[13.5px] text-mist/85 transition-colors hover:text-fog">
                    Comparison guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.26em] text-accent-bright">
                Industries
              </p>
              <ul className="mt-4 space-y-2.5">
                {INDUSTRIES.map((i) => (
                  <li key={i.id}>
                    <a href={href(`/industries/${i.id}`)} className="text-[13.5px] text-mist/85 transition-colors hover:text-fog">
                      {i.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={href("/quote")} className="text-[13.5px] text-mist/85 transition-colors hover:text-fog">
                    Distributor program
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.26em] text-accent-bright">
                Company
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href={href("/blog")} className="text-[13.5px] text-mist/85 transition-colors hover:text-fog">
                    Field Notes
                  </a>
                </li>
                <li>
                  <a href={href("/quote")} className="text-[13.5px] text-mist/85 transition-colors hover:text-fog">
                    Request a quote
                  </a>
                </li>
                <li>
                  <a href={href("/quote")} className="text-[13.5px] text-mist/85 transition-colors hover:text-fog">
                    Sample packs
                  </a>
                </li>
                <li>
                  <a href={href(`/blog/${POSTS[1].slug}`)} className="text-[13.5px] text-mist/85 transition-colors hover:text-fog">
                    Testing standards
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-2 border-t border-fog/10 pt-8">
          {CERT_PILLS.map((c) => (
            <span
              key={c.short}
              className="inline-flex items-center gap-1.5 rounded-full border border-fog/15 px-3 py-1.5 font-mono text-[10.5px] tracking-[0.1em] text-mist/80"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-accent-bright" />
              {c.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-fog/10 pt-6">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mist/55">
            © 2026 Anemoi Supply Co. · Chicago, IL
          </p>
          <a
            href={href("/quote")}
            className="group inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent-bright transition-colors hover:text-fog"
          >
            Wholesale &amp; program accounts
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
