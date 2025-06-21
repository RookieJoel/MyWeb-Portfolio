import { motion } from "motion/react";
import { LampContainer } from "./ui/Lamp";

export function Lamp() {
  return (
    <div id="skills" className="relative w-full overflow-clip scroll-mt-15 bg-[#010413]">
    <LampContainer >
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
    </div>
  );
}
