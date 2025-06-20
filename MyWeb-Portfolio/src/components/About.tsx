"use client";

import { GlowingEffect } from "./ui/GlowingEffect";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { gridItems } from "../data/index";

import { useEffect } from "react";
export function About() {
  return (
    <section id="about" className="scroll-mt-15">
    <div className="container mx-auto px-4 py-8 text-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">About <span className="text-yellow-500">me</span></h2>
      <p className="text-center mb-12 text-2xl" >
        Who actually am I? and what do I do?
      </p>
    </div>
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-4 xl:grid-cols-6 mx-15 ">
      {gridItems.map((item, index) => (
        <GridItem
          key={index}
          {...item}
        
        />
      ))}
    </ul>
    </section>
  );
}

interface GridItemProps {
  id: number;
  area: string;
  title: string;
  description: React.ReactNode;
  img?: string;
  imgClassName?: string;
}

const GridItem = ({ area,title, description,img , imgClassName}: GridItemProps) => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <li className={`min-h-[14rem] list-none ${area} xl:min-h-[10rem]`}>
      <motion.div 
      data-aos="zoom-in"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3`}>
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {img && (
          <img
            src={img}
            alt={title}
            className={`absolute inset-0 h-full w-full object-cover rounded-xl ${imgClassName}`}
          />
        )}
        
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </li>
  );
};
