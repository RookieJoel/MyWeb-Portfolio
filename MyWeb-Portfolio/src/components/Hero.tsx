import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { TypingEffect } from "./ui/TypeEffect";
import Parallax from "./ui/Parallax";
import { FiChevronsDown } from "react-icons/fi";
export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen text-white relative overflow-hidden">
      {/* left content */}
      <div className="absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5 ml-5">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
            duration: 0.5,
          }}
          className="flex flex-col justify-center items-center mt-5 "
        >
          <div className="w-5 h-5 rounded-full bg-yellow-400" />
          <div className="w-1 h-50 xl:h-90 bg-gradient-to-b from-yellow-400 to-transparent" />
        </motion.div>
        <div className="flex -pt-5 flex-col justify-center items-start mt-5 lg:max-w-[50vw] xl:max-w-[50vw]">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 leading-tight"
          >
            Hi! I'm{" "}
            <span className="text-amber-300">
              <TypingEffect text="Suttanop Chanah" />
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4"
          >
            Computer Engineering Student @Chulalongkorn University
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xs sm:max-w-md lg:max-w-lg"
          >
            Explore my projects, skills, and experiences. Let's connect and
            create something amazing together!
          </motion.p>
        </div>
        {/* <Spline
          className="absolute xl:right-[-20%] top-[-20%]"
          scene="https://prod.spline.design/lRhUAH29soq7Ezaf/scene.splinecode"
        /> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-yellow-400 cursor-pointer"
        >
          <FiChevronsDown className="w-10 h-10 animate-bounce" />
        </motion.div>
        
      </div>
      {/* right content */}
      <Parallax />
    </section>
  );
}
