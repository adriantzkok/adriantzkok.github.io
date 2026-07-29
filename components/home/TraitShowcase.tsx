"use client";

import { motion, useReducedMotion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import { PageContainer } from "@/components/shared/PageContainer";

const getCardVariants = (reducedMotion: boolean) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: "easeOut" as const },
  },
});

export default function TraitShowcase() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const cardVariants = getCardVariants(shouldReduceMotion);

  return (
    <SectionWrapper id="about" className="bg-transparent pt-10 pb-8 sm:pt-14 sm:pb-8">
      <PageContainer>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.005 }}
          className="rounded-[2rem] border bg-card/70 b-3 border-black p-10"
        >
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            About Me
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Grounded Thinker with an untraditional perspective.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Transitioning into tech from a non-technical background taught me
            how to break down complex systems into clear, simple principles. By
            taking the time to build a deep, foundational understanding of
            technical concepts, I&apos;m able to translate complex ideas and
            communicate the purpose behind them to non-technical audiences.
          </p>
        </motion.div>
      </PageContainer>
    </SectionWrapper>
  );
}
