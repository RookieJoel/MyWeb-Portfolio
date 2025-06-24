import { Compare } from "./ui/compare";
import { TypingEffect } from "./ui/TypeEffect";
import { motion } from "framer-motion";
import { useState } from "react";

export function About() {
  const [isShort, setIsShort] = useState(false);
  const [isLong, setIsLong] = useState(false);

  const scrollToSection = (href: string, event?: React.MouseEvent) => {
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
          <TypingEffect text="About Me" />
        </h1>
        <h2 className="text-4xl text-white mb-4">
          Hi! I'm <span className="text-amber-300"> Suttanop Chanah</span>,
        </h2>
        <p className="text-lg text-white mb-6">
          I'm passionate about coding and building software that solves
          real-world problems. Currently, I'm sharpening my skills in full-stack
          development and exploring different technologies to become a
          well-rounded software developer.
          <br />
          <br />
          <span className="text-amber-300 font-bold mb-4">🎯 Goals:</span>
          <br />
          Become a skilled software developer Contribute to open-source projects
          Build innovative and impactful applications. I also love to learn new
          technologies and stay updated with the latest trends in the tech
          industry. so if you have any interesting projects or ideas, feel free
          to reach out!
          <br />
          <br />
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <motion.button
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsShort(!isShort);
              setIsLong(false);
            }}
          >
            For People Who need TikTok while working
          </motion.button>
          <motion.button
            className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-amber-700 transition-colors duration-300 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsLong(!isLong);
              setIsShort(false);
            }}
          >
            For The Zen Master of Focus
          </motion.button>
        </div>
        <motion.div
          className={`text-lg text-white mb-6 ${isShort ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            I love to work with short videos, especially TikTok, while coding.
            It helps me stay motivated and inspired. I find that the quick
            bursts of creativity and entertainment from TikTok keep my mind
            fresh and engaged. I enjoy watching coding tutorials, tech tips, and
            funny content that relates to programming. It adds a fun element to
            my coding sessions and helps me stay productive.
          </p>
        </motion.div>
        <motion.div
          className={`text-lg text-white mb-6 ${isLong ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Once upon a time, not so long ago, a young boy (that's me!) found
            himself living in a world on the cusp of a technological revolution.
            It was a time when devices were beginning to weave themselves into
            the very fabric of our lives, subtly, yet profoundly. And then, a
            pivotal moment arrived, courtesy of my father, a university
            professor. He introduced me to something that would forever alter my
            trajectory: a computer.
            <br />
            <br />
            Oh, what a marvel that machine was! Even though my initial
            interactions were confined to the thrilling realm of video games, a
            profound realization stirred within me: this magical box, this
            intricate contraption, held the power to transform everything. From
            that moment on, a quiet fascination with the art and science of
            computing began to blossom.
            <br />
            <br />
            This burgeoning interest eventually led me down an unexpected path –
            the Computer Olympiad. To be completely honest, I had virtually no
            background in competitive programming at the time. (Yes, you read
            that right – a blend of sheer mathematics and a relentless
            seven-year dive into past exam papers somehow paved my way in!) But
            here I was, having reached this stage, and a fierce determination
            ignited within me. I decided to dive in,
            <br />
            <br />
            headfirst. And that, my friends, was the true beginning. It was the
            spark that ignited my passion for leveraging knowledge and
            capabilities – from my communication skills to my technical prowess
            – to solve complex problems. All with the very same kind of device
            that had first cast its spell on my young, impressionable mind.
          </p>
        </motion.div>

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
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] absolute right-10 bottom-10 md:right-20 md:bottom-20"
        slideMode="hover"
      />
    </div>
  );
}
