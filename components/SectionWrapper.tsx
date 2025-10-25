import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils"; // or your preferred cn import path

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={cn("py-24 sm:py-32", className)}
      viewport={{ once: false }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
