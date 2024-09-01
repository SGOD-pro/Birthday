"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut", // Optional: you can add ease here if you want
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5, // Adjust duration to your preference
        ease: [0.5, 1, 0.89, 1], // Use Power3 easing for smooth animation
      },
    },
  },
  className,
}: WordPullUpProps) {
  // Split words by line breaks
  const lines = words.split("|"); // Use `|` as line break delimiter

  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center text-4xl font-bold leading-none tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {lines.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split(" ").map((word, i) => (
            <motion.div
              key={i}
              variants={framerProps}
              className="overflow-hidden"
              style={{ display: "inline-block", paddingRight: "8px" }}
            >
              {word === "" ? <span>&nbsp;</span> : word}
            </motion.div>
          ))}
          <br /> {/* Line break between lines */}
        </React.Fragment>
      ))}
    </motion.h1>
  );
}
