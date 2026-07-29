"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={cn("scroll-mt-20 py-2 sm:py-2", className)}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
