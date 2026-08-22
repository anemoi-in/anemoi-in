export type Route =
  | { name: "home" }
  | { name: "material"; id: string }
  | { name: "industry"; id: string }
  | { name: "blog" }
  | { name: "article"; slug: string }
  | { name: "quote" };

export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  switch (parts[0]) {
    case "materials":
      return parts[1] ? { name: "material", id: parts[1] } : { name: "home" };
    case "industries":
      return parts[1] ? { name: "industry", id: parts[1] } : { name: "home" };
    case "blog":
      return parts[1] ? { name: "article", slug: parts[1] } : { name: "blog" };
    case "quote":
      return { name: "quote" };
    default:
      return { name: "home" };
  }
}

export const href = (path: string) => `#${path}`;

export function go(path: string) {
  window.location.hash = path;
}

/* Cross-page section scrolling (e.g. "Shop gloves" → home #range) */
let pendingSection: string | null = null;

export function goSection(id: string) {
  const route = parseHash(window.location.hash);
  if (route.name === "home") {
    scrollToSelector(id);
  } else {
    pendingSection = id;
    window.location.hash = "/";
  }
}

export function takePendingSection(): string | null {
  const p = pendingSection;
  pendingSection = null;
  return p;
}

export function scrollToSelector(id: string) {
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  });
}
