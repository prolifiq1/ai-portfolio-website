import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function About() {
  const paragraphs = siteContent.about.split("\n\n");

  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="gradient-text mb-4 text-center text-4xl font-bold sm:text-5xl">
          About Me
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="h-64 w-64 overflow-hidden rounded-full border-2 border-accent-purple/30 bg-bg-secondary p-1">
                <Image
                  src="/profile.jpg"
                  alt="Onuchukwu Joseph Chimezie"
                  width={256}
                  height={256}
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-3 -z-10 rounded-full bg-accent-purple/5 blur-xl" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary">
              AI and Data Science Researcher with applied depth
            </h3>
            {paragraphs.slice(0, 2).map((p, i) => (
              <p key={i} className="mb-4 text-base leading-relaxed text-text-secondary">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
