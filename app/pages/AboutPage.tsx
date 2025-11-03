"use client";
import { Linkedin, Github, MapPin } from "lucide-react";
import { motion } from "motion/react";
import PhotoSlot from "../../components/PhotoSlot";
import {
  TECHNICALSKILLS,
  AOE,
  MOTTO1,
  PROFESSIONAL_EXPERIENCES,
  LANGUAGESKILLS,
  HOBBIES,
  CERTIFICATIONS,
} from "@/constants/AboutPage";

const sidebarVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text !text-gray-900 dark:!text-gray-100">
            About
          </h1>
          <p className="text-xl text-muted-foreground">
            Data Consultant & Analytics Expert
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <p className="text-lg leading-relaxed mb-6">
                Hello! I&apos;m Adrian K, a passionate AI & Data Consultant with a
                breadth of international experience.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in AI & Data began with a fascination of trying to
                make my own ideas into usable applications. With AI accelerating
                the ability to create things quicker and more efficiently, I&apos;ve
                been digging into different methods and ways to make my ideas a
                reality.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                My Areas of Expertise
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                {AOE.map((aoe, index) => (
                  <motion.li
                    key={aoe}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    />
                    <span className="group-hover:text-foreground transition-colors">
                      {aoe}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">My Story</h2>
              <motion.p
                className="text-muted-foreground leading-relaxed mb-6 italic border-l-4 border-primary pl-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {MOTTO1}
              </motion.p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Hobbies & Interests
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When I&apos;m not working on data projects or learning new
                technologies, you&apos;ll find me:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HOBBIES.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-lg border border-border/40 hover:border-primary/40 transition-colors bg-card cursor-default"
                  >
                    <h3 className="font-semibold text-foreground mb-2">
                      {hobby.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {hobby.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-8"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-center font-semibold">Summary</h1>
            <div className="flex justify-center">
              <PhotoSlot size={140} src="/profilepic.webp" />
            </div>
            {/* Contact */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg border border-border/40 hover:border-primary/40 transition-colors bg-card"
            >
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="group-hover:text-foreground transition-colors">
                    Hong Kong, CN
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <a
                    href="https://www.linkedin.com/in/adrian-kok/"
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                    rel="noopener noreferrer"
                  >
                    <span>linkedin.com/in/adriankok</span>
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <a
                    href="https://github.com/adriantzkok"
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    <span>github.com/adriankok</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg border border-border/40 hover:border-primary/40 transition-colors bg-card"
            >
              <h3 className="font-semibold mb-4">Experience</h3>
              <div className="space-y-4 text-sm">
                {PROFESSIONAL_EXPERIENCES.map((experience, index) => (
                  <motion.div
                    key={experience.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                    className="pb-4 border-b border-border/40 last:border-0 last:pb-0 cursor-default"
                  >
                    <p className="font-medium">{experience.name}</p>
                    <p className="text-muted-foreground">
                      {experience.company} • {experience.time}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg border border-border/40 hover:border-primary/40 transition-colors bg-card"
            >
              <h3 className="font-semibold mb-4">Technical Skills</h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {TECHNICALSKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                    }}
                    className="text-xs px-3 py-1.5 bg-muted text-muted-foreground rounded-full cursor-default transition-colors"
                    custom={index}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg border border-border/40 hover:border-primary/40 transition-colors bg-card"
            >
              <h3 className="font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2">
                {CERTIFICATIONS.map((cert: string) => (
                  <li
                    key={cert}
                    className="flex items-center space-x-3 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-50 rounded-full flex-shrink-0"></div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg border border-border/40 hover:border-primary/40 transition-colors bg-card"
            >
              <h3 className="font-semibold mb-4">Languages</h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {LANGUAGESKILLS.map((language, index) => (
                  <motion.span
                    key={language}
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                    }}
                    className="text-xs px-3 py-1.5 bg-muted text-muted-foreground rounded-full cursor-default transition-colors"
                    custom={index}
                  >
                    {language}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
