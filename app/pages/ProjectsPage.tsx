import { ArrowUpRight, Github, Calendar, TrendingUp } from "lucide-react";
import { Project, PROJECTS } from "@/constants/Projects"; // Import the interface
import { cn } from "@/lib/utils";
import { PageContainer } from "../../components/PageContainer";
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
    <main className="overflow-hidden bg-background text-foreground">
      <PageContainer>
        {/* Header */}
        <motion.div
          className="max-w-4xl py-16 sm:py-20 lg:py-24"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground before:h-px before:w-8 before:bg-foreground/30">
            Selected work
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Projects
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
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
          className="border-t border-border"
        >
          {PROJECTS.map((project: Project, index: number) => (
            <motion.article
              key={project.id}
              className="group border-b border-border py-12 sm:py-16 lg:py-20"
              variants={itemVariants}
            >
              <div
                className={cn(
                  "grid items-start gap-8",
                  "lg:grid-cols-3 lg:gap-12",
                )}
              >
                {/* Project Image */}
                <div
                  className={cn(
                    "lg:col-span-1 scroll-mt-52",
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2",
                  )}
                  id={project.id}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={cn(
                    "space-y-8 lg:col-span-2",
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  {/* Project Header */}
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="text-foreground">{project.type}</span>
                      <span aria-hidden className="h-px w-6 bg-border" />
                      <div className="flex items-center gap-2">
                        <Calendar aria-hidden className="h-3.5 w-3.5" />
                        <span>{project.timeline}</span>
                      </div>
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                      {project.title}
                    </h2>

                    <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="border-b border-border pb-1 text-sm text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="border-l border-border pl-5">
                    <h3 className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                      <TrendingUp aria-hidden className="h-4 w-4" />
                      Key Learnings
                    </h3>
                    <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                      {project.impact.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-[0.65rem] h-px w-3 shrink-0 bg-foreground/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-x-7 gap-y-4 pt-1">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium transition-colors hover:border-foreground"
                      >
                        View
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium transition-colors hover:border-foreground"
                      >
                        Code
                        <Github className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {project.caseStudyUrl && (
                      <a
                        href={project.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium transition-colors hover:border-foreground"
                      >
                        Case Study
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                    {project.blogUrl && (
                      <a
                        href={project.blogUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium transition-colors hover:border-foreground"
                      >
                        Deep Dive
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </PageContainer>
    </main>
  );
}
