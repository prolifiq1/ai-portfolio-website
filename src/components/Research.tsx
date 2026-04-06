import { siteContent } from "@/content/site-content";

export function Research() {
  return (
    <section id="research" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="gradient-text mb-4 text-center text-4xl font-bold sm:text-5xl">
          Research Interests
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-text-secondary">
          Areas I want to explore further in doctoral research
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.researchInterests.map((interest) => (
            <div key={interest.title} className="glass-card p-6">
              <h3 className="mb-3 text-base font-semibold text-text-primary">
                {interest.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
