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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "certification",
      title: "Certification",
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Node JS Developer",
      icon: backend,
    },
    {
      title: "3D Object Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Express JS",
      icon: express
    },
    {
      name: "GitHub",
      icon: github
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const certifications = [
    {
      title: "Full Stack Development Certified User ( MERN Stack )",
      company_name: "Illinois Institute of Technology",
      icon: illinois,
      certificateImg: illinoiscrt,
      iconBg: "#E6DEDD",
      date: "Sep - 2024",
      points: [],
    },
    {
      title: "Full Stack Web Development",
      company_name: "NSDC in association with Entri Software Pvt Ltd",
      icon: nsdc,
      certificateImg: nsdccrt,
      iconBg: "#E6DEDD",
      date: "Sep 2024",
      points: [
        "Covered topics including front-end development, back-end development, state management, database management, cloud storage management, and deployment",
        "Developed full stack web applications using MongoDB, Express.js, React.js, Node.js and other related technologies.",
        "Participating in code reviews",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Cleat Connect",
      description:
        "Web-based platform that allows users to search, book, and manage sports fields from various places, providing a convenient and efficient solution for turf booking.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        
      ],
      image: cleatconnect,
      logo: cleatlogo,
      source_code_link: "https://github.com/nasifswalah/cleat-connect.git",
      live_deploy_link: "https://cleat-connect.onrender.com",
    },
    {
      name: "Luxolyn E-commerce",
      description:
        "E-commerce web app that enables users to search for products and manage their cart. Secured user authentication with JWT and Redis, and implemented role-based access control (RBAC) to restrict access for buyers and sellers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        
      ],
      image: luxolyn,
      logo: luxolynLogo,
      source_code_link: "https://github.com/nasifswalah/Luxolyn-ecommerce.git",
      live_deploy_link: "https://luxolyn.onrender.com",
    },
    {
      name: "Portfolio",
      description:
        "Personal portfolio website showcasing my projects, skills, and achievements. Designed for a smooth user experience, it highlights my professional journey in a visually engaging way.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-three-fiber",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "emailJS",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      logo: personallogo,
      source_code_link: "https://github.com/nasifswalah/Portfolio.git",
      live_deploy_link: "https://nasifswalah.netlify.app",
    },
  ];
  
  export { services, technologies, certifications, projects };