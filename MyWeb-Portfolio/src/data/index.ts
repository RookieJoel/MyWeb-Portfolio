
export const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Experience", href: "#experiences" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

interface SkillsProps {
    id:number;
    Imgname: string;
    img:string;
	ImgclassName?: string;
	cols?: string;
}

export const skillsBackend:SkillsProps[] =[
	{
		id: 1,
		Imgname: "TypeScript",
		img: "tech/ts.png"
	},
	{
		id: 2,
		Imgname: "javascript",
		img: "tech/js.png"
	},
	{
		id: 3,
		Imgname: "golang",
		img: "tech/go.png"
	},
	{
		id: 4,
		Imgname: "ndodejs",
		img: "tech/nodejs.png",
		ImgclassName: "scale-121"
	},
	{
		id: 5,
		Imgname: "Express",
		img: "tech/express.png",
		ImgclassName: "scale-110"
	},


]

export const skillsFrontend:SkillsProps[] = [
	{
		id: 1,
		Imgname: "React",
		img: "tech/React.webp"
	},
	{
		id: 2,
		Imgname: "svelte",
		img: "tech/svelte.png",
		ImgclassName: "!object-contain scale-80"
	},
	{
		id: 3,
		Imgname: "Tailwind CSS",
		img: "tech/tailwind.png",
		ImgclassName: "!object-contain scale-90"
	},
	{
		id: 4,
		Imgname: "HTML5",
		img: "tech/html.webp",
		ImgclassName: "scale-80"

	},
	{
		id: 5,
		Imgname: "CSS3",
		img: "tech/css.webp",
		ImgclassName: "scale-80"
	}
]

export const DatabaseSkills:SkillsProps[] = [
	{
		id: 1,
		Imgname: "MongoDB",
		img: "tech/mongo.png"
	},
	{
		id: 2,
		Imgname: "PostgreSQL",
		img: "tech/pgsql.png",
		ImgclassName: "scale-80 !object-contain"
	},
	{
		id: 3,
		Imgname: "MySQL",
		img: "tech/mysql.png"
	},
	{
		id: 4,
		Imgname: "Supabase",
		img: "tech/supabase.png",
		// ImgclassName: "scale-80 !object-contain"
	},
];

export const skillsDevOps:SkillsProps[] = [
	{
		id: 1,
		Imgname: "Docker",
		img: "tech/docker.webp",
	},
	{
		id: 2,
		Imgname: "AWS",
		img: "tech/AWS.webp",
	},
	{
		id: 3,
		Imgname: "Kubernetes",
		img: "tech/kubernetes.png",
	},
	{
		id: 4,
		Imgname: "Git",
		img: "tech/git.png"
	},
];
type SkillItemProps = {
  title: string;
  Maxcols?: number;
  skills: SkillsProps[];
};

export const skillsSectionItems:SkillItemProps[] = [
	{ title: "Backend", skills: skillsBackend },
	{ title: "Frontend", skills: skillsFrontend },
	{ title: "Database", skills: DatabaseSkills , Maxcols: 4},
	{ title: "DevOps", skills: skillsDevOps , Maxcols: 4}
];

export const gridItems = [
	{
		id: 1,
		area: "md:col-span-6 md:row-span-2 lg:col-span-4 lg:row-span-3 xl:col-span-3 xl:row-span-2",
		title: "Passionate Coder",
		description: "I have experience in building robust backend systems using Node.js, Express, and MongoDB. I focus on creating scalable and maintainable code.",
		img: "assets/backend.png",
		imgClassName: "w-full h-full opacity-40"
	},
	{
		id: 2,
		area: "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-2 xl:col-span-3 xl:row-span-1",
		title: "Frontend Development",
		description: "I specialize in creating responsive and user-friendly interfaces using React, Tailwind CSS, and Framer Motion. My goal is to enhance user experience through intuitive design."
	},
	{
		id: 3,
		area: "md:col-span-6 md:row-span-1 lg:col-span-4 lg:row-span-2 xl:col-span-3 xl:row-span-1",
		title: "DevOps & Cloud",
		description: "I have hands-on experience with AWS and Docker, enabling me to deploy applications efficiently and manage cloud resources effectively."
	},
	{
		id: 4,
		area: "md:col-span-6 md:row-span-2 lg:col-span-4 lg:row-span-3 xl:col-span-2 xl:row-span-2",
		title: "Do things the right way",
		description: "Running out of copy so I'll write anything."
	},
	{
		id: 5,
		area: "md:col-span-6 md:row-span-2 lg:col-span-4 lg:row-span-3 xl:col-span-4 xl:row-span-2",
		title: "Communication & Collaboration",
		description:
			"I believe in the power of effective communication and collaboration. I am always open to feedback and strive to create a positive team environment."
	}
];



