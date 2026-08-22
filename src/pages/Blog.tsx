import React, { useEffect, useState } from "react";
import { POSTS } from "../data";
import { href } from "../router";
import { Reveal, Eyebrow, BlogThumb, BtnLink } from "../ui";
import { ArrowRight, ArrowUpRight, CheckIcon } from "../icons";

/* ---------------- index ---------------- */

export function BlogIndex() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <section className="grid-paper border-b border-mist">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-12 lg:px-10 lg:pt-16">
          <Reveal>
            <Eyebrow>Field notes · The Anemoi journal</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-display text-[2.3rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Notes from the spec sheet.
            </h1>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-smoke">
              Testing math, material trade-offs and sizing strategy — written by the
              compliance and field teams who answer the phone. {POSTS.length} articles,
              zero filler.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          {/* featured */}
          <Reveal>
            <a
              href={href(`/blog/${featured.slug}`)}
              className="group grid overflow-hidden rounded-md border border-mist bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_28px_56px_-28px_rgba(12,33,37,0.4)] lg:grid-cols-2"
            >
              <div className="relative h-60 overflow-hidden border-b border-mist lg:h-auto lg:border-b-0 lg:border-r">
                <BlogThumb diagram={featured.diagram} className="transition-transform duration-700 group-hover:scale-[1.04]" />
                <span className="absolute left-4 top-4 rounded-[3px] bg-accent px-2.5 py-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.2em] text-card">
                  Latest
                </span>
              </div>
              <div className="flex flex-col p-8 lg:p-12">
                <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-accent-dark">
                  {featured.category} <span className="text-smoke">· {featured.date}</span>
                </p>
                <h2 className="mt-4 font-display text-[26px] font-medium leading-[1.15] tracking-tight text-ink transition-colors group-hover:text-accent-dark sm:text-[30px]">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-smoke">
                  {featured.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent-dark">
                  {featured.readTime}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </a>
          </Reveal>

          {/* rest */}
          <div className="mt-5 space-y-4">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <a
                  href={href(`/blog/${p.slug}`)}
                  className="group grid gap-5 rounded-md border border-mist bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_36px_-24px_rgba(12,33,37,0.4)] sm:grid-cols-[190px_1fr_auto] sm:items-center sm:p-5"
                >
                  <div className="relative h-28 overflow-hidden rounded-[4px] border border-mist sm:h-[104px]">
                    <BlogThumb diagram={p.diagram} className="transition-transform duration-700 group-hover:scale-[1.05]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent-dark">
                      {p.category} <span className="text-smoke">· {p.date}</span>
                    </p>
                    <h3 className="mt-2 max-w-xl font-display text-[18px] font-medium leading-snug text-ink transition-colors group-hover:text-accent-dark">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-[13px] leading-relaxed text-smoke">
                      {p.excerpt}
                    </p>
                  </div>
                  <span className="hidden h-10 w-10 place-items-center rounded-full border border-mist text-smoke transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-card sm:grid">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-mist bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-12 lg:px-10">
          <div>
            <p className="font-display text-[20px] font-medium text-ink">
              Put the reading into practice.
            </p>
            <p className="mt-1 text-[13.5px] text-smoke">
              Every article maps to a spec you can order against today.
            </p>
          </div>
          <BtnLink href={href("/quote")} arrow>
            Request a quote
          </BtnLink>
        </div>
      </section>
    </>
  );
}

/* ---------------- article ---------------- */

function ProgressBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("article-body");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const done = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setP(total > 0 ? (done / total) * 100 : 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-transparent">
      <div className="h-full bg-accent transition-[width] duration-150 ease-out" style={{ width: `${p}%` }} />
    </div>
  );
}

export function Article({ slug }: { slug: string }) {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return null;
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <ProgressBar />
      <section className="grid-paper border-b border-mist">
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-12 lg:px-0">
          <Reveal>
            <a
              href={href("/blog")}
              className="group inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-smoke transition-colors hover:text-accent-dark"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1" />
              All field notes
            </a>
            <p className="mt-6 font-mono text-[10.5px] font-medium uppercase tracking-[0.2em] text-accent-dark">
              {post.category} · {post.date} · {post.readTime}
            </p>
            <h1 className="mt-4 font-display text-[1.9rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-[2.4rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-smoke">{post.excerpt}</p>
            <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-smoke">
              By the Anemoi Compliance Desk
            </p>
          </Reveal>
        </div>
      </section>

      <section id="article-body" className="bg-card">
        <div className="mx-auto max-w-3xl px-6 py-14 lg:px-0">
          <Reveal>
            <div className="overflow-hidden rounded-md border border-mist">
              <div className="h-56 sm:h-72">
                <BlogThumb diagram={post.diagram} />
              </div>
            </div>
          </Reveal>
          <div className="mt-10 space-y-7">
            {post.sections.map((s, i) => {
              if (s.t === "h2")
                return (
                  <h2 key={i} className="pt-4 font-display text-[23px] font-medium tracking-tight text-ink">
                    {s.x}
                  </h2>
                );
              if (s.t === "quote")
                return (
                  <blockquote key={i} className="border-l-[3px] border-accent bg-accent-tint px-6 py-5">
                    <p className="font-display text-[18px] font-medium leading-relaxed text-accent-dark">
                      {s.x}
                    </p>
                  </blockquote>
                );
              if (s.t === "list")
                return (
                  <ul key={i} className="space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/85">
                        <span className="mt-1 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-dark">
                          <CheckIcon className="h-2.5 w-2.5" strokeWidth={2.6} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i} className="text-[15.5px] leading-[1.85] text-ink/85">
                  {s.x}
                </p>
              );
            })}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-md border border-mist bg-paper p-6">
            <p className="font-display text-[16px] font-medium text-ink">
              Spec the gloves this article describes.
            </p>
            <BtnLink href={href("/quote")} className="h-10 px-5 text-[13px]" arrow>
              Request a quote
            </BtnLink>
          </div>
        </div>
      </section>

      <section className="border-t border-mist">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Reveal>
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {related.map((p) => (
                <a
                  key={p.slug}
                  href={href(`/blog/${p.slug}`)}
                  className="group flex items-center gap-5 rounded-md border border-mist bg-card p-4 pr-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
                >
                  <div className="h-20 w-28 shrink-0 overflow-hidden rounded-[4px] border border-mist">
                    <BlogThumb diagram={p.diagram} className="transition-transform duration-700 group-hover:scale-[1.06]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[9.5px] font-medium uppercase tracking-[0.16em] text-accent-dark">{p.category}</p>
                    <h3 className="mt-1.5 font-display text-[15.5px] font-medium leading-snug text-ink group-hover:text-accent-dark">
                      {p.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
