import {
  ExperienceCardParams,
  ProjectsParams,
  TechnologiesParams,
  TestimonialParams,
} from "@/types/index";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  codendot,
  gcb,
  weblayer,
  marka,
  wanderwise,
  comfy,
  evently,
  imaginify,
  threejs,
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
    id: "Projects",
    title: "Projects",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: ExperienceCardParams[] = [
  {
    title: "Full stack Developer",
    company_name: "Gulf Crypto Bank",
    icon: gcb,
    iconBg: "#E6DEDD",
    date: "April 2023 - Jun 2024",
    points: [
      "Developing and maintaining web applications for the company's cryptocurrency projects using React.js, ES6+, Tailwind CSS, Nest.js, TypeScript, and MongoDB.",
      "Participating in project planning and provide input on project timelines and deliverables.",
      "Discovering and fixing bugs in Laravel applications, providing technical support to ensure the stability and reliability of the web application.",
      "Conducting thorough testing and debugging to identify and resolve issues.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "WebLayer For Web Services",
    icon: weblayer,
    iconBg: "#FED242",
    date: "Apr 2022 - Mar 2023",
    points: [
      "Integrating popular technologies like Algolia to enhance search functionality and improve user experience within applications.",
      "Ensuring the security of applications by implementing best practices and conducting thorough testing to identify and fix vulnerabilities.",
      "Working closely with cross-functional teams, including front-end developers, product managers, and QA testers, to deploy new features.",
      "Developing and maintaining server-side logic to ensure high performance and security.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Marka Press",
    icon: marka,
    iconBg: "#000000",
    date: "Oct 2021 - Mar 2022",
    points: [
      "Utilizing HTML, CSS, and JavaScript to create responsive landing pages for both the company and its clients, ensuring a consistent and engaging user experience across all devices.",
      "Rewrite HTML to meet industry and company standards for SEO and accessibility, driving significant increases in user traffic by achieving first-page Google search results",
      "Conducting code reviews and providing feedback to peers to maintain high-quality codebases.",
      "Writing clean, well-documented code that follows best practices and company standards.",
    ],
  },
  {
    title: "Magento Developer",
    company_name: "Codeandot",
    icon: codendot,
    iconBg: "#FFFFFF",
    date: "Feb 2021 - Sep 2021",
    points: [
      "Developing and maintaining e-commerce websites using Magento 2",
      "Customizing and optimizing Magento themes and modules according to client requirements.",
      "Ensuring that websites are scalable, secure, and perform efficiently under varying loads.",
      "Implementing front-end and back-end functionalities to enhance website performance and user experience.",
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
    name: "Place Discovery",
    description:
      "Uncover exciting destinations with in-depth information, user reviews, and ratings. Effortlessly search for, bookmark, and share your favorite spots, add new locations you've visited.Enjoy a user-friendly interface that makes exploring and sharing your adventures a breeze.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "text-[#EB4432]",
      },
      {
        name: "tailwind",
        color: "text-blue-300",
      },
      {
        name: "sql",
        color: "text-white",
      },
      {
        name: "Javascript",
        color: "text-yellow-400",
      },
      {
        name: "Algolia",
        color: "text-blue-700",
      },
    ],
    image: wanderwise,
    source_code_link: "https://github.com/Moemen12/Place_discovery_app",
    live: "http://frontend.wanderwise.wanderwise.space ",
  },
  {
    name: "Imaginify",
    description:
      "An AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.",
    tags: [
      {
        name: "nextjs",
        color: "text-black font-bold",
      },
      {
        name: "Clerk",
        color: "text-white",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "text-blue-300",
      },
      {
        name: "Stripe",
        color: "text-violet-700",
      },
      {
        name: "Typescript",
        color: "text-blue-700",
      },
      {
        name: "Cloundinary",
        color: "text-cyan-500 ",
      },
    ],
    image: imaginify,
    source_code_link: "https://github.com/Moemen12/Imaginify",
    live: "https://imaginify-iias.onrender.com",
  },
  {
    name: "Comfy Store",
    description:
      "Shop effortlessly with a user-friendly interface featuring product search, filtering options, and pagination. Customize your experience with color selection and quantity choices, all while enjoying dark mode and a seamless checkout process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "text-violet-700",
      },
      {
        name: "tailwind",
        color: "text-blue-300",
      },
      {
        name: "Javascript",
        color: "text-yellow-400",
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
        color: "text-black font-bold",
      },
      {
        name: "Clerk",
        color: "text-white",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "text-blue-300",
      },
      {
        name: "Stripe",
        color: "text-violet-700",
      },
      {
        name: "Typescript",
        color: "text-blue-700",
      },
    ],
    image: evently,
    source_code_link: "https://github.com/Moemen12/Event_Platform",
    live: "https://event-platform-woad-delta-95.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };