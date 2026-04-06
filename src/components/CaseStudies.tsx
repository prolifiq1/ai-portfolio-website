"use client";

import Link from "next/link";
import { siteContent } from "@/content/site-content";

export function CaseStudies() {
  const featured = siteContent.caseStudies.filter((cs) => cs.featured);
  const other = siteContent.caseStudies.filter((cs) => !cs.featured);

  return (
    <section id="case-studies" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Case Studies
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Selected work in depth
        </h2>
        <p className="mb-12 max-w-2xl text-base text-muted">
          Each case study documents a complete project from problem framing through
          implementation to evaluation. Written for readers who want to understand
          not just what was built, but how and why.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-study/${cs.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {cs.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent-light px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {cs.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {cs.summary}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-accent">
                  Read case study &rarr;
                </span>
                {cs.github && (
                  <a
                    href={cs.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-medium text-muted hover:text-foreground transition-colors"
                  >
                    GitHub &nearr;
                  </a>
                )}
              </div>
            </Link>
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {other.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-study/${cs.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div>
                  <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-muted">{cs.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
