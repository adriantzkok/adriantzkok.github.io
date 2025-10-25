"use client";

import { Header } from "@/components/Header";
import { AboutPage } from "@/app/pages/AboutPage";
import { Footer } from "@/components/Footer";

export default function AboutRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
}
