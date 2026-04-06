import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCaseStudyContent,
  getAllCaseStudySlugs,
  parseMarkdown,
} from "@/lib/case-studies";
import { siteContent } from "@/content/site-content";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const cs = siteContent.caseStudies.find((c) => c.slug === slug);
  return {
    title: cs ? `${cs.title} | Chimezie Onuchukwu` : "Case Study",
    description: cs?.summary ?? "",
  };
}

function renderContent(text: string) {
  const paragraphs = text.split("\n\n").filter((p) => p.trim());

  return paragraphs.map((p, i) => {
    const trimmed = p.trim();

    if (trimmed.startsWith("**") && trimmed.includes("**")) {
      const match = trimmed.match(new RegExp("^\\*\\*(.+?)\\*\\*(.*)$", "s"));
      if (match) {
        return (
          <div key={i} className="mb-4">
            <p className="text-base leading-relaxed text-foreground/85">
              <strong className="font-semibold text-foreground">
                {match[1]}
              </strong>
              {match[2]}
            </p>
          </div>
        );
      }
    }

    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="mb-4 list-disc space-y-1 pl-6">
          {items.map((item, j) => (
            <li key={j} className="text-base leading-relaxed text-foreground/85">
              {item.replace(/^- /, "")}
            </li>
          ))}
        </ul>
      );
    }

    if (
      trimmed.startsWith("1. ") ||
      trimmed.startsWith("2. ") ||
      trimmed.startsWith("3. ")
    ) {
      const items = trimmed
        .split("\n")
        .filter((l) => /^\d+\.\s/.test(l));
      return (
        <ol key={i} className="mb-4 list-decimal space-y-1 pl-6">
          {items.map((item, j) => (
            <li key={j} className="text-base leading-relaxed text-foreground/85">
              {item.replace(/^\d+\.\s/, "")}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <p key={i} className="mb-4 text-base leading-relaxed text-foreground/85">
        {trimmed}
      </p>
    );
  });
}

export default async function CaseStudyPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const content = getCaseStudyContent(slug);
  if (!content) notFound();

  const { title, sections } = parseMarkdown(content);
  const cs = siteContent.caseStudies.find((c) => c.slug === slug);

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/#case-studies"
          className="mb-8 inline-flex items-center text-sm font-medium text-accent hover:text-blue-700"
        >
          &larr; Back to all case studies
        </Link>

        {cs && (
          <div className="mb-6 flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-accent-light px-2.5 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>

        {cs?.github && (
          <a
            href={cs.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground hover:border-foreground/20"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        )}

        <div className="space-y-8">
          {sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  {section.heading}
                </h2>
              )}
              <div>{renderContent(section.content)}</div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/#case-studies"
            className="text-sm font-medium text-accent hover:text-blue-700"
          >
            &larr; Back to all case studies
          </Link>
        </div>
      </div>
    </article>
  );
}
