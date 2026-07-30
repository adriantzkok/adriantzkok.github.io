"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "@/components/shared/PageContainer";

type BlogPageClientProps = {
  children: ReactNode;
};

export default function BlogPageClient({
  children,
}: BlogPageClientProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageContainer className="flex flex-col gap-10 py-12 sm:gap-12 sm:py-16">
        <motion.div
          className="max-w-2xl space-y-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: "easeOut" as const }
          }
        >
          <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground">
            Blog
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Technical posts and notes
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            This blog is a collection of posts dedicated to breaking down
            complex topics into clear, simple concepts.
          </p>
        </motion.div>

        {children}
      </PageContainer>
    </main>
  );
}
