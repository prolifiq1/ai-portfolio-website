import { siteContent } from "@/content/site-content";

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              About
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Research-minded practitioner with applied depth
            </h2>
            <div className="space-y-1">
              {siteContent.strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-muted">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            {siteContent.about.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
