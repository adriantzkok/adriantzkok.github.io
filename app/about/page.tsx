import { Header } from "@/components/layout/Header";
import { AboutPage } from "./_components/AboutPage";
import { Footer } from "@/components/layout/Footer";

export default function AboutRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
}
