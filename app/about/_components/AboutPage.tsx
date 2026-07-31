"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { GraduationCap, Languages, Plane, Briefcase } from "lucide-react";
import { PageContainer } from "@/components/shared/PageContainer";

const SPOKEN_LANGUAGES = [
  { name: "English", nativeName: "English" },
  { name: "French", nativeName: "Français" },
  { name: "Cantonese", nativeName: "廣東話" },
  { name: "Mandarin", nativeName: "普通話" },
  { name: "Japanese", nativeName: "日本語" },
];

const PLACES = ["Toronto", "Singapore", "Taiwan", "Hong Kong", "Japan"];

const DETAILS = [
  {
    label: "University",
    eyebrow: "Education",
    content: "Studied at the University of Toronto",
    icon: GraduationCap,
  },
  {
    label: "Language Learning",
    eyebrow: "Language",
    content: "Learned Mandarin and Japanese from Zero",
    icon: Languages,
  },
  {
    label: "Study Abroad",
    eyebrow: "Education",
    content:
      "Completed exchange at Singapore Management University and National Taiwan University",
    icon: Plane,
  },
  {
    label: "Work",
    eyebrow: "Experience",
    content: "AI consulting at a Big 4 Firm",
    icon: Briefcase,
  },
  ,
  {
    label: "Tech",
    eyebrow: "Side Project",
    content: "Started XingJi Travels",
    icon: Briefcase,
  },
];

const getContainerVariants = (reducedMotion: boolean) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.09,
      delayChildren: reducedMotion ? 0 : 0.08,
    },
  },
});

const getItemVariants = (reducedMotion: boolean, distance = 16) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.55, ease: "easeOut" as const },
  },
});

