import {
  backend,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  sysmap,
  tailwind,
  threejs,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Criador de conteudo",
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

const experiences = [
  {
    title: "Analista de Sustentação MuleSoft",
    company_name: "SysMap Solutions",
    iconBg: "#XXXXXX",
    icon: sysmap,
    date: "20/06/2023 - Atualmente",
    points: [

      "Atuação como Analista de Sustentação MuleSoft na SysMap Solutions, com ênfase na integração e sustentação contínua de sistemas diversos.",
      " Colaboração proativa com equipes multidisciplinares para assegurar a eficiência e o desempenho das soluções implementadas.",
      " Desenvolvimento de experiência prática em MuleSoft para garantir a integração harmônica entre diferentes sistemas. ",
      "Participação em processos de revisão de código, oferecendo feedback construtivo aos colegas desenvolvedores."
    ],
  }
];



export { experiences, services, technologies };

