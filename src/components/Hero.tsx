"use client";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="gradient-text mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
        ONUCHUKWU JOSEPH
        <br />
        CHIMEZIE
      </h1>
      <h2 className="mb-4 text-2xl font-semibold text-text-primary sm:text-3xl">
        Welcome to My Portfolio
      </h2>
      <p className="mb-8 text-lg text-text-secondary">
        Exploring AI, ML &amp; Data Science
      </p>

      <div className="mb-8 flex gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-purple/40 bg-accent-purple/10">
          <svg className="h-7 w-7 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
          </svg>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-blue/40 bg-accent-blue/10">
          <svg className="h-7 w-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
          </svg>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-pink/40 bg-accent-pink/10">
          <svg className="h-7 w-7 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
      </div>

      <p className="text-sm text-text-muted">
        Graduate AI &amp; Data Science Researcher
      </p>
      <p className="text-sm text-accent-purple">
        Building Intelligent Systems &middot; Python &middot; Deep Learning &middot; ML
      </p>
    </section>
  );
}
