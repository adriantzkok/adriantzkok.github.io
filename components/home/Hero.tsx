"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { PageContainer } from "@/components/shared/PageContainer";
import { motion, useReducedMotion } from "motion/react";

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
  const containerVariants = getContainerVariants(shouldReduceMotion);
  const textVariants = getTextVariants(shouldReduceMotion);
  const buttonVariants = getButtonVariants(shouldReduceMotion);

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

          <motion.div
            variants={textVariants}
            className="overflow-hidden rounded-[2rem] border border-border/60 bg-background/90 p-6 shadow-sm"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -4,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 220, damping: 20 },
                  }
            }
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((photo) => (
                <motion.div
                  key={photo}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }
                  }
                  className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-zinc-950"
                >
                  <Image
                    src={`/${photo}.webp`}
                    alt={`Gallery photo ${photo}`}
                    width={600}
                    height={700}
                    className="h-56 w-full object-cover sm:h-80"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </PageContainer>
    </SectionWrapper>
  );
}
