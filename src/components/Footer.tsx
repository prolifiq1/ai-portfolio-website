export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Onuchukwu Joseph Chimezie. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:prolifiqmexie@gmail.com"
              className="text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              Email
            </a>
            <a
              href="https://github.com/prolifiq1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/onuchukwu-joseph-589912148"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
