import { HyperText } from "./HyperText";
import { GlareCard } from "./GlareCard";

interface SkillsProps {
  id: number;
  Imgname: string;
  img: string;
  ImgclassName?: string;
}
type SkillItemProps = {
  title: string;
  Maxcols?: number;
  skills: SkillsProps[];
};

export default function SkillItem({ title, skills ,Maxcols}: SkillItemProps) {
  return (
    <>
      <div
        className="container mx-auto px-4 py-8 text-white text-center"
        data-aos="flip-up"
      >
        <HyperText>{title}</HyperText>
      </div>
      <div className="flex flex-row justify-center">
      <ul className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 ${Maxcols ? `lg:grid-cols-${Maxcols}` : "lg:grid-cols-5"} gap-4 mx-4 md:mx-10 lg:mx-[180px] w-fit`}>
        {skills.map(({ id, Imgname, img, ImgclassName }) => (
          <li
            key={id}
            data-aos="zoom-in"
            className={`min-h-[10rem] list-none flex items-center justify-center`}
          >
            <GlareCard
              className={`relative h-full w-full rounded-xl bg-white`}
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
      </div>
    </>
  );
}
