"use client";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import { GlareCard } from "./ui/GlareCard";
import { HyperText } from "./ui/HyperText";

export function Skills() {
  return (
    <div
      id="skills"
      className="relative overflow-clip w-full scroll-mt-15 mt-0"
    >
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-white md:text-7xl"
        >
          Skills <br />{" "}
          <p className="text-amber-300">what I use to build things</p>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-center mt-10 text-white text-lg md:text-2xl"
        >
          <HyperText>Backend</HyperText>
        </motion.div>
      </LampContainer>
    </div>
  );
}
