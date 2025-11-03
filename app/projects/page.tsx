"use client";

import { Header } from "@/components/Header";
import { ProjectsPage } from "@/app/pages/ProjectsPage";
import { Footer } from "@/components/Footer";

export default function ProjectsRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProjectsPage />
      <Footer />
    </div>
  );
}
