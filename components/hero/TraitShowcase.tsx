import { motion } from "motion/react";

import SectionWrapper from "../SectionWrapper";

import Timeline from "./Timeline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

export default function TraitShowcase() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-prose md:max-w-2xl mx-auto p-5">
            I&apos;m a technology professional currently based in Hong Kong,
            specializing in AI and Data consulting. Originally from Canada, I
            took the leap of faith to move abroad by myself for my career and
            personal development. Such was the start of an amazing journey
            venturing and living in Asia. Since relocating to Asia, i&apos;ve
            lived in Singapore, Taiwan and Japan for both studies, work and
            personal growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <Timeline />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
