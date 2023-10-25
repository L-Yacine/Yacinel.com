import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  php,
  flutter,
  reactjs,
  python,
  tailwind,
  nodejs,
  git,
  figma,
  mongoDB,
  postgresql,
  wordpress,
  nextjs,
  ctai,
  devtube,
  sdreads,
  exwiki,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Web Development (design required)",
    icon: frontend,
  },
  {
    title: "Software testing and maintenance (Documentation required)",
    icon: backend,
  },
  {
    title: "Custom E-commerce solutions ",
    icon: ux,
  },
  {
    title: "Software design and modeling (UML only)",
    icon: prototyping,
  },
  {
    title: "Web development using Content management systems  ",
    icon: backend,
  },
];

const technologies = [
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "JavaScript (ES6)",
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
    name: "Python 3",
    icon: python,
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
    name: "Wordpress CMS",
    icon: wordpress,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "MongoDB (noSQL)",
    icon: mongoDB,
  },
];

const experiences = [
  {
    title: "Wordpress Developer",
    company_name: "Freelance",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Sep 2020 - Jan 2020",
  },
  {
    title: " Mobile Developer <Flutter>",
    company_name: "Freelance",
    icon: microverse,
    iconBg: "#333333",
    date: "Oct 2021 - May 2022",
  },
  {
    title: "Class instructor <OOP and RDBMS>",
    company_name: "Mandatory military service",
    icon: kelhel,
    iconBg: "#333333",
    date: "Sep 2022 - May 2023",
  },
  {
    title: "Full Stack Developer ",
    company_name: "Personal project",
    icon: dcc,
    iconBg: "#333333",
    date: "Jun 2023 - Aug 2023",
  },
  {
    title: "Python Developer <Telegram Api>",
    company_name: "Local whole seller",
    icon: dcc,
    iconBg: "#333333",
    date: "Aug 2023 - Oct 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "T&C media generator",
    description:
      "T&C Studio helps users generate ai content including Images, music,short videos plus an ai writer that can help with prompts, emails,scripts...etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ctai,
    repo: "https://github.com/L-Yacine/yl-tcai",
    demo: "https://yl-tcai.vercel.app",
  },

  {
    id: "project-3",
    name: "Dev-tube",
    description: "A youtube client minus all the clutter and distractions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: devtube,
    repo: "https://github.com/L-Yacine/yl-devtube",
    demo: "yl-tube.netlify.app",
  },
  {
    id: "project-4",
    name: "S&D-READS",
    description: `A single-page application that allows users to summarize long articles using an Ai algorithm fine-tuned to remove all the clutter without compremizing context or meaning.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sdreads,
    repo: "https://github.com/L-Yacine/shortreads",
    demo: "yl-short-reads.netlify.app",
  },
  {
    id: "project-5",
    name: "Exercise-Wiki",
    description: "A simple straight to the point exercise web-app.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: exwiki,
    repo: "https://github.com/L-Yacine/ExerciseWiki",
    demo: "https://yl-exwiki.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
