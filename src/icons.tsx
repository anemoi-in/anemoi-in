import React from "react";

type P = { className?: string; strokeWidth?: number };

const S = ({
  d,
  className = "w-5 h-5",
  strokeWidth = 1.6,
  children,
}: P & { d?: string; children?: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {d ? <path d={d} /> : null}
    {children}
  </svg>
);

/* Brand mark — three wind lines (Anemoi, the Greek wind gods) */
export const WindMark = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path
      d="M6 11h13.5a3 3 0 1 0-3-3M6 17h17a3.4 3.4 0 1 1-3.4 3.4M6 23h8"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PulseIcon = (p: P) => (
  <S {...p} d="M3 12h4l2.2-5.5 3.6 11 2.4-5.5H21M12 3.5v.01" />
);

export const ClocheIcon = (p: P) => (
  <S {...p}>
    <path d="M4 16a8 8 0 0 1 16 0" />
    <path d="M2.5 16h19M12 8V6.2M10.6 5.4h2.8" />
    <path d="M7 19.5h10" />
  </S>
);

export const GearIcon = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.8 1.8M16.7 16.7l1.8 1.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8" />
  </S>
);

export const ShieldCheck = (p: P) => (
  <S {...p}>
    <path d="M12 3 5 5.8v5.4c0 4.4 2.9 7.6 7 9.3 4.1-1.7 7-4.9 7-9.3V5.8L12 3Z" />
    <path d="m9 11.8 2.1 2.1 4-4.2" />
  </S>
);

export const FlaskIcon = (p: P) => (
  <S {...p}>
    <path d="M9.5 3.5h5M10.5 3.5v5.2L5.2 17a2.6 2.6 0 0 0 2.3 3.9h9a2.6 2.6 0 0 0 2.3-3.9l-5.3-8.3V3.5" />
    <path d="M7.6 14.5h8.8" />
  </S>
);

export const TraceIcon = (p: P) => (
  <S {...p}>
    <rect x="4" y="4" width="7" height="7" rx="1" />
    <rect x="13" y="4" width="7" height="7" rx="1" />
    <rect x="4" y="13" width="7" height="7" rx="1" />
    <path d="M13 13h3v3h-3zM17.5 17.5H20V20h-2.5zM17 13.5h.01M13.5 19.5h.01" />
  </S>
);

export const FactoryIcon = (p: P) => (
  <S {...p}>
    <path d="M3 20V9.5l5.5 3.5V9.5l5.5 3.5V5h4v15H3Z" />
    <path d="M6.5 17h2M11.5 17h2M16 17h1.5" />
  </S>
);

export const DocIcon = (p: P) => (
  <S {...p}>
    <path d="M6 3.5h8l4 4v13H6v-17Z" />
    <path d="M14 3.5V8h4M9 12h6M9 15.5h6M9 8.5h2" />
  </S>
);

export const ArrowRight = (p: P) => (
  <S {...p} d="M4 12h16M13.5 5.5 20 12l-6.5 6.5" />
);

export const ArrowUpRight = (p: P) => (
  <S {...p} d="M7 17 17 7M9 7h8v8" />
);

export const CheckIcon = (p: P) => <S {...p} d="m5 12.5 4.5 4.5L19 7.5" />;

export const PlusIcon = (p: P) => <S {...p} d="M12 5v14M5 12h14" />;

export const PhoneIcon = (p: P) => (
  <S {...p} d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a1.5 1.5 0 0 1-1.7 1.5C10.5 19.6 4.4 13.5 3.5 5.7A1.5 1.5 0 0 1 5 4Z" />
);

export const MailIcon = (p: P) => (
  <S {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </S>
);

export const PinIcon = (p: P) => (
  <S {...p}>
    <path d="M12 21s-6.5-5.6-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.4 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </S>
);

export const MenuIcon = (p: P) => <S {...p} d="M4 7h16M4 12h16M4 17h10" />;

export const CloseIcon = (p: P) => <S {...p} d="m6 6 12 12M18 6 6 18" />;

export const ChevronDown = (p: P) => <S {...p} d="m6 9.5 6 6 6-6" />;

export const BoxIcon = (p: P) => (
  <S {...p}>
    <path d="M3.5 7.5 12 3.5l8.5 4v9L12 20.5l-8.5-4v-9Z" />
    <path d="M3.5 7.5 12 11.5l8.5-4M12 11.5v9" />
  </S>
);

export const RulerIcon = (p: P) => (
  <S {...p}>
    <rect x="3" y="9" width="18" height="6" rx="1" />
    <path d="M7 9v2.6M11 9v3.6M15 9v2.6M19 9v3.6" />
  </S>
);

export const HandIcon = (p: P) => (
  <S {...p}>
    <path d="M8.5 11.5V5.8a1.4 1.4 0 0 1 2.8 0v5m0-6.2a1.4 1.4 0 0 1 2.8 0v6.2m0-4.6a1.4 1.4 0 0 1 2.8 0v7.3c0 4-2.4 7-6.2 7-3.2 0-4.6-1.7-6.5-5.2-.7-1.3-1.6-3-2.2-4.1-.5-.9.5-1.9 1.5-1.5 1 .4 1.9 1.5 2.5 2.6l1.5 2.4" />
  </S>
);
