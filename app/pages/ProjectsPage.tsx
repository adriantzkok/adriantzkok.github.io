import { ExternalLink, Github, Calendar, TrendingUp } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Project, PROJECTS } from "@/constants/Projects"; // Import the interface
import { cn } from "@/lib/utils";
import ProjectImage from "../../components/ProjectImage";

import { motion } from "motion/react";
import { headerVariants } from "@/lib/motion-variants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;

export function ProjectsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-12"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground text-lg">
            As a AI & Data Consultant, I encounter a diverse range of projects
            that demand various skills. To enhance my expertise and ensure my
            abilities (technical & non technical) meet the required standard, I
            undertake personal projects to hone and increase my understanding of
            the skills required. Below is a curated selection of my many
            projects, each highlighting distinct facets of my acquired technical
            and soft skills, from software development to stakeholder
            engagement.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12"
        >
          {PROJECTS.map((project: Project, index: number) => (
            <motion.article
              key={project.id}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div className={cn("grid gap-8 items-start", "lg:grid-cols-3")}>
                {/* Project Image */}
                <div
                  className={cn(
                    "lg:col-span-1 scroll-mt-52",
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  )}
                  id={project.id}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={cn(
                    "lg:col-span-2 space-y-6",
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  {/* Project Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{project.timeline}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-3">
                      {project.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Key Learnings
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.impact.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-foreground rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.demoUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.caseStudyUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.caseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Case Study
                        </a>
                      </Button>
                    )}
                    {project.blogUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.blogUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Deep Dive
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
