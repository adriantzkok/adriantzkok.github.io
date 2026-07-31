"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PageContainer } from "@/components/shared/PageContainer";

type BlogPageClientProps = {
  children: ReactNode;
};

const signalRows = ["42%", "68%", "54%", "76%", "48%"];

function TechnicalSignal({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      className="relative hidden h-44 overflow-hidden md:block"
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { delay: 0.15, duration: 0.65, ease: "easeOut" }
      }
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35 [mask-image:linear-gradient(to_left,black,transparent)]" />

      <div className="absolute inset-y-5 right-0 flex w-[88%] flex-col justify-between">
        {signalRows.map((width, index) => (
          <div key={width} className="flex items-center justify-end gap-3">
            <motion.span
              className="h-px bg-foreground/35"
              style={{ width }}
              animate={
                reducedMotion
                  ? undefined
                  : { scaleX: [0.72, 1, 0.72], opacity: [0.25, 0.65, 0.25] }
              }
              transition={{
                duration: 3.2 + index * 0.35,
                delay: index * 0.18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              className="size-2 shrink-0 border border-foreground/45 bg-background"
              animate={
                reducedMotion
                  ? undefined
                  : {
                      backgroundColor: [
                        "var(--background)",
                        "var(--foreground)",
                        "var(--background)",
                      ],
                    }
              }
              transition={{
                duration: 3.2 + index * 0.35,
                delay: index * 0.18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}
      </div>

      <motion.div
        className="absolute right-[18%] top-1/2 size-16 -translate-y-1/2 border border-foreground/20 bg-background/85"
        animate={reducedMotion ? undefined : { rotate: [0, 90, 180] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute right-[18%] top-1/2 grid size-16 -translate-y-1/2 place-items-center font-mono text-lg text-foreground">
        <motion.span
          animate={reducedMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {"</>"}
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function BlogPageClient({ children }: BlogPageClientProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageContainer className="flex flex-col gap-10 py-12 sm:gap-12 sm:py-16">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)] lg:grid-cols-[minmax(0,1.5fr)_minmax(22rem,1fr)]">
          <motion.div
            className="max-w-2xl space-y-4"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }
            }
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

          <TechnicalSignal reducedMotion={shouldReduceMotion} />
        </div>

        {children}
      </PageContainer>
    </main>
  );
}
