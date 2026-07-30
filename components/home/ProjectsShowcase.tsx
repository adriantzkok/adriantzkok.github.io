"use client";

import { motion, useReducedMotion } from "motion/react";
import { headerVariants } from "@/lib/motion-variants";
import SectionWrapper from "./SectionWrapper";
import { PageContainer } from "@/components/shared/PageContainer";
import { PROJECTS } from "@/data/projects";
import Link from "next/link";

const getContainerVariants = (reducedMotion: boolean) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.12,
      delayChildren: reducedMotion ? 0 : 0.12,
    },
  },
});

const getItemVariants = (reducedMotion: boolean) => ({
  hidden: { y: reducedMotion ? 0 : 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: reducedMotion
      ? { duration: 0 }
      : { duration: 0.55, ease: "easeOut" as const },
  },
});

export default function ProjectsShowcase() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const containerVariants = getContainerVariants(shouldReduceMotion);
  const itemVariants = getItemVariants(shouldReduceMotion);

  return (
    <SectionWrapper id="projects" className="bg-transparent py-12 sm:py-16">
      <PageContainer>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Featured Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Selected recent work.
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2"
        >
          {PROJECTS.map((project, index) => (
            <Link href={`/projects/#${project.id}`} key={project.id || index}>
              <motion.article
                variants={itemVariants}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -3, scale: 1.005 }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/70 transition-all duration-200 hover:border-foreground/15"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:opacity-100"
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.02 }
                    }
                    transition={{ duration: 0.2 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-flex rounded-full border border-white/20 bg-background/70 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-foreground/90 backdrop-blur">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-2 text-lg font-semibold tracking-[-0.01em] text-foreground transition-colors group-hover:text-muted-foreground">
                    {project.title}
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </PageContainer>
    </SectionWrapper>
  );
}
