import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsPage } from "./_components/ProjectsPage";

export default function ProjectsRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProjectsPage />
      <Footer />
    </div>
  );
}
