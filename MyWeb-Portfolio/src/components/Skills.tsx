import { useEffect } from "react";
import { GlareCard } from "./ui/GlareCard";
import { HyperText } from "./ui/HyperText";
import Aos from "aos";
import "aos/dist/aos.css";
import { skillsBackend, skillsFrontend } from "../data";

export function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-clip scroll-mt-15 xl:mx-48"
    >
      <div
        className="container mx-auto px-4 py-8 text-white text-center"
        data-aos="flip-up"
      >
        <HyperText>Backend</HyperText>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-4 md:mx-10 lg:mx-20">
        {skillsBackend.map(({ id, Imgname, img, ImgclassName }) => (
          <li
            key={id}
            data-aos="zoom-in"
            className={`min-h-[10rem] list-none flex items-center justify-center`}
          >
            <GlareCard
              className={`relative h-full w-full rounded-xl border md:p-3 bg-white`}
            >
                <img
                  src={img}
                  alt={Imgname}
                  className={`h-full w-full absolute inset-0 object-cover ${ImgclassName}`}
                />
            </GlareCard>
          </li>
        ))}
      </ul>
      <div
        className="container mx-auto px-4 py-8 text-white text-center"
        data-aos="flip-up"
      >
        <HyperText>Frontend</HyperText>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-4 md:mx-10 lg:mx-20">
        {skillsFrontend.map(({ id, Imgname, img, ImgclassName }) => (
          <li
            key={id}
            data-aos="zoom-in"
            className={`min-h-[10rem] list-none flex items-center justify-center`}
          >
            <GlareCard
              className={`relative h-full w-full rounded-xl border p-2 md:p-3 bg-white`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  src={img}
                  alt={Imgname}
                  className={`h-full w-full absolute inset-0 object-contain p-2 ${ImgclassName}`}
                />
              </div>
            </GlareCard>
          </li>
        ))}
      </ul>
      <div
        className="container mx-auto px-4 py-8 text-white text-center"
        data-aos="flip-up"
      >
        <HyperText>Database</HyperText>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-4 md:mx-10 lg:mx-20">
        {skillsFrontend.map(({ id, Imgname, img, ImgclassName }) => (
          <li
            key={id}
            data-aos="zoom-in"
            className={`min-h-[10rem] list-none flex items-center justify-center`}
          >
            <GlareCard
              className={`relative h-full w-full rounded-xl border p-2 md:p-3 bg-white`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  src={img}
                  alt={Imgname}
                  className={`h-full w-full absolute inset-0 object-contain p-2 ${ImgclassName}`}
                />
              </div>
            </GlareCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
