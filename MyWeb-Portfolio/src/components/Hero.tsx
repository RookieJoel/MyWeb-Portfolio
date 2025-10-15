import { motion } from "framer-motion";
import { TypingEffect } from "./ui/TypeEffect";
import Parallax from "./ui/Parallax";
import { FiChevronsDown } from "react-icons/fi";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
export default function Hero() {
  return (
    <section id="hero"className="flex flex-col lg:flex-row items-center justify-center min-h-screen text-white relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 mb-8"
          >
            <a
              href="/Suttanop_Chanah_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              📄 View Resume
            </a>
            <a
              href="/Suttanop_Chanah_Resume.pdf"
              download="Suttanop_Chanah_Resume.pdf"
              className="px-6 py-3 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              📥 Download Resume
            </a>
          </motion.div>
        </div>
        {/* <Spline
          className="absolute xl:right-[-20%] top-[-20%]"
          scene="https://prod.spline.design/lRhUAH29soq7Ezaf/scene.splinecode"
        /> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-yellow-400"
        >
          <FiChevronsDown className="w-10 h-10 animate-bounce" />
        </motion.div>
        <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.2] dark:bg-gray-100 border-0 w-auto sm:w-[20rem] h-auto rounded-none p-4 shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300">
        {/* Film photo style with white border */}
        <div className="bg-white p-3 pb-8 shadow-xl">
          <CardItem
            translateZ="100"
            rotateX={5}
            rotateZ={0}
            className="w-full"
          >
            <img
              src="/profile.png"
              height="1000"
              width="1000"
              className="h-64 w-full object-cover sepia-[0.1] contrast-[1.1] brightness-[1.05] group-hover/card:sepia-0 group-hover/card:contrast-100 group-hover/card:brightness-100 transition-all duration-500"
              alt="Suttanop Chanah - Computer Engineering Student"
            />
          </CardItem>
          {/* Film photo caption area */}
          <CardItem
            translateZ="50"
            className="mt-3 text-center"
          >
            <p className="text-gray-700 text-sm font-handwriting" style={{ fontFamily: 'cursive' }}>
              "Suttanop Chanah"
            </p>
            <p className="text-gray-500 text-xs mt-1" style={{ fontFamily: 'cursive' }}>
              Go Beyond Limits!!!
            </p>
          </CardItem>
        </div>
        {/* Film edges effect */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-300 rounded-sm"></div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-300 rounded-sm"></div>
      </CardBody>
    </CardContainer>
        
        
      </div>
      {/* right content */}
      <Parallax />
    </section>
  );
}
