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
    category: "Core Technologies",
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Python",
    ],
  },
  {
    category: "Backend",
    technologies: [
      
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "Webhooks",
      "Third-Party APIs",
    ],
  },
  {
    category: "Frontend & Mobile",
    technologies: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
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
    category: "Web & SEO",
    technologies: [
      "Responsive Design",
      "Semantic HTML",
      "Technical SEO",
      "Next.js Metadata",
      "Sitemap",
      "Robots.txt",
      "Lighthouse",
      "Core Web Vitals",
    ],
  },
  {
    category: "Database & Security",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "TypeORM",
      "Firebase",
      "JWT",
      "RBAC",
      "Firebase Auth",
      "Request/Response Encryption",
      "OAuth",
      "Supabase",
    ],
  },
  {
    category: "Tools & DevOps",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Jest",
      "Vitest",
      "Postman",
      "Codex",
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
      "Owned medical innovation networking platform end-to-end, independently designing and implementing new features across backend, web, and mobile, while managing production deployments and Android/IOS releases.",
      "Implemented key platform features including content sharing and previews, admin RBAC, chat and broadcast messaging, push/in-app notifications, and data export. ",
      "Established secure and scalable backend practices, including JWT refresh token rotation, RBAC, request/response validation, and PostgreSQL/MongoDB data architecture. ",
      "Worked directly with clients on feature discussions, API and technical documentation, production support, and user issue resolution, translating requirements into technical solutions.",
      "Designed and developed the backend architecture for a fintech platform managing clients, services, invoices, and agreements, while building the initial frontend and integrating it with the backend.",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "The Madras Branding Company",
    icon: tmbc,
    iconBg: "#E6DEDD",
    date: "May 2025 – Jul 2025",
    points: [
      "Contributed to a WhatsApp-based food delivery platform, developing vendor dashboards and customer ordering experiences.",
      "Designed and developed the backend architecture for a medical innovation networking platform serving web, mobile, and admin applications through a unified Node.js backend.",
      "Built core features including real-time chat, connections, member discovery, user-generated content, projects, program applications, posts, and discussions, with Firebase authentication for users and JWT for administrators.",
    ],
  },
  {
    title: "MERN Stack Developer ",
    company_name: "The Madras Branding Company",
    icon: tmbc,
    iconBg: "#E6DEDD",
    date: "Nov 2025 – Apr 2025",
    points: [
      "Contributed to the development of an employee monitoring and engagement platform, across web and mobile applications, delivering a significant portion of the product after joining the project. ",
      "Implemented role-based access control (RBAC) with granular permissions across different user roles.",
      "Built and maintained backend services, implementing authentication, authorization, and data management for core functionality.",
      "Developed the web dashboard and contributed to the mobile application, including the iOS development workflow.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "Entri Software Pvt Ltd",
    icon: entri,
    certificateImg: internship,
    iconBg: "#E6DEDD",
    date: "Sep 2024 – Oct 2024",
    points: [
      "Built a Turf Booking Platform with real-time slot management, interactive dashboards, and role-based access control (RBAC). ",
      "Integrated Razorpay payment gateway to enable secure online payments within the booking workflow",
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

    live: "https://www.blockchainforimpact.in/interconnect-webpage",

    private: false,
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
