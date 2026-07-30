"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { BlogPostSummary } from "@/lib/blog";
import { headerVariants } from "@/lib/motion-variants";
import { PageContainer } from "@/components/shared/PageContainer";
import SectionWrapper from "./SectionWrapper";

type BlogShowcaseProps = {
  posts: BlogPostSummary[];
};

const getContainerVariants = (reducedMotion: boolean) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.1,
      delayChildren: reducedMotion ? 0 : 0.1,
    },
  },
});

const getItemVariants = (reducedMotion: boolean) => ({
  hidden: { y: reducedMotion ? 0 : 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: "easeOut" as const },
  },
});

export default function BlogShowcase({ posts }: BlogShowcaseProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const [carouselRef, carouselApi] = useEmblaCarousel({
    align: "start",
    loop: posts.length > 2,
  });

  useEffect(() => {
    if (
      !carouselApi ||
      shouldReduceMotion ||
      isPaused ||
      !isAutoplayEnabled ||
      posts.length < 2
    ) {
      return;
    }

    const interval = window.setInterval(() => carouselApi.scrollNext(), 4500);
    return () => window.clearInterval(interval);
  }, [
    carouselApi,
    isAutoplayEnabled,
    isPaused,
    posts.length,
    shouldReduceMotion,
  ]);

  if (posts.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="writing" className="bg-transparent py-12 sm:py-16">
      <PageContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Latest Writing
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Recent posts and notes.
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all posts
          </Link>
        </motion.div>

        <motion.div
          variants={getContainerVariants(shouldReduceMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          className="relative"
        >
          <div
            ref={carouselRef}
            role="region"
            aria-label="Recent blog posts"
            aria-roledescription="carousel"
            className="overflow-hidden"
          >
            <div className="-mr-5 flex touch-pan-y">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  variants={getItemVariants(shouldReduceMotion)}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${post.title}, post ${index + 1} of ${posts.length}`}
                  className="group min-w-0 flex-[0_0_100%] pr-5 md:flex-[0_0_50%]"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex h-full flex-col rounded-[1.5rem] border border-border/70 bg-card/70 p-5 transition-colors duration-200 hover:border-foreground/15 sm:p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                      <time dateTime={post.date} className="font-medium">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      {post.tags[0] ? (
                        <span className="max-w-full break-words rounded-full border border-border/70 bg-background/70 px-2.5 py-1 font-medium">
                          {post.tags[0]}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-foreground transition-colors group-hover:text-muted-foreground sm:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      Read post
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>

          {posts.length > 1 ? (
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => carouselApi?.scrollPrev()}
                aria-label="Show previous posts"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-card/70 text-muted-foreground transition-colors hover:border-foreground/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronLeft className="size-4" aria-hidden="true" />
              </button>
              {!shouldReduceMotion ? (
                <button
                  type="button"
                  onClick={() => setIsAutoplayEnabled((enabled) => !enabled)}
                  aria-label={
                    isAutoplayEnabled
                      ? "Pause automatic scrolling"
                      : "Resume automatic scrolling"
                  }
                  aria-pressed={!isAutoplayEnabled}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-card/70 text-muted-foreground transition-colors hover:border-foreground/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {isAutoplayEnabled ? (
                    <Pause className="size-4" aria-hidden="true" />
                  ) : (
                    <Play className="size-4" aria-hidden="true" />
                  )}
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => carouselApi?.scrollNext()}
                aria-label="Show next posts"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-card/70 text-muted-foreground transition-colors hover:border-foreground/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </motion.div>
      </PageContainer>
    </SectionWrapper>
  );
}
