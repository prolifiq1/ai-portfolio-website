export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mb-10 text-base text-muted">
            I am open to conversations about doctoral research opportunities,
            collaborations, and positions where I can contribute to meaningful work
            in AI and data science. If my work resonates with what you are looking
            for, I would welcome the chance to talk.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:prolifiqmexie@gmail.com"
              className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Send an Email
            </a>
            <a
              href="/Chimezie_Onuchukwu_CV.pdf"
              download
              className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card-hover"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-8">
            <a
              href="https://github.com/prolifiq1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/onuchukwu-joseph-589912148"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
