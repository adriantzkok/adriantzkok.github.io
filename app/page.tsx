"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/Footer";
import TraitShowcase from "@/components/hero/TraitShowcase";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TraitShowcase />
      <ProjectsShowcase />
      <Footer />
    </div>
  );
}
