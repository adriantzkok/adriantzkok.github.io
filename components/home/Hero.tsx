"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { PageContainer } from "@/components/shared/PageContainer";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const scenes = [
  {
    src: "/hero-xingji-1.webp",
    label: "People walking through a lively Osaka shopping street",
    position: "50% 50%",
  },
  {
    src: "/hero-xingji-2.webp",
    label: "A small boat sailing on a calm river near trees",
    position: "50% 50%",
  },
  {
    src: "/hero-xingji-3.webp",
    label: "Sunset clouds above a river and city skyline",
    position: "50% 50%",
  },
  {
    src: "/hero-xingji-4.webp",
    label: "Sunlight crossing utility wires on a Japanese street",
    position: "50% 50%",
  },
];

const getContainerVariants = (reducedMotion: boolean) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.08,
      delayChildren: reducedMotion ? 0 : 0.06,
    },
  },
});

const getTextVariants = (reducedMotion: boolean) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.55, ease: "easeOut" as const },
  },
});

const getButtonVariants = (reducedMotion: boolean) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.45, ease: "easeOut" as const },
  },
});

export function Hero() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [activeScene, setActiveScene] = useState(1);
  const containerVariants = getContainerVariants(shouldReduceMotion);
  const textVariants = getTextVariants(shouldReduceMotion);
  const buttonVariants = getButtonVariants(shouldReduceMotion);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveScene((currentScene) => (currentScene + 1) % scenes.length);
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [activeScene]);

  return (
    <SectionWrapper id="hero" className="relative pt-8 sm:pt-12 lg:pt-16">
      <motion.div
        className="pointer-events-none absolute -right-24 top-0 hidden h-72 w-72 rounded-full border border-border/30 bg-card/40 blur-3xl sm:block"
        initial={
          shouldReduceMotion ? { opacity: 0 } : { opacity: 0.7, scale: 0.95 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: [0.65, 0.9, 0.65], scale: [0.95, 1.03, 0.95] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="pointer-events-none absolute left-0 top-28 h-56 w-56 rounded-full border border-border/20 bg-background/60 blur-3xl"
        initial={
          shouldReduceMotion ? { opacity: 0 } : { opacity: 0.8, scale: 0.95 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: [0.55, 0.8, 0.55], scale: [0.95, 1.04, 0.95] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <PageContainer className="relative py-12 sm:py-16">
        <motion.div
          className="grid gap-11 lg:grid-cols-[1.05fr_0.95fr]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col justify-center gap-8">
            <motion.div
              variants={textVariants}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex h-px w-14 bg-foreground/20" />
              <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Data Science • Math • Technology
              </span>
            </motion.div>

            <motion.div variants={textVariants} className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                Making complex concepts simple, intuitively.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Exploring topics in math, and tech, deconstructed into clear and
                intuitive breakdowns.
              </p>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href="/about"
                className="w-full sm:w-auto"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -3,
                        scale: 1.01,
                        transition: {
                          type: "spring",
                          stiffness: 280,
                          damping: 20,
                        },
                      }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Button className="w-full justify-center bg-foreground text-background transition-colors hover:bg-foreground/90 sm:w-auto">
                  View Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.a>
              <motion.a
                href="/projects"
                className="w-full sm:w-auto"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -3,
                        scale: 1.01,
                        transition: {
                          type: "spring",
                          stiffness: 280,
                          damping: 20,
                        },
                      }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full justify-center sm:w-auto"
                >
                  View Projects
                </Button>
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={textVariants} className="relative lg:pl-10">
            <div className="pointer-events-none absolute inset-y-10 left-0 hidden w-px bg-border lg:block" />
            <div className="relative min-h-[31rem] overflow-hidden border border-foreground/15 bg-zinc-900 sm:min-h-[38rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeScene}
                  className="absolute inset-0"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, scale: 1.025 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.99 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={scenes[activeScene].src}
                    alt={scenes[activeScene].label}
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: scenes[activeScene].position }}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
              <div className="pointer-events-none absolute inset-5 border border-white/25 sm:inset-7" />

              <div className="absolute bottom-6 left-6 text-white sm:bottom-9 sm:left-9">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/65">
                  Observation {String(activeScene + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="absolute bottom-6 right-6 flex flex-col items-end gap-2 sm:bottom-9 sm:right-9">
                {scenes.map((scene, index) => (
                  <button
                    key={scene.src}
                    type="button"
                    onClick={() => setActiveScene(index)}
                    aria-pressed={activeScene === index}
                    className="group flex h-7 items-center gap-2 text-xs text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        activeScene === index
                          ? "w-8 bg-white"
                          : "w-3 bg-white/45 group-hover:w-5"
                      }`}
                    />
                    <span className={activeScene === index ? "text-white" : ""}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3 text-right text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              <span>34.6937° N / 135.5023° E</span>
            </div>
          </motion.div>
        </motion.div>
      </PageContainer>
    </SectionWrapper>
  );
}
