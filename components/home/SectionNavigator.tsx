"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const sections = [
  { id: "hero", label: "Introduction", number: "01" },
  { id: "writing", label: "Writing", number: "02" },
  { id: "about", label: "About", number: "03" },
  { id: "projects", label: "Projects", number: "04" },
];

export function SectionNavigator() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -55%", threshold: [0, 0.25, 0.5, 0.75] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="Home page sections"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-7"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { delay: 0.45, duration: 0.4 }
      }
    >
      <ol className="relative flex flex-col gap-1 rounded-lg border border-border/70 bg-background/80 p-1.5 shadow-lg shadow-black/5 backdrop-blur-xl">
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-[1.18rem] top-3 w-px bg-border/80"
        />
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id} className="relative">
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveSection(section.id)}
                className="group flex h-9 items-center rounded-md px-2 text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="relative z-10 flex size-4 items-center justify-center">
                  <span
                    className={`block rounded-full border bg-background transition-all duration-200 ${
                      isActive
                        ? "size-2.5 border-foreground bg-foreground"
                        : "size-1.5 border-muted-foreground/60 group-hover:size-2 group-hover:border-foreground"
                    }`}
                  />
                </span>
                <span
                  className={`ml-2 grid w-20 overflow-hidden transition-opacity duration-200 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-45 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  <span className="flex items-center justify-between gap-2 whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.14em]">
                    {section.label}
                    <span className="text-[0.58rem] text-muted-foreground/70">
                      {section.number}
                    </span>
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
