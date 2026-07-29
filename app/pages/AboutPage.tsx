"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "../../components/PageContainer";

const LANGUAGES = [
  { name: "English", native: "English" },
  { name: "French", native: "Français" },
  { name: "Cantonese", native: "粵語" },
  { name: "Japanese", native: "日本語" },
  { name: "Mandarin", native: "普通话" },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Global by experience",
    body: "Living across five cities and travelling through more than thirty countries taught me to adapt quickly, listen closely, and stay curious about how other people see the world.",
  },
  {
    number: "02",
    title: "Clear by design",
    body: "I turn complex technical subjects into ideas people can understand and use. The best products feel simple on the surface because the thinking underneath is rigorous.",
  },
  {
    number: "03",
    title: "Built from zero",
    body: "I found my way into technology through an unconventional path. It shaped how I teach, collaborate, and build: with patience, practical context, and no assumed knowledge.",
  },
];

const fadeUp = (reduced: boolean, delay = 0) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-8%" },
        transition: { duration: 0.55, ease: "easeOut" as const, delay },
      };

export function AboutPage() {
  const reduced = useReducedMotion() ?? false;

  return (
    <main className="overflow-hidden">
      <PageContainer>
        <motion.section
          className="grid min-h-[calc(88svh-4rem)] content-center gap-12 py-16 lg:min-h-[calc(92svh-4rem)] lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-24 lg:py-24"
          {...fadeUp(reduced)}
        >
          <div className="self-center">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground before:h-px before:w-8 before:bg-foreground/30">
              About Adrian
            </p>
            <h1 className="mt-8 max-w-[12ch] text-[clamp(3.4rem,8.5vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-foreground">
              I make the complex feel clear.
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              A data scientist and product-minded problem solver with a global
              perspective. I use analytics, technology, and thoughtful design to
              build things people can trust.
            </p>
          </div>

          <aside className="self-end border-l border-border pl-6 lg:mb-3 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-6">
            <div className="flex items-center gap-4">
              <div
                aria-hidden
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border font-mono text-sm text-foreground"
              >
                AK
              </div>
              <div>
                <p className="font-medium text-foreground">Adrian K</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Data Scientist
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin aria-hidden className="h-4 w-4" />
                Hong Kong
              </p>
              <p>Strategy · Analytics · Technology</p>
            </div>
          </aside>
        </motion.section>

        <section className="border-t border-border">
          <div className="grid py-16 sm:py-20 lg:grid-cols-[18rem_1fr] lg:gap-24 lg:py-28">
            <motion.div {...fadeUp(reduced)}>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground">
                How I think
              </p>
              <h2 className="mt-5 max-w-[10ch] text-3xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-4xl">
                Perspective shapes the work.
              </h2>
            </motion.div>

            <div className="mt-12 border-t border-border lg:mt-0">
              {PRINCIPLES.map((principle, index) => (
                <motion.article
                  key={principle.number}
                  className="grid gap-4 border-b border-border py-8 sm:grid-cols-[3rem_13rem_1fr] sm:gap-6 sm:py-10"
                  {...fadeUp(reduced, index * 0.05)}
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {principle.number}
                  </span>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">
                    {principle.title}
                  </h3>
                  <p className="max-w-xl text-base leading-7 text-muted-foreground">
                    {principle.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          className="border-t border-border py-16 sm:py-20 lg:py-24"
          {...fadeUp(reduced)}
        >
          <div className="grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-24">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground">
                In conversation
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-foreground">
                Five languages.
              </h2>
            </div>

            <ul className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {LANGUAGES.map((language, index) => (
                <li
                  key={language.name}
                  className={`flex min-h-28 flex-col justify-between border-b border-border py-5 sm:px-5 ${
                    index % 2 === 1 ? "sm:border-l" : ""
                  } ${index > 1 ? "lg:border-l" : ""}`}
                >
                  <span className="text-sm font-medium text-foreground">
                    {language.name}
                  </span>
                  <span className="mt-5 text-sm text-muted-foreground">
                    {language.native}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      </PageContainer>

      <motion.section
        className="border-y border-foreground bg-foreground text-background"
        {...fadeUp(reduced)}
      >
        <PageContainer className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-background/60">
              Keep exploring
            </p>
            <h2 className="mt-6 max-w-[14ch] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              See the thinking put into practice.
            </h2>
          </div>
          <nav className="flex flex-col gap-5 sm:flex-row sm:gap-8">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 border-b border-background/40 pb-2 text-sm font-medium transition-colors hover:border-background"
            >
              View projects
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 border-b border-background/40 pb-2 text-sm font-medium transition-colors hover:border-background"
            >
              Read the blog
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </nav>
        </PageContainer>
      </motion.section>
    </main>
  );
}
