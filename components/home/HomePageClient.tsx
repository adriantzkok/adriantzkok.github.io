"use client";

import { motion, useReducedMotion } from "motion/react";
import type { BlogPostSummary } from "@/lib/blog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import BlogShowcase from "./BlogShowcase";
import ProjectsShowcase from "./ProjectsShowcase";
import { Hero } from "./Hero";
import { SectionNavigator } from "./SectionNavigator";
import TraitShowcase from "./TraitShowcase";

type HomePageClientProps = {
  posts: BlogPostSummary[];
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
      <SectionNavigator />
      <Hero />
      <BlogShowcase posts={posts} />
      <TraitShowcase />
      <ProjectsShowcase />
      <Footer />
    </motion.div>
  );
}
