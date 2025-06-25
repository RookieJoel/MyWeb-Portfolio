import { TextRevealCard } from "./ui/TextReveal"
import { FiGithub, FiMail, FiLinkedin} from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="contact" className="flex flex-col items-center justify-center bg-[#010413] scroll-mt-20 mb-20" data-aos="fade-up">
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-4" data-aos="fade-down">
          Contact Me
        </h1>
        <TextRevealCard
        text="If you hire me, I will.."
        revealText="never gonna give you up and let you down 😉"
        data-aos="zoom-in"
      />
        <div className="flex flex-col items-center justify-center my-8" data-aos="flip-left">
        <img src="/projects/aws.png" alt="Contact" className="aspect-ratio-1/1 w-30 rounded-full"/>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 mb-8" data-aos="fade-up">
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.2 }}
            href="https://github.com/RookieJoel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="text-5xl text-yellow-400 transition-colors duration-300" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.2 }}
            href=""
          >
            <FiMail className="text-5xl text-yellow-400 transition-colors duration-300" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.5,
            }}
            whileHover={{ scale: 1.2 }}
            href=""
          >
            <FiLinkedin className="text-5xl text-yellow-400 transition-colors duration-300" />
          </motion.a>
          </div>
        <a href="mailto:jojackchanah@gmail.com" className="px-6 py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors duration-300" data-aos="fade-up">
          Email Me
        </a>
    </div>
    
      
  )
}
