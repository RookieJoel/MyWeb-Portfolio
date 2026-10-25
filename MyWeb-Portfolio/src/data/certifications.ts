export interface Credential {
  title: string;
  issuer: string;
  date: string;
  img: string;
  link: string;
  // true when `link` points to a third-party verification page
  verifiable: boolean;
}

// Credly badges, newest first
export const badges: Credential[] = [
  {
    title: "AIS Digital Talent | The Bloom",
    issuer: "AIS Academy",
    date: "Aug 2026",
    img: "/certs/ais-the-bloom.png",
    link: "https://www.credly.com/badges/409db40c-fb0b-408d-8f59-298cf3af3d8c",
    verifiable: true,
  },
  {
    title: "AWS Academy Graduate – Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "Apr 2026",
    img: "/certs/aws-academy-cloud-architecting.png",
    link: "https://www.credly.com/badges/0c5ba5df-ca4a-484c-8cad-23ebf57ca683",
    verifiable: true,
  },
  {
    title: "Google AI Essentials",
    issuer: "Google · Coursera",
    date: "Oct 2024",
    img: "/certs/google-ai-essentials.png",
    link: "https://www.credly.com/badges/53bdcf84-7a63-48e4-8304-be0764aaf4d5",
    verifiable: true,
  },
];

// Course certificates, newest first
export const certificates: Credential[] = [
  {
    title: "Hugging Face Agents Course – Certificate of Excellence",
    issuer: "Hugging Face",
    date: "Oct 2026",
    img: "/certs/hf-agents-course.jpg",
    link: "/certs/hf-agents-course.jpg",
    verifiable: false,
  },
  {
    title: "Fundamentals of Agents",
    issuer: "Hugging Face",
    date: "Sep 2026",
    img: "/certs/hf-agents-fundamentals.jpg",
    link: "/certs/hf-agents-fundamentals.jpg",
    verifiable: false,
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "May 2026",
    img: "/certs/aws-cloud-practitioner-essentials.jpg",
    link: "/certs/aws-cloud-practitioner-essentials.jpg",
    verifiable: false,
  },
  {
    title: "Introduction to Security Principles in Cloud Computing",
    issuer: "Google Cloud · Coursera",
    date: "May 2026",
    img: "/certs/google-cloud-security-principles.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/UO9PM6PSOOW7",
    verifiable: true,
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google · Coursera",
    date: "May 2026",
    img: "/certs/google-networks-security.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/QWMBBTSCP1YV",
    verifiable: true,
  },
  {
    title: "Claude 101",
    issuer: "Anthropic Academy",
    date: "Mar 2026",
    img: "/certs/anthropic-claude-101.jpg",
    link: "https://verify.skilljar.com/c/k3yjw8ymzmne",
    verifiable: true,
  },
];
