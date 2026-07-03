import { Download, Mail } from "lucide-react";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  illinois,
  nsdc,
  cleatconnect,
  threejs,
  express,
  github,
  cleatlogo,
  personallogo,
  portfolio,
  illinoiscrt,
  nsdccrt,
  docker,
  luxolyn,
  luxolynLogo,
  entri,
  internship,
  courseCompletion,
  tmbc,
} from "../assets";
import { Github, Linkedin } from "@boxicons/react";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineering",
    description:
      "Building scalable web and mobile products from concept to production.",
    skills: ["Next.js", "NestJS", "React Native"],
    icon: web,
  },
  {
    title: "Backend Architecture",
    description: "Designing secure APIs and high-performance backend systems.",
    skills: ["PostgreSQL", "MongoDB", "REST APIs"],
    icon: mobile,
  },
  {
    title: "Mobile Applications",
    description:
      "Developing polished cross-platform experiences for Android and iOS.",
    skills: ["React Native", "Expo", "Firebase"],
    icon: backend,
  },
  {
    title: "Real-Time Solutions",
    description:
      "Creating live experiences and exploring intelligent workflows.",
    skills: ["Socket.IO", "WebSockets"],
    icon: creator,
  },
];

const techStacks = [
  {
    category: "Frontend & Mobile",
    technologies: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "React Native",
      "Expo",
      "Zustand",
      "TenStack Query",
      "Framer Motion",
      "Shadcn UI",
      "Hero UI",
    ],
  },
  {
    category: "Backend",
    technologies: [
      "NestJS",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Socket.IO",
      "REST APIs",
      "Python",
    ],
  },
  {
    category: "Database",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "TypeORM",
      "Supabase",
    ],
  },
  {
    category: "Security & Authentication",
    technologies: [
      "JWT",
      "Firebase Authentication",
      "RBAC",
      "OAuth",
    ],
  },
];

const journey = [
  {
    title: "Senior Backend Developer",
    company_name: "The Madras Branding Company",
    icon: tmbc,
    iconBg: "#E6DEDD",
    date: "Aug 2025 – Jun 2026",
    points: [
      "Promoted from Junior Software Developer based on technical ownership and consistent project delivery.",
      "Architected scalable backend services using NestJS and Express.js.",
      "Developed secure authentication systems using JWT, Refresh Tokens, and Firebase.",
      "Built real-time communication features using Socket.IO.",
      "Developed and maintained production-grade web and mobile applications using Next.js and React Native.",
      "Designed scalable data models with PostgreSQL and MongoDB.",
      "Integrated third-party services including WhatsApp Cloud API and Firebase.",
      "Collaborated directly with international clients to deliver scalable digital products.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "The Madras Branding Company",
    icon: tmbc,
    iconBg: "#E6DEDD",
    date: "Nov 2024 – Aug 2025",
    points: [
      "Started my professional career as a Full Stack Developer.",
      "Contributed to the development of production-ready web applications.",
      "Built REST APIs and frontend features using the MERN stack.",
      "Worked closely with senior developers to deliver client projects.",
      "Established a strong foundation in scalable software development.",
    ],
  },
  {
    title: "Full Stack Development Program",
    company_name: "Entri Elevate",
    icon: entri,
    certificateImg: courseCompletion,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Sep 2024",
    points: [
      "Completed an intensive Full Stack Development program focused on the MERN stack.",
      "Successfully completed the internship program.",
      "Earned certifications from NSDC and Illinois Institute of Technology.",
      "Built multiple real-world full stack applications.",
    ],
  },
];

const projects = [
  {
    name: "Healthcare Innovation Platform",

    type: "Client Project",

    role: "Full Stack Developer",

    description:
      "A web and mobile platform connecting innovators, mentors, researchers, and organizations through secure collaboration, project management, and real-time communication.",

    highlights: [
      "Architected scalable backend services",
      "Developed React Native mobile application",
      "Implemented secure JWT authentication",
      "Real-time messaging with Socket.IO",
      "Firebase push notifications",
      "Role-based access control",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "TypeScript",
      "Expo",
      "MongoDB",
      "Socket.IO",
      "Firebase",
      "JWT",
      "Redux Toolkit",
      "Zustand",
      "RBAC",
      "Framer Motion",
    ],

    private: true,
  },

  {
    name: "Financial Automation Platform",

    type: "Client Project",

    role: "Senior Backend Developer",

    description:
      "An AI-powered financial automation platform that streamlines invoice management, compliance, banking integrations, and business workflows for improved operational efficiency.",

    highlights: [
      "Invoice generation and lifecycle management",
      "Automated invoice delivery via email",
      "Email-based OTP authentication and verification",
      "GST verification and compliance workflows",
      "Banking API integrations",
      "Scheduled automation using cron jobs",
      "Secure backend architecture with role-based access control",
    ],

    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
      "Shadcn UI",
      "Cashfree API",
    ],

    private: true,
  },

  {
    name: "Employee Engagement Platform",

    type: "Client Project",

    role: "Full Stack Developer",

    description:
      "An enterprise employee engagement platform focused on collaboration, recognition, gamification, and internal communication.",

    highlights: [
      "Role-based access control",
      "Leaderboard system",
      "React Native migration",
      "PostgreSQL Views",
      "REST APIs",
    ],

    technologies: ["Node.js", "Next.js", "React Native", "PostgreSQL", "Expo", "Tailwind CSS", "JWT"],

    private: true,
  },

  {
    name: "Cleat Connect",

    type: "Personal Project",

    role: "Full Stack Developer",

    description:
      "A sports field booking platform that enables users to search, book, and manage turf reservations.",

    highlights: [
      "Authentication",
      "Booking system",
      "Admin Dashboard",
      "REST APIs",
    ],

    technologies: ["React", "Node.js", "Express", "MongoDB", "CSS"],

    live: "https://cleat-connect.onrender.com",

    private: false,
  },
];

const contacts = [
  {
    title: "Email",
    value: "nasifswalah@gmail.com",
    icon: Mail,
    href: "mailto:nasifswalah@gmail.com",
    action: "Send Email",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/nasifswalah",
    icon: Linkedin,
    href: "https://linkedin.com/in/nasifswalah",
    action: "View Profile",
  },
  {
    title: "GitHub",
    value: "github.com/nasifswalah",
    icon: Github,
    href: "https://github.com/nasifswalah",
    action: "Explore Projects",
  },
  {
    title: "Resume",
    value: "Download my latest resume",
    icon: Download,
    href: "/Nasif_Swalah_Resume.pdf",
    action: "Download",
  },
];

export { services, techStacks, journey, projects, contacts };
