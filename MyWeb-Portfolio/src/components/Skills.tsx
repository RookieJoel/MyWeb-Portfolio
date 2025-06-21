import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BackgroundBeams } from "./ui/BackgroundBeam";
import { skillsSectionItems } from "../data";
import SkillItem from "./ui/SkillItem";

export function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-clip scroll-mt-15 w-full"
    >
      {skillsSectionItems.map((item,idx) => (
        <SkillItem
          key={idx}
          title={item.title}
          skills={item.skills}
          Maxcols={item.Maxcols}
        />
      ))}
      <BackgroundBeams />
    </section>
  );
}
