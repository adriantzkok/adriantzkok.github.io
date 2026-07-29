"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  MapPin,
  Plane,
} from "lucide-react";
import { PageContainer } from "@/components/shared/PageContainer";

const DETAILS = [
  {
    label: "Toronto",
    eyebrow: "Education",
    content: "University of Toronto graduate",
    icon: GraduationCap,
  },
  {
    label: "EY",
    eyebrow: "Experience",
    content: "Previously worked in consulting at EY",
    icon: BriefcaseBusiness,
  },
  {
    label: "Singapore, Taipei & Hong Kong",
    eyebrow: "Around the world",
    content:
      "Exchange studies at Singapore Management University and National Taiwan University, with a path onward to Hong Kong",
    icon: MapPin,
  },
  {
    label: "Five languages",
    eyebrow: "Communication",
    content: "English, French, Cantonese, Mandarin Chinese, and Japanese",
    icon: Languages,
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
        <motion.section
          className="grid min-h-[calc(100svh-4rem)] content-center gap-16 py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:gap-20 lg:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="self-center">
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
              I&apos;m Adrian. My path has taken me from Toronto to Singapore,
              Taipei, and Hong Kong, through consulting and into technology. I
              enjoy learning how people, ideas, and systems connect.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 space-y-4">
              <div className="flex w-fit max-w-full flex-wrap items-center gap-x-3 gap-y-2 border-y border-border py-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {["Toronto", "Singapore", "Taipei", "Hong Kong"].map(
                  (city, index) => (
                    <div key={city} className="flex items-center gap-3">
                      {index > 0 && (
                        <>
                          <span className="h-px w-4 bg-foreground/25 sm:w-5" />
                          <Plane className="h-3.5 w-3.5 rotate-45 text-foreground" />
                          <span className="h-px w-4 bg-foreground/25 sm:w-5" />
                        </>
                      )}
                      <span>{city}</span>
                    </div>
                  ),
                )}
              </div>

              <div className="flex w-fit max-w-full flex-wrap items-center gap-x-3 gap-y-2 border-y border-border py-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                <Languages
                  aria-hidden="true"
                  className="h-4 w-4 text-foreground"
                  strokeWidth={1.7}
                />
                {["English", "French", "Cantonese", "Mandarin", "Japanese"].map(
                  (language, index) => (
                    <div key={language} className="flex items-center gap-3">
                      {index > 0 && (
                        <span className="text-foreground/30">/</span>
                      )}
                      <span>{language}</span>
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative self-center">
            <div className="mb-7 flex items-end justify-between border-b border-border pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  A few coordinates
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  The route so far
                </h2>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                01—04
              </span>
            </div>

            <motion.div
              aria-hidden="true"
              className="absolute bottom-5 left-[1.15rem] top-[7.65rem] w-px origin-top bg-border"
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
          </motion.div>
        </motion.section>
      </PageContainer>
    </main>
  );
}
