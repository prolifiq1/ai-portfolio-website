"use client";

const contactLinks = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "prolifiqmexie@gmail.com",
    href: "mailto:prolifiqmexie@gmail.com",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub Profile",
    href: "https://github.com/prolifiq1",
    color: "text-gray-300",
    bg: "bg-gray-400/10",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/onuchukwu-joseph-589912148",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="gradient-text mb-4 text-center text-4xl font-bold sm:text-5xl">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-text-secondary">
          Ready to collaborate on the next big AI innovation? Let&apos;s build
          something amazing together.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <svg className="h-5 w-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <h3 className="text-lg font-semibold text-text-primary">
                Send a Message
              </h3>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-text-muted/20 bg-bg-primary/50 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-accent-purple/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-text-muted/20 bg-bg-primary/50 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-accent-purple/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-lg border border-text-muted/20 bg-bg-primary/50 px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-accent-purple/50"
              />
              <a
                href="mailto:prolifiqmexie@gmail.com"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Launch Message
              </a>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent-purple/30 bg-accent-purple/10">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="absolute -inset-3 -z-10 rounded-full bg-accent-purple/5 blur-xl" />
            </div>
            <p className="mb-6 text-center text-sm text-text-secondary italic">
              &quot;Ready to process your ideas into reality!&quot;
            </p>

            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Connect With Me
            </h3>

            <div className="w-full max-w-sm space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 p-4 transition-all duration-200 hover:border-accent-purple/40"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${link.bg} ${link.color}`}>
                    {link.icon}
                  </div>
                  <span className="text-sm text-text-secondary">{link.label}</span>
                </a>
              ))}

              <a
                href="/Onuchukwu_Joseph_Chimezie_CV.pdf"
                download
                className="glass-card flex items-center gap-4 p-4 transition-all duration-200 hover:border-accent-purple/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400/10 text-green-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <span className="text-sm text-text-secondary">Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
