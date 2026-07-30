"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { PaginatedPosts } from "@/lib/blog";

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

const getCardVariants = (reducedMotion: boolean) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: "easeOut" as const },
  },
});

function getPageHref(page: number) {
  return page === 1 ? "/blog" : `/blog?page=${page}`;
}

export default function BlogPostsClient({
  posts,
  page,
  totalPosts,
  totalPages,
}: PaginatedPosts) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const containerVariants = getContainerVariants(shouldReduceMotion);
  const cardVariants = getCardVariants(shouldReduceMotion);

  return (
    <>
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={cardVariants}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_20px_60px_-28px_rgba(15,23,42,0.35)] sm:rounded-[2rem] sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
                <time
                  dateTime={post.date}
                  className="font-medium text-foreground/70"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                {post.tags.length > 0 ? (
                  <span className="max-w-full break-words rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.24em]">
                    {post.tags[0]}
                  </span>
                ) : null}
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-foreground transition-colors duration-200 group-hover:text-foreground/90">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                <span className="inline-flex h-0.5 w-6 rounded-full bg-foreground/30" />
                <span>Read post</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {totalPages > 1 ? (
        <nav
          aria-label="Blog pagination"
          className="grid grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-center gap-2 border-t border-border pt-6 sm:flex sm:justify-between sm:gap-4"
        >
          {page > 1 ? (
            <Link
              href={getPageHref(page - 1)}
              rel="prev"
              className="inline-flex size-10 items-center justify-center gap-2 rounded-md border border-border bg-card text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto sm:px-3"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">Previous</span>
            </Link>
          ) : (
            <span aria-hidden="true" className="size-10 sm:w-24" />
          )}

          <p className="text-center text-sm text-muted-foreground">
            Page <span className="font-medium text-foreground">{page}</span> of{" "}
            {totalPages}
            <span className="sr-only">, {totalPosts} posts total</span>
          </p>

          {page < totalPages ? (
            <Link
              href={getPageHref(page + 1)}
              rel="next"
              className="inline-flex size-10 items-center justify-center gap-2 rounded-md border border-border bg-card text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto sm:px-3"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="size-4" aria-hidden="true" />
            </Link>
          ) : (
            <span aria-hidden="true" className="size-10 sm:w-24" />
          )}
        </nav>
      ) : null}
    </>
  );
}