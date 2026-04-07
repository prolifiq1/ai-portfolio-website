const experiences = [
  {
    role: "MSc Data Science Student",
    org: "University of Hull",
    period: "2025 - 2026",
    description:
      "Completed rigorous coursework in AI, machine learning, statistical analysis, and data visualisation. Built complete ML pipelines for computer vision, customer behaviour prediction, and demographic analysis.",
    tags: ["Python", "TensorFlow", "scikit-learn", "Pandas"],
  },
  {
    role: "AI & Data Science Practitioner",
    org: "Independent Research",
    period: "2024 - Present",
    description:
      "Designed and trained CNNs for image classification, built comparative ML studies spanning regression, classification, and clustering, and produced evidence-based policy recommendations from census data analysis.",
    tags: ["Deep Learning", "CNN", "Statistical Analysis", "EDA"],
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="gradient-text mb-4 text-center text-4xl font-bold sm:text-5xl">
          Experience Timeline
        </h2>
        <p className="mx-auto mb-16 text-center text-text-secondary">
          My path in data science and AI research
        </p>

        <div className="relative">
          <div className="timeline-line absolute left-1/2 top-0 h-full -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className="absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-pink bg-bg-primary" />

                <div className={`glass-card w-full max-w-md p-6 ${i % 2 === 0 ? "mr-auto pr-8 lg:mr-[calc(50%+24px)]" : "ml-auto pl-8 lg:ml-[calc(50%+24px)]"}`}>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-purple/10">
                      <svg className="h-5 w-5 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text-primary">{exp.role}</h3>
                      <p className="text-sm text-accent-purple">{exp.org}</p>
                    </div>
                  </div>
                  <p className="mb-2 text-xs text-text-muted">{exp.period}</p>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-text-muted/30 px-3 py-1 text-xs text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
