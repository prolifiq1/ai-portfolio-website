export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Onuchukwu Joseph Chimezie. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:prolifiqmexie@gmail.com"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Email
            </a>
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
    </footer>
  );
}
