import { Compare } from "./ui/compare";
import { FlickeringGrid } from "./ui/FlickeringGrid";
import { TypingEffect } from "./ui/TypeEffect";
import { FiGithub, FiMail, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export function About() {

    const scrollToSection = (href: string ,  event?: React.MouseEvent) => {
    event?.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="about"
      className="flex flex-row items-center w-full h-screen bg-[#010413] scroll-mt-20 mb-20"
    >
      <div className="flex flex-col items-start justify-center w-full h-full px-10 md:px-20">
        <h1 className="text-4xl font-bold text-white mb-4">
          <TypingEffect
            text="About Me"
          />
        </h1>
        <h2 className="text-2xl text-yellow-400 mb-4">
          Hi! I'm <span className="text-amber-300"> Suttanop Chanah</span>,
        </h2>
        <p className="text-lg text-white mb-6">
          I'm passionate about coding and building software that solves
          real-world problems. Currently, I'm sharpening my skills in full-stack
          development and exploring different technologies to become a
          well-rounded software engineer. 
          <br />

          🎯 Goals: Become a skilled
          software developer Contribute to open-source projects Build innovative
          and impactful applications 📫 Let's Connect! Feel free to reach out or
          check out my projects here on GitHub. I'm always open to learning and
          collaborating on exciting projects!
        </p>

        {/* contact  */}
        <motion.button 
          className="flex items-center px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => scrollToSection("#contact", e)}
        >
          Hire Me!
        </motion.button>
        </div>
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
