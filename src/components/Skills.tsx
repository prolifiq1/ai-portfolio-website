import { siteContent } from "@/content/site-content";

export function Skills() {
  const categories = Object.entries(siteContent.skills);

  return (
    <section id="skills" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Skills & Tools
        </p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technical capabilities
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
