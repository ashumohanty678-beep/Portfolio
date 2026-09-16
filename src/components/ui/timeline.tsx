"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  title = "Changelog from my journey",
  description = "I've been working on Aceternity for the past 2 years. Here's a timeline of my journey.",
  showHeader = false,
  className = "",
}: {
  data: TimelineEntry[];
  title?: string;
  description?: string;
  showHeader?: boolean;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full bg-transparent font-sans ${className}`}
      ref={containerRef}
    >
      {showHeader && (
        <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold">
            {title}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            {description}
          </p>
        </div>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-20 md:gap-8 lg:gap-12"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 md:top-40 self-start max-w-xs lg:max-w-sm md:w-64">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-lg">
                <div className="h-3 w-3 rounded-full bg-emerald-400/80 border border-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-16 md:text-3xl lg:text-4xl font-mono font-bold text-neutral-400 group-hover:text-white transition-colors">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-2 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-3 text-left font-mono font-bold text-emerald-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-emerald-500 via-cyan-500 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.7)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
