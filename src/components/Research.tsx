import { siteContent } from "@/content/site-content";

export function Research() {
  return (
    <section id="research" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Research Interests
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Areas I want to explore further
        </h2>
        <p className="mb-12 max-w-2xl text-base text-muted">
          These interests have emerged from the patterns I have noticed across my
          projects, the questions I kept returning to, and the problems I found
          most compelling.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.researchInterests.map((interest) => (
            <div
              key={interest.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-3 text-base font-semibold text-foreground">
                {interest.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
