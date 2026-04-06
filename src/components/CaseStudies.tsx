"use client";

import Link from "next/link";
import { siteContent } from "@/content/site-content";

const iconColors = [
  "from-orange-400 to-red-500",
  "from-indigo-400 to-purple-500",
  "from-emerald-400 to-teal-500",
  "from-pink-400 to-rose-500",
];

const iconSvgs = [
  <svg key="0" className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="1" className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  <svg key="2" className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  <svg key="3" className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>,
];

export function CaseStudies() {
  const featured = siteContent.caseStudies.filter((cs) => cs.featured);

  return (
    <section id="case-studies" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="gradient-text mb-4 text-center text-4xl font-bold sm:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-text-secondary">
          Interactive gallery showcasing AI/ML projects that push the boundaries
          of what&apos;s possible
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((cs, i) => (
            <div
              key={cs.slug}
              className="glass-card group flex flex-col p-6 transition-all duration-300"
            >
              <div className="mb-4 flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${iconColors[i % iconColors.length]}`}
                >
                  {iconSvgs[i % iconSvgs.length]}
                </div>
                <div className="flex gap-2">
                  {cs.github && (
                    <a
                      href={cs.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted transition-colors hover:text-text-primary"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                  <Link
                    href={`/case-study/${cs.slug}`}
                    className="text-text-muted transition-colors hover:text-text-primary"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </Link>
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {cs.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-text-secondary">
                {cs.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-text-muted/30 px-3 py-1 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
