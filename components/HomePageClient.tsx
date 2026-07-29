"use client";

import { motion, useReducedMotion } from "motion/react";
import type { BlogPost } from "@/lib/blog";
import { Footer } from "./Footer";
import { Header } from "./Header";
import BlogShowcase from "./BlogShowcase";
import ProjectsShowcase from "./ProjectsShowcase";
import { Hero } from "./hero/Hero";
import TraitShowcase from "./hero/TraitShowcase";

type HomePageClientProps = {
  posts: BlogPost[];
};

export default function HomePageClient({ posts }: HomePageClientProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className="min-h-screen overflow-x-hidden bg-background text-foreground"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.6, ease: "easeOut" as const }
      }
    >
      <Header />
      <Hero />
      <TraitShowcase />
      <ProjectsShowcase />
      <BlogShowcase posts={posts} />
      <Footer />
    </motion.div>
  );
}
