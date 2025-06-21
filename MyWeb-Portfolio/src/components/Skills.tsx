import { useEffect } from "react";
import { GlareCard } from "./ui/GlareCard";
import { HyperText } from "./ui/HyperText";
import Aos from "aos";
import "aos/dist/aos.css";
import { skillsBackend } from "../data";

export function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative w-full overflow-clip scroll-mt-15 mt-0"
    >
      <div
        className="container mx-auto px-4 py-8 text-white text-center"
        data-aos="fade-up"
      >
        <HyperText>Backend</HyperText>
      </div>
      <ul className="grid grid-cols-1 grid-rows-none gap-2 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-4 xl:grid-cols-5 mx-15">
        {skillsBackend.map((skill, index) => (
            <li
              key={index}
                className={`min-h-[14rem] list-none xl:min-h-[10rem] flex items-center justify-center`}
            >
                <GlareCard
                    data-aos="zoom-in"
                    className={`relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3`}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-center text-gray-300">{skill.description}</p>
                    </div>
                </GlareCard>
            </li>
        ))}
      </ul>
    </section>
  );
}
