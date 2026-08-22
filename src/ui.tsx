import React, { useEffect, useRef, useState } from "react";
import { CERT_PILLS, TICKER_ITEMS } from "./data";
import { ShieldCheck, ArrowRight, PlusIcon, WindMark } from "./icons";

export const cx = (...xs: (string | false | null | undefined)[]) =>
  xs.filter(Boolean).join(" ");

/* ---------------- reveal on scroll ---------------- */

export function useInView<T extends HTMLElement>(threshold = 0.14) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cx("reveal", inView && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- typography helpers ---------------- */

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cx(
        "flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em]",
        tone === "light" ? "text-accent" : "text-accent-bright"
      )}
    >
      <span
        className={cx("h-px w-8", tone === "light" ? "bg-accent" : "bg-accent-bright")}
      />
      {children}
    </p>
  );
}

export function SectionHead({
  no,
  eyebrow,
  title,
  lead,
  link,
  tone = "light",
}: {
  no: string;
  eyebrow: string;
  title: string;
  lead?: string;
  link?: { label: string; href: string };
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <Eyebrow tone={tone}>
          {no} — {eyebrow}
        </Eyebrow>
        <h2
          className={cx(
            "mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl",
            tone === "light" ? "text-ink" : "text-fog"
          )}
        >
          {title}
        </h2>
        {lead && (
          <p
            className={cx(
              "mt-4 max-w-xl text-[15px] leading-relaxed",
              tone === "light" ? "text-smoke" : "text-mist/80"
            )}
          >
            {lead}
          </p>
        )}
      </div>
      {link && (
        <a
          href={link.href}
          className={cx(
            "group inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.18em]",
            tone === "light"
              ? "text-accent-dark hover:text-ink"
              : "text-accent-bright hover:text-fog"
          )}
        >
          {link.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
}

/* ---------------- buttons ---------------- */

const btnBase =
  "group inline-flex items-center justify-center gap-2 rounded-[4px] font-body text-[14.5px] font-medium tracking-tight transition-all duration-200 px-6 h-12";

const variants = {
  solid:
    "bg-accent text-card hover:bg-accent-dark active:translate-y-px shadow-[0_1px_0_rgba(8,26,29,0.25)] hover:shadow-[0_6px_18px_-6px_rgba(14,124,114,0.55)]",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-card active:translate-y-px",
  outlineLight:
    "border border-fog/30 text-fog hover:border-fog hover:bg-fog hover:text-deep active:translate-y-px",
  white: "bg-card text-ink hover:bg-fog active:translate-y-px",
};

export function BtnLink({
  href,
  variant = "solid",
  children,
  arrow = false,
  onClick,
  className = "",
}: {
  href: string;
  variant?: keyof typeof variants;
  children: React.ReactNode;
  arrow?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cx(btnBase, variants[variant], className)}
    >
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}

/* ---------------- animated counter ---------------- */

export function Stat({
  value,
  decimals = 0,
  suffix = "",
  label,
  tone = "light",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(value);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const dur = 1300;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setV(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref}>
      <p
        className={cx(
          "font-display text-4xl font-bold tracking-tight tabular-nums sm:text-[2.6rem]",
          tone === "light" ? "text-ink" : "text-fog"
        )}
      >
        {v.toFixed(decimals)}
        <span className={tone === "light" ? "text-accent" : "text-accent-bright"}>
          {suffix}
        </span>
      </p>
      <p
        className={cx(
          "mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em]",
          tone === "light" ? "text-smoke" : "text-mist/70"
        )}
      >
        {label}
      </p>
    </div>
  );
}

/* ---------------- standards ticker ---------------- */

export function Ticker() {
  const row = (key: string) => (
    <div className="flex shrink-0 items-center" key={key} aria-hidden={key === "b"}>
      {TICKER_ITEMS.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="px-7 font-mono text-[11.5px] font-medium tracking-[0.22em] text-smoke">
            {it}
          </span>
          <WindMark className="h-3.5 w-3.5 text-accent/70" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker overflow-hidden border-y border-mist bg-card py-3.5">
      <div className="ticker-track flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ---------------- accordion ---------------- */

export function Accordion({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-mist">
      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-[17px] font-medium leading-snug text-ink transition-colors group-hover:text-accent-dark">
          {q}
        </span>
        <span
          className={cx(
            "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
            open
              ? "rotate-45 border-accent bg-accent text-card"
              : "border-mist text-smoke group-hover:border-accent group-hover:text-accent"
          )}
        >
          <PlusIcon className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
      </button>
      <div
        className={cx(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-[14.5px] leading-relaxed text-smoke">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- registration corner marks ---------------- */

export function Corners({ tone = "light" }: { tone?: "light" | "dark" }) {
  const c = tone === "light" ? "border-ink/30" : "border-fog/35";
  const base = "pointer-events-none absolute h-3.5 w-3.5";
  return (
    <>
      <span className={cx(base, "-top-1.5 -left-1.5 border-t border-l", c)} />
      <span className={cx(base, "-top-1.5 -right-1.5 border-t border-r", c)} />
      <span className={cx(base, "-bottom-1.5 -left-1.5 border-b border-l", c)} />
      <span className={cx(base, "-bottom-1.5 -right-1.5 border-b border-r", c)} />
    </>
  );
}

/* ---------------- trust pills ---------------- */

export function CertPills({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {CERT_PILLS.map((c) => (
        <li
          key={c.short}
          title={c.label}
          className={cx(
            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.08em] transition-colors duration-200",
            tone === "light"
              ? "border-mist bg-card text-ink/80 hover:border-accent hover:text-accent-dark"
              : "border-fog/25 bg-deep/40 text-fog/90 hover:border-accent-bright hover:text-accent-bright"
          )}
        >
          <ShieldCheck
            className={cx(
              "h-3.5 w-3.5",
              tone === "light" ? "text-accent" : "text-accent-bright"
            )}
          />
          {c.short}
        </li>
      ))}
    </ul>
  );
}

/* ---------------- blog diagram thumbnails ---------------- */

const MONO = "IBM Plex Mono, monospace";
const INK = "#10282c";
const ACC = "#0e7c72";

export function BlogThumb({ diagram, className = "" }: { diagram: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={cx("h-full w-full", className)}
      role="img"
      aria-label="Technical diagram"
    >
      <rect width="320" height="200" fill="#eef5f3" />
      <g stroke="#d9e3e1" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={40 * (i + 1) - 20} y1="0" x2={40 * (i + 1) - 20} y2="200" />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={40 * (i + 1)} x2="320" y2={40 * (i + 1)} />
        ))}
      </g>

      {diagram === "thickness" && (
        <g>
          <path
            d="M42 156 C42 104 62 72 96 72 C130 72 150 104 150 156"
            stroke={INK}
            strokeWidth="2"
            fill="none"
          />
          <line x1="42" y1="156" x2="150" y2="156" stroke={INK} strokeWidth="2" />
          <path d="M150 86 L196 62 M150 142 L196 138" stroke={INK} strokeWidth="1" strokeDasharray="4 4" />
          <rect x="196" y="56" width="86" height="20" rx="3" fill={ACC} opacity="0.9" />
          <rect x="196" y="80" width="86" height="20" rx="3" fill="#ffffff" stroke={INK} strokeWidth="1.4" />
          <rect x="196" y="104" width="86" height="20" rx="3" fill="#d9e3e1" stroke={INK} strokeWidth="1.4" />
          <line x1="196" y1="146" x2="282" y2="146" stroke={ACC} strokeWidth="1.6" />
          <line x1="196" y1="140" x2="196" y2="152" stroke={ACC} strokeWidth="1.6" />
          <line x1="282" y1="140" x2="282" y2="152" stroke={ACC} strokeWidth="1.6" />
          <text x="239" y="166" textAnchor="middle" fontFamily={MONO} fontSize="10" fill={ACC} fontWeight="500">
            3.5 MIL PALM
          </text>
          <text x="42" y="46" fontFamily={MONO} fontSize="9" fill={INK} opacity="0.55">
            FIG. 01 — CROSS SECTION
          </text>
        </g>
      )}

      {diagram === "aql" && (
        <g>
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <rect
                key={`${r}${c}`}
                x={34 + c * 26}
                y={42 + r * 22}
                width="20"
                height="16"
                rx="2"
                fill="#ffffff"
                stroke={INK}
                strokeWidth="1.3"
              />
            ))
          )}
          <path d="M122 72 L150 86 M122 92 L150 96" stroke={INK} strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="186" cy="90" r="30" fill="#ffffff" stroke={ACC} strokeWidth="2" />
          {[
            [174, 82], [190, 78], [180, 96], [196, 90], [186, 104], [172, 98],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.4" fill={ACC} />
          ))}
          <rect x="232" y="72" width="60" height="26" rx="13" fill={ACC} />
          <path d="m244 85 5 5 9-10" stroke="#ffffff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="262" y="116" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={INK}>
            PASS
          </text>
          <line x1="34" y1="156" x2="292" y2="156" stroke={INK} strokeWidth="1.4" />
          {[
            [34, "0"], [120, "1.0"], [205, "1.5"], [292, "2.5"],
          ].map(([x, l]) => (
            <g key={l as string}>
              <line x1={x as number} y1="150" x2={x as number} y2="162" stroke={INK} strokeWidth="1.4" />
              <text x={x as number} y="176" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={INK} opacity="0.7">
                {l}
              </text>
            </g>
          ))}
          <line x1="205" y1="138" x2="205" y2="150" stroke={ACC} strokeWidth="2.4" />
          <text x="205" y="132" textAnchor="middle" fontFamily={MONO} fontSize="9.5" fill={ACC} fontWeight="500">
            AQL 1.5
          </text>
          <text x="34" y="30" fontFamily={MONO} fontSize="9" fill={INK} opacity="0.55">
            FIG. 02 — LOT SAMPLING
          </text>
        </g>
      )}

      {diagram === "chemo" && (
        <g>
          <line x1="52" y1="46" x2="52" y2="158" stroke={INK} strokeWidth="1.6" />
          <line x1="52" y1="158" x2="294" y2="158" stroke={INK} strokeWidth="1.6" />
          <rect x="52" y="60" width="196" height="18" fill={ACC} />
          <rect x="52" y="92" width="148" height="18" fill={ACC} opacity="0.72" />
          <rect x="52" y="124" width="96" height="18" fill={ACC} opacity="0.45" />
          <text x="256" y="73" fontFamily={MONO} fontSize="9" fill={INK}>
            240+
          </text>
          <text x="208" y="105" fontFamily={MONO} fontSize="9" fill={INK}>
            180
          </text>
          <text x="156" y="137" fontFamily={MONO} fontSize="9" fill={INK}>
            120
          </text>
          <text x="52" y="176" fontFamily={MONO} fontSize="9" fill={INK} opacity="0.6">
            MINUTES TO BREAKTHROUGH — ASTM D6978
          </text>
          <text x="52" y="36" fontFamily={MONO} fontSize="9" fill={INK} opacity="0.55">
            FIG. 03 — PERMEATION PANEL
          </text>
        </g>
      )}

      {diagram === "sizing" && (
        <g>
          <path
            d="M86 168 C58 168 48 150 48 132 L48 92 C48 84 60 84 60 92 L60 62 C60 54 72 54 72 62 L72 50 C72 42 84 42 84 50 L84 60 C84 52 96 52 96 60 L96 122 C104 110 118 112 118 124 C118 140 110 168 86 168 Z"
            fill="#ffffff"
            stroke={INK}
            strokeWidth="2"
          />
          <line x1="40" y1="112" x2="126" y2="112" stroke={ACC} strokeWidth="1.6" />
          <path d="M40 106 v12 M126 106 v12" stroke={ACC} strokeWidth="1.6" />
          <text x="83" y="100" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill={ACC} fontWeight="500">
            PALM WIDTH
          </text>
          {[
            ["S", "< 178 MM", 74],
            ["M", "178–203", 100],
            ["L", "203–229", 126],
            ["XL", "> 229", 152],
          ].map(([s, v, y], i) => (
            <g key={s as string}>
              <text x="168" y={(y as number) + 4} fontFamily={MONO} fontSize="11" fontWeight="500" fill={i === 1 ? ACC : INK}>
                {s}
              </text>
              <line x1="196" y1={y as number} x2={296 - (i as number) * 14} y2={y as number} stroke={i === 1 ? ACC : INK} strokeWidth={i === 1 ? 2.4 : 1.2} opacity={i === 1 ? 1 : 0.45} />
              <text x="196" y={(y as number) + 14} fontFamily={MONO} fontSize="8" fill={INK} opacity="0.6">
                {v}
              </text>
            </g>
          ))}
          <text x="40" y="36" fontFamily={MONO} fontSize="9" fill={INK} opacity="0.55">
            FIG. 04 — SIZE RUN
          </text>
        </g>
      )}
    </svg>
  );
}
