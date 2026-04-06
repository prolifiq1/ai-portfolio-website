import { siteContent } from "@/content/site-content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.04),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            AI &amp; Data Science
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteContent.name}
          </h1>
          <p className="mb-4 text-xl font-medium text-foreground/80 sm:text-2xl">
            {siteContent.heroTagline}
          </p>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {siteContent.heroDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#case-studies"
              className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              View Case Studies
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card-hover"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