function RotatingLanguage({
  name,
  nativeName,
}: {
  name: string;
  nativeName: string;
}) {
  const [showNativeName, setShowNativeName] = useState(false);
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    if (name === nativeName) return;

    const interval = window.setInterval(() => {
      setShowNativeName((current) => !current);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [name, nativeName]);

  const label = showNativeName ? nativeName : name;

  return (
    <span aria-label={`${name}, ${nativeName}`} className="inline-grid">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          aria-hidden="true"
          key={label}
          className="col-start-1 row-start-1"
          initial={reduced ? false : { opacity: 0, y: 5, filter: "blur(3px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            letterSpacing: showNativeName ? "0em" : "0.14em",
          }}
          exit={
            reduced ? undefined : { opacity: 0, y: -5, filter: "blur(3px)" }
          }
          transition={{ duration: reduced ? 0 : 0.3, ease: "easeOut" }}
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function AnimatedPlaces() {
  const [activePlace, setActivePlace] = useState(0);
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    if (reduced) return;

    const interval = window.setInterval(() => {
      setActivePlace((current) => (current + 1) % PLACES.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [reduced]);

  return (
    <motion.div
      variants={getContainerVariants(reduced)}
      className="flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-3 text-xs font-medium uppercase tracking-[0.16em]"
    >
      {PLACES.map((place, index) => {
        const isActive = activePlace === index;

        return (
          <motion.div
            key={place}
            variants={getItemVariants(reduced, 8)}
            className="group flex items-center gap-2.5"
            onHoverStart={() => setActivePlace(index)}
            onTap={() => setActivePlace(index)}
          >
            {index > 0 && (
              <motion.span
                aria-hidden="true"
                className="hidden h-px w-5 origin-left bg-foreground/25 sm:block"
                initial={{ scaleX: reduced ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reduced ? 0 : 0.35,
                  delay: reduced ? 0 : 0.28 + index * 0.09,
                }}
              />
            )}
            <motion.span
              className="relative cursor-default py-1 text-foreground/55"
              animate={{
                color: isActive
                  ? "var(--foreground)"
                  : "color-mix(in oklab, var(--foreground) 55%, transparent)",
                y: isActive && !reduced ? -2 : 0,
              }}
              transition={{ duration: reduced ? 0 : 0.3 }}
            >
              {isActive && (
                <motion.span
                  aria-hidden="true"
                  layoutId="traveling-place-plane"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-foreground"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 120, damping: 18 }
                  }
                >
                  <Plane className="h-3.5 w-3.5 rotate-45" strokeWidth={1.7} />
                </motion.span>
              )}
              {place}
              <motion.span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left bg-foreground"
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
              />
            </motion.span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function AboutPage() {
  const reduced = useReducedMotion() ?? false;
  const containerVariants = getContainerVariants(reduced);
  const itemVariants = getItemVariants(reduced);

  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-20 select-none text-[clamp(8rem,20vw,18rem)] font-semibold leading-none text-foreground/[0.025]"
      >
        43°N
      </div>

      <PageContainer className="relative">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-y border-border py-3 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.22em]"
        >
          <span>Profile / 2026</span>
          <span className="font-mono tracking-normal">
            43.6532° N, 79.3832° W
          </span>
        </motion.div>

        <motion.section
          className="grid min-h-[calc(100svh-7rem)] content-center gap-0 py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="self-center border-b border-border pb-16 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-20">
            <motion.p
              variants={itemVariants}
              className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground before:h-px before:w-8 before:bg-foreground/30"
            >
              About Adrian
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mt-8 max-w-[13ch] text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-foreground"
            >
              Curious about technology and the{" "}
              <span className="relative whitespace-nowrap">
                world
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[0.08em] w-full origin-left bg-foreground/35"
                  initial={{ scaleX: reduced ? 1 : 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: reduced ? 0 : 0.7, delay: 0.55 }}
                />
              </span>{" "}
              around me.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-9 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9"
            >
              I&apos;m Adrian. As a person from a non-traditional background
              venturing into the world of tech, I understand how complex
              concepts can be difficult to understand for people of
              non-technical backgrounds. As a result, I want to take it upon
              myself to share my technical learnings in a step-by-step,
              methodical manner that hopefully makes these concepts easier to
              understand.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative self-center pt-16 lg:pl-20 lg:pt-0"
          >
            <motion.div
              variants={containerVariants}
              className="mb-14 flex flex-col gap-8"
            >
              <motion.div variants={itemVariants}>
                <motion.div
                  variants={getItemVariants(reduced, 8)}
                  className="mb-3 flex items-center justify-between border-b border-border pb-2"
                >
                  <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    Places
                  </h2>
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    01
                  </span>
                </motion.div>
                <AnimatedPlaces />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  variants={getItemVariants(reduced, 8)}
                  className="mb-3 flex items-center justify-between border-b border-border pb-2"
                >
                  <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    Languages
                  </h2>
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    02
                  </span>
                </motion.div>
                <motion.div
                  variants={containerVariants}
                  className="flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground/80"
                >
                  <motion.span
                    variants={getItemVariants(reduced, 8)}
                    whileHover={reduced ? undefined : { rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Languages
                      aria-hidden="true"
                      className="h-4 w-4 text-foreground"
                      strokeWidth={1.7}
                    />
                  </motion.span>
                  {SPOKEN_LANGUAGES.map((language, index) => (
                    <motion.div
                      key={language.name}
                      layout="position"
                      variants={getItemVariants(reduced, 8)}
                      whileHover={reduced ? undefined : { y: -2 }}
                      transition={{ duration: reduced ? 0 : 0.3 }}
                      className="flex items-center gap-2.5"
                    >
                      {index > 0 && (
                        <span className="hidden text-foreground/30 sm:inline">
                          /
                        </span>
                      )}
                      <RotatingLanguage {...language} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="mb-7 flex items-end justify-between border-y border-border py-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Experience & education
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  The route so far
                </h2>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                01—04
              </span>
            </div>

            <div className="relative">
              <motion.div
                aria-hidden="true"
                className="absolute bottom-5 left-[1.15rem] top-5 w-px origin-top bg-border"
                initial={{ scaleY: reduced ? 1 : 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: reduced ? 0 : 0.9, delay: 0.42 }}
              />

              <motion.dl
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {DETAILS.map((detail, index) => {
                  if (!detail) return null;
                  const Icon = detail.icon;

                  return (
                    <motion.div
                      key={detail.label}
                      variants={getItemVariants(reduced, 10)}
                      whileHover={reduced ? undefined : { x: 6 }}
                      className="group relative grid grid-cols-[2.4rem_1fr] gap-5 border-b border-border py-5 last:border-b-0"
                    >
                      <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-foreground/35 group-hover:bg-foreground group-hover:text-background">
                        <Icon className="h-4 w-4" strokeWidth={1.7} />
                      </div>
                      <div className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-5">
                        <dt>
                          <span className="block font-mono text-[0.65rem] text-muted-foreground">
                            0{index + 1}
                          </span>
                          <span className="mt-1 block text-sm font-semibold text-foreground">
                            {detail.label}
                          </span>
                        </dt>
                        <dd>
                          <span className="block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            {detail.eyebrow}
                          </span>
                          <span className="mt-1.5 block text-sm leading-6 text-foreground/85 sm:text-base sm:leading-7">
                            {detail.content}
                          </span>
                        </dd>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.dl>
            </div>
          </motion.div>
        </motion.section>
      </PageContainer>
    </main>
  );
}
