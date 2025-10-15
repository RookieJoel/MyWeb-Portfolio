
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
		ImgclassName: "scale-123"
	},
	{
		id: 5,
		Imgname: "FastAPI",
		img: "tech/fastapi.png",
		ImgclassName: "scale-80 !object-contain"
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

];

export const skillsDevOps:SkillsProps[] = [
	{
		id: 1,
		Imgname: "Docker",
		img: "tech/docker.webp",
	},
	{
		id: 2,
		Imgname: "Github Actions",
		img: "tech/gitaction.png",
		ImgclassName: "scale-80 !object-contain"
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
	{
			id: 5,
			Imgname: "Google Cloud",
			img: "tech/gcloud.png",
	},
	{
			id: 6,
			Imgname: "AWS",
			img: "tech/aws.png",
	}
];
type SkillItemProps = {
  title: string;
  Maxcols?: number;
  skills: SkillsProps[];
};

export const skillsSectionItems:SkillItemProps[] = [
	{ title: "Backend", skills: skillsBackend },
	{ title: "Frontend", skills: skillsFrontend },
	{ title: "Database", skills: DatabaseSkills , Maxcols: 3},
	{ title: "DevOps & Cloud", skills: skillsDevOps , Maxcols: 6}
];




