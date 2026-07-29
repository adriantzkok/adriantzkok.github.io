import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          This page could not be found.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The content you’re looking for may have moved or no longer exists.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium transition hover:border-foreground/30"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
