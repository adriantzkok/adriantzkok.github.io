import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import { motion } from "motion/react";
import PhotoSlot from "../PhotoSlot";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as const;

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
} as const;

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
} as const;

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
} as const;

export function Hero() {
  return (
    <SectionWrapper>
      <motion.div
        className="container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-6 flex justify-center">
          <PhotoSlot size={150} src="/profilepic.webp" />
        </div>
        <motion.h1
          variants={titleVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text !text-gray-900 dark:!text-gray-100"
        >
          Adrian K
        </motion.h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />

        <motion.p
          variants={descriptionVariants}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          AI & Data Consultant diving deeper into the world of analytics,
          machine learning, and cross cultural solutions.
        </motion.p>

        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="/about">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-foreground text-background hover:bg-foreground/90 cursor-pointer shadow-lg hover:shadow-xl transition-shadow group">
                About Me
                <motion.div
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
