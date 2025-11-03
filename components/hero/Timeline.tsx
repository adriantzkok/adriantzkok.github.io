"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { TIMELINE } from "../constants/AboutPage";

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const startPosition = el.scrollWidth / 5;
    el.scrollLeft = startPosition;

    const speed = 40;
    let rafId = 0;
    let last = performance.now();

    const step = (t: number) => {
      const dt = t - last;
      last = t;
      if (!isPaused) {
        el.scrollLeft += (speed * dt) / 1000;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <div className="max-w-6xl md:mx-auto">
      <div
        className="overflow-x-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="absolute left-0 right-0 top-6 h-0.5 bg-gray-300 z-0" />

          <div
            ref={scrollRef}
            className="flex items-start space-x-8 md:space-x-12 relative z-10 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {/* Hide scrollbar for Webkit browsers */}
            <style jsx>{`
              div[ref]::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {[0, 1].map((copy) => (
              <React.Fragment key={copy}>
                {TIMELINE.map((exp, idx) => (
                  <motion.div
                    key={exp.name + idx + "-" + copy}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="flex-shrink-0 w-64 md:w-80"
                  >
                    <div className="flex flex-col items-start md:items-center text-left md:text-center">
                      <div className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-sm mb-3 z-20">
                        <div className="w-3 h-3 rounded-full bg-indigo-600" />
                      </div>
                      <p className="text-xs text-gray-900">{exp.id}</p>
                      <p className="font-medium text-gray-900">{exp.name}</p>
                      <p className="text-sm text-gray-600">
                        {exp.month} {exp.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
