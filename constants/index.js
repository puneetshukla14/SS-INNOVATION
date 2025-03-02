import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "Technology",
  },
  {
    id: "skills",
    title: "Surgical Procedures",
  },
  {
    id: "projects",
    title: "Products",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "SSI MANTRA 3",
    icon: <FullStackIcon />,
  },
  {
    title: "SSi Mudra",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "SSi Maya",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "SSi Yantra",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Urology",
    company_name: "Robotic Procedures",
    icon: "/assets/company/curowell-logo.svg",
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Radical Prostatectomy with Bilateral Pelvic Lymph Node Dissection",
      "Radical Nephrectomy (Right & Left)",
      "Partial Nephrectomy (Right & Left)",
      "Radical Cysto-Prostatectomy with Neo Bladder",
    ],
  },
  
   {
     title: "Cardiac",
     company_name: "Robotic Procedures",
     icon: "/assets/company/curowell-logo.svg",
     iconBg: "#E6DEDD",
     date: "",
     points: [
       "Totally Endoscopic Coronary Artery Bypass (TECAB)",
       "Left Internal Mammary Artery (LIMA) Mobilization",
       "Bilateral Internal Mammary Artery (BIMA) Grafting",
       "Mitral Valve Replacement",
     ],
   },
   {
    title: "Thoracic",
    company_name: "Robotic Procedures",
    icon: "/assets/company/curowell-logo.svg",
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Thoracoscopy/Pericardial Window",
      "Robotic Bullectomy",
      "Pneumonectomy (Right & Left)",
      "Mediastinal Cyst",
    ],
},
{
  title: "General",
  company_name: "Robotic Procedures",
  icon: "/assets/company/curowell-logo.svg",
  iconBg: "#E6DEDD",
  date: "",
  points: [
    "Cholecystectomy",
    "Bilateral Inguinal Hernia",
    "Ventral Hernia/Epigastric Hernia Repair",
    "Umbilical Hernioplasty",
  ],
},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SSI Mantra 3",
    description:
      "The SSI Mantra 3 redefines accessibility in robotic surgery with advanced features designed for precision, surgeon comfort, and improved patient outcomes. Built to democratize excellence in surgical care, it empowers healthcare systems globally to bring cutting-edge technology to every operating room. Experience the next generation of innovation, making robotic surgery accessible to patients worldwide.",
    tags: [
      {
        name: "Open Face Console Design",
        color: "blue-text-gradient",
      },
      {
        name: "Large 3D 4K Monitor Vision",
        color: "green-text-gradient",
      },
      {
        name: "2D Touch Monitor System Controls",
        color: "pink-text-gradient",
      },
      {
        name: "Head Tracking Safety Feature",
        color: "orange-text-gradient",
      },
      {
        name: "Ergonomic Surgeon Hand Control Device",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/mantra3.png",
    
   
    deployed_link: "https://ssinnovations.com/ssi-mantra/",
  },
  {
    name: "SSi-Maya",
    description:
      "Welcome to SSI Maya, a mixed-reality robotic surgery platform that uses cutting-edge web3-based technologies to provide innovative solutions such as 3D holographic DICOM imaging, Virtual User Guides, AI-based Anatomy Segmentation, Virtual Surgery, Tele-proctoring, and Tele-surgery.",
    tags: [
      {
        name: "more precise",
        color: "blue-text-gradient",
      },
      {
        name: "surgeries safer",
        color: "green-text-gradient",
      },
      {
        name: "more efficient",
        color: "pink-text-gradient",
      },
      {
        name: "immersive experience",
        color: "orange-text-gradient",
      },
      
    ],
    image: "/assets/SSi-Maya-Product-Page-Splash-1A.png",
   
    deployed_link: "https://ssinnovations.com/ssi-maya/",
  },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.vercel.app/",
  // },
  {
    name: "SSi Yantra ",
    description:
      "Seamless Integration: SSi Yantra seamlessly interfaces with SSi Mantra, creating a unified ecosystem that streamlines surgical workflows, pre-operative data, and beyond.",
    tags: [
      {
        name: "Surgical Video Mastery",
        color: "blue-text-gradient",
      },
      {
        name: "Dynamic Simulators",
        color: "green-text-gradient",
      },
      {
        name: "Live Streaming",
        color: "pink-text-gradient",
      },
      {
        name: "Tele-Mentoring",
        color: "orange-text-gradient",
      },
      {
        name: "Pre-operative Data Mastery",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/SSI-Yantra-Web-Splash-1B.png",
    
    deployed_link:
      "https://ssinnovations.com/ssi-yantra/",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
 
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "http://linkedin.com/company/ssinnovationsgroup/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/ssinnovations/",
  },
];

const heroTexts = [
  "SSi Mantra – Surgical Robotic System",
  700,
  "SSi Mudra – Endosurgical Instruments",
  700,
  "SSi Maya – Mixed Reality Training",
  700,
  "SSi Yantra – Multimedia Recording & Streaming",
  700,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
