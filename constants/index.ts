import {
  ExperienceCardParams,
  PackagesParams,
  ProjectsParams,
  TechnologiesParams,
  TestimonialParams,
} from "@/types/index";
import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  codendot,
  gcb,
  weblayer,
  marka,
  wanderwise,
  comfy,
  evently,
  imaginify,
  react,
  js,
  redux,
  tailwind,
  bootstrap,
  sass,
  laravel,
  nestjs,
  sql,
  next,
  mongo,
  php,
  docker,
  halo,
  jest,
  npm,
  youapp,
  drv,
  onlyBackend,
  car,
  nextwork
} from "../public/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "packages",
    title: "Packages",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Magento Developer",
    icon: creator,
  },
];

const technologies: TechnologiesParams[] = [
  {
    name: "Next Js",
    icon: next,
  },
  {
    name: "React Js",
    icon: react,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Mongo DB",
    icon: mongo,
  },
  {
    name: "Javascript",
    icon: js,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Tailwind Css",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Nest Js",
    icon: nestjs,
  },

  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences: ExperienceCardParams[] = [
  {
    title: "Community Lead",
    company_name: "NextWork",
    icon: nextwork,
    iconBg: "#FFFFFF",
    date: "Nov 2025 – Present",
    points: [
      "Tech Used: AWS (S3, CloudFront, other services), CI/CD, Cloud infrastructure",
      "Organized and led educational sessions on AWS and cloud computing, improving participants’ practical understanding and engagement.",
      "Demonstrated real-world performance differences between S3 and CloudFront using KeyCDN Performance Tool across multiple regions (~5), showing that a 3 MB video loads up to 4× faster via CloudFront than directly from S3.",
      "Guided students through cloud deployment strategies, CI/CD workflows, and optimization trade-offs.",
      "Provided hands-on mentoring, explaining cloud concepts, and helping participants apply best practices in practical scenarios.",
    ],
  },
  {
    title: "Senior Full Stack Developer (Short-term Contract)",
    company_name: "DRV",
    icon: drv,
    iconBg: "#FFFFFF",
    date: "Apr 2025 – Oct 2025",
    points: [
      "Tech Used: Next.js, Vue.js, Laravel, NestJS, TypeScript, PostgreSQL, AWS S3, PostHog",
      "Led full refactoring of Next.js frontend architecture to Domain-Driven Design (DDD), improving maintainability, implementing SEO best practices (sitemap, robots.txt, metadata), and optimizing initial page load speed.",
      "Integrated PostHog analytics for real estate platforms, tracking ~80% of users to analyze engagement and guide content/feature decisions.",
      "Implemented CI/CD rules and automated checks to prevent non-compliant code from being pushed, ensuring code quality and system stability.",
      "Built AWS S3-based document management system with presigned URLs, improving upload efficiency, scalability, and secure storage for client files.",
      "Developed HubSpot Calendar integration using Vue.js, Laravel, and Inertia, enabling direct client-owner communication and streamlined scheduling.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Gulf Crypto Bank",
    icon: gcb,
    iconBg: "#E6DEDD",
    date: "Apr 2024 – Jun 2025",
    points: [
      "Tech Used: Next.js, React, NestJS, TypeScript, Redis, Laravel, MySQL, Microservices",
      "Applied frontend performance optimizations (memoization, lazy loading, code splitting) in Next.js, improving initial page load and user experience for ~2000 shareholders.",
      "Transformed monolithic NestJS application into a microservices architecture, enabling independent deployments, improving maintainability, and supporting collaboration across a multinational team (~India, Tunisia, Lebanon, Turkey, Algeria).",
      "Implemented Redis caching for high-frequency API endpoints on shareholder dashboards (Laravel/MySQL), reducing response time from ~600ms to ~120ms.",
      "Developed and secured critical shareholder dashboards, including OTP-based authentication, enhancing security and adoption; discovered a major vulnerability that led to CEO-page access remediation.",
      "Built stakeholder dashboards using Laravel/MySQL, leveraging built-in functionality to accelerate development and efficiently handle growing user and investor demands.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "WebLayer",
    icon: weblayer,
    iconBg: "#FED242",
    date: "Apr 2023 – Mar 2024",
    points: [
      "Tech Used: Laravel, SQL, ReactJS, Algolia, REST APIs",
      "Developed APIs and server-side logic using Laravel, supporting multiple daily client requests and improving backend performance.",
      "Built analytics and reporting tools used by internal teams and clients, enhancing operational decisionmaking and efficiency.",
      "Integrated Algolia search functionality, reducing average query response time from ~500ms to ~150ms and improving user experience.",
      "Contributed to both frontend (ReactJS) and backend (Laravel) development, focusing on scalable solutions to support the growing startup user base.",
      "Assisted in end-to-end deployment from development to production, reducing downtime and ensuring smooth product launches.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Marka Press",
    icon: marka,
    iconBg: "#000000",
    date: "Oct 2021 – Mar 2022",
    points: [
      "Tech Used: React.js, Next.js, TypeScript, TailwindCSS, Bootstrap, Sass",
      "Developed responsive client-facing pages using React.js/Next.js and TailwindCSS, ensuring cross-device consistency and performance.",
      "Migrated projects from React to Next.js, improving initial page load speed by ~40% and boosting SEO performance by ~25% based on Lighthouse metrics.",
      "Collaborated directly with clients to gather requirements and deliver tailored web solutions that aligned with business objectives.",
    ],
  },
  {
    title: "Magento Developer",
    company_name: "CodenDot",
    icon: codendot,
    iconBg: "#FFFFFF",
    date: "Feb 2021 – Sep 2021",
    points: [
      "Tech Used: Magento 2, PHP, MySQL, Frontend (HTML, CSS, JS)",
      "Developed and maintained eCommerce websites with Magento 2, implementing multiple themes and optimizing features to improve usability and site performance.",
      "Delivered customized solutions directly to clients, contributing to increased online sales and high client satisfaction.",
      "Collaborated with UI/UX designers and project managers to ensure cohesive, high-quality web applications.",
    ],
  },
];

const testimonials: TestimonialParams[] = [
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

const projects: ProjectsParams[] = [
  {
    name: "Car Rental System",
    description:
      "A sophisticated car rental platform built with NestJS, featuring microservices architecture, real-time processing, and advanced security features.",
    tags: [
      {
        name: "nestjs",
        backgroundColor: "bg-[#E0234E]",
      },

      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },

      {
        name: "microservices",
        backgroundColor: "bg-[#B68740]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "rabbitMQ",
        backgroundColor: "bg-[#FF6600]",
      },
      {
        name: "Redis",
        backgroundColor: "bg-[#A81F13]",
      },
      {
        name: "Algolia",
        backgroundColor: "bg-[#0000FF]",
      },
      {
        name: "Stripe",
        backgroundColor: "bg-[#9D9AF1]",
      },
      {
        name: "Gmail",
        backgroundColor: "bg-[#FFFF] !text-black-200",
      },
    ],
    image: onlyBackend,
    source_code_link: "https://github.com/Moemen12/car-rental-system",
  },
  {
    name: "You App",
    description:
      "YOUAPP is a platform that connects users in a dynamic and interactive way. It enables seamless communication through real-time chat, personalized user profiles, and instant notifications, creating an engaging and collaborative environment.",
    tags: [
      {
        name: "nestjs",
        backgroundColor: "bg-[#E0234E]",
      },
      {
        name: "socketIO",
        backgroundColor: "bg-[#C0C0C0] text-black",
      },
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "microservices",
        backgroundColor: "bg-[#B68740]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "rabbitMQ",
        backgroundColor: "bg-[#FF6600]",
      },
      {
        name: "docker",
        backgroundColor: "bg-[#1D63ED]",
      },
    ],
    image: youapp,
    source_code_link: "https://github.com/Moemen12/YOUAPP_FULLSTACK_PROJECT",
  },
  {
    name: "Place Discovery",
    description:
      "Uncover exciting destinations with in-depth information, user reviews, and ratings. Effortlessly search for, bookmark, and share your favorite spots, add new locations you've visited.Enjoy a user-friendly interface that makes exploring and sharing your adventures a breeze.",
    tags: [
      {
        name: "react",
        backgroundColor: "bg-[#326DA5]",
      },
      {
        name: "laravel",
        backgroundColor: "bg-[#EB4432]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "sql",
        backgroundColor: "bg-[#4F46E5]",
      },
      {
        name: "Javascript",
        backgroundColor: "bg-[#DDB318]",
      },
      {
        name: "Algolia",
        backgroundColor: "bg-[#0000FF]",
      },
    ],
    image: wanderwise,
    source_code_link: "https://github.com/Moemen12/Place_discovery_app",
    live: "http://frontend.wanderwise.wanderwise.space",
  },
  {
    name: "Auto Parts Pro",
    description:
      "A complete platform for managing auto parts with search by brand, advanced filtering, and customizable views. Includes a dashboard to add, edit, and manage parts with pagination, Excel import/export, daily sales and debts tracking, plus secure authentication.",
    tags: [
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "postgres",
        backgroundColor: "bg-[#4F46E5]",
      },
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
    ],
    image: car,
    live: "https://saadeh-dashboard.vercel.app",
  },


  {
    name: "Halo Chat",
    description:
      "A chat app supports both individual and group chats, allowing users to send messages, update group information, and manage group members and photos. It includes features like message history, profile images, and user authentication",
    tags: [
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "Pusher",
        backgroundColor: "bg-[#7D6CAD]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
    ],
    image: halo,
    source_code_link: "https://github.com/Moemen12/Chat-app",
    live: "https://saadeh-chat.vercel.app",
  },
  {
    name: "Imaginify",
    description:
      "An AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.",
    tags: [
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "Clerk",
        backgroundColor: "bg-[#505050]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "Stripe",
        backgroundColor: "bg-[#9D9AF1]",
      },
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
      {
        name: "Cloundinary",
        backgroundColor: "bg-[#0000FF]",
      },
    ],
    image: imaginify,
    source_code_link: "https://github.com/Moemen12/Imaginify",
    live: "https://imaginify-eight-sandy.vercel.app",
  },
  {
    name: "Comfy Store",
    description:
      "Shop effortlessly with a user-friendly interface featuring product search, filtering options, and pagination. Customize your experience with color selection and quantity choices, all while enjoying dark mode and a seamless checkout process.",
    tags: [
      {
        name: "react",
        backgroundColor: "bg-[#326DA5]",
      },
      {
        name: "redux",
        backgroundColor: "bg-[#7149B9]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "Javascript",
        backgroundColor: "bg-[#DDB318]",
      },
    ],
    image: comfy,
    source_code_link: "https://github.com/Moemen12/comfy_Store",
    live: "https://comfy-saadeh.netlify.app",
  },
  {
    name: "Evently",
    description:
      "Discover and explore a diverse range of events with a streamlined experience,Each event page provides detailed information, ticket purchasing options, and user profiles to manage personal data and track purchased tickets.",
    tags: [
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "Clerk",
        backgroundColor: "bg-[#505050]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "Stripe",
        backgroundColor: "bg-[#9D9AF1]",
      },
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
    ],
    image: evently,
    source_code_link: "https://github.com/Moemen12/Event_Platform",
    live: "https://event-platform-woad-delta-95.vercel.app",
  },
];

const packages: PackagesParams[] = [
  {
    name: "valid-utils",
    image: npm,
    version: "1.0.1",
    github_url: "https://github.com/Moemen12/valid-utils",
    npm_url: "https://www.npmjs.com/package/valid-utils",
  },
  {
    name: "speech-command-engine",
    image: npm,
    version: "1.0.5",
    github_url: "https://github.com/Moemen12/speech-command-engine",
    npm_url: "https://www.npmjs.com/package/speech-command-engine",
  },
  {
    name: "@saadeh/ext-sync",
    image: npm,
    version: "1.1.1",
    github_url: "https://github.com/Moemen12/ext-sync",
    npm_url: "https://www.npmjs.com/package/@saadeh/ext-sync",
  },
  {
    name: "@saadeh/xlsx",
    image: npm,
    version: "0.20.3",
    github_url: "https://github.com/SheetJS/sheetjs",
    npm_url: "https://www.npmjs.com/package/@saadeh/xlsx",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  packages,
};
