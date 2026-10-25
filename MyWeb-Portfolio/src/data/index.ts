
export const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Experience", href: "#experiences" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certs", href: "#certifications" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

interface SkillsProps {
    id:number;
    Imgname: string;
    img:string;
	ImgclassName?: string;
	liClassName?: string;
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
	},
	{
		id: 7,
		Imgname: "Terraform",
		img: "tech/terraform.png",
		ImgclassName: "scale-80 !object-contain"
	},
	{
		id: 8,
		Imgname: "Snyk",
		img: "tech/snyk.png",
		ImgclassName: "!object-contain"
	},
	{
		id: 9,
		Imgname: "Trivy",
		img: "tech/trivy.png",
		ImgclassName: "!object-contain"
	}
];
export const skillsAI:SkillsProps[] = [
	{
		id: 1,
		Imgname: "LangSmith",
		img: "tech/langsmith.svg",
		ImgclassName: "scale-80 !object-contain"
	},
	{
		id: 2,
		Imgname: "LangChain",
		img: "tech/langchain.svg",
		ImgclassName: "scale-80 !object-contain"
	},
	{
		id: 3,
		Imgname: "LangGraph",
		img: "tech/langgraph.svg",
		ImgclassName: "scale-80 !object-contain"
	},
	{
		id: 4,
		Imgname: "PyTorch",
		img: "tech/pytorch.svg",
		ImgclassName: "scale-80 !object-contain"
	},
	{
		id: 5,
		Imgname: "Hugging Face",
		img: "tech/hf.png",
		ImgclassName: "scale-80 !object-contain"
	},
	{
		id: 6,
		Imgname: "MLflow",
		img: "tech/mlflow.png",
		ImgclassName: "scale-80 !object-contain"
	},
	{
		id: 7,
		Imgname: "Ollama",
		img: "tech/ollama.png",
		ImgclassName: "scale-80 !object-contain",
		// centers the lone last-row item (2 cols on mobile, 3 cols from sm up)
		liClassName: "col-span-2 sm:col-span-1 sm:col-start-2"
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
	{ title: "DevSecOps & Cloud", skills: skillsDevOps , Maxcols: 6},
	{ title: "AI & ML", skills: skillsAI , Maxcols: 6}
];




