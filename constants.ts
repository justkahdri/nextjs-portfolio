import {MdMail, MdOutlineDateRange} from "react-icons/md";
import {BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs";

export const LINKS: ExternalLink[] = [
  {
    icon: MdMail,
    label: "Email",
    url: "mailto:jrmontes@estudiantes.unsam.edu.ar",
  },
  {
    url: "https://calendly.com/kahdri/15",
    icon: MdOutlineDateRange,
    label: "Book a meeting",
  },
  {
    url: "https://twitter.com/justkahdri",
    icon: BsTwitter,
    label: "Twitter",
  },
  {
    icon: BsLinkedin,
    label: "Linkedin",
    url: "https://linkedin.com/in/joaquin-montes",
  },
  {
    icon: BsGithub,
    label: "Github",
    url: "https://github.com/justkahdri",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "RhodoKros",
    background: "#f17a7a",
    description: [
      "This is a landing page made for RhodoKros, a handcrafted jewelry brand. It was made with NextJS and ChakraUI.",
      "The page was designed to promote the brand and redirect the public to the brand's social networks.",
    ],
    cover: "rhodokros.jpg",
    tag: "🏠 Landing Page",
    url: "https://rhodokros.vercel.app/",
  },
  {
    title: "Just MELI",
    background: "#FFF159",
    description: [
      "This web page was designed to be an identical clone of the product detail page of mercadolibre.com. It was made with React, TypeScript and Chakra UI.",
      "The page isn't deployed because it uses the registered image of the brand. However, you can see some previews on the readme at the repository.",
    ],
    cover: "front.png",
    tag: "🏆 Challenge",
    url: "https://github.com/justkahdri/mercadolibre-details-challenge",
  },
  {
    title: "Capigram",
    background: "#FD578C",
    description: [
      "A PWA made with React, GraphQL and implementing mobile-first design.",
      "Inspired on Instagram functionality.",
    ],
    cover: "capigram.png",
    tag: "📱 Progressive Web App",
    url: "https://capigram.vercel.app/",
  },
  {
    title: "Just Boardy",
    description: [
      "A trello-like app made for a challenge in Cognizant Softvision. It implements animations, CSS grid and local storage management.",
      "JustBoardy loads the initial data from a json file and saves the modifications on local storage. In order to add a new item, you must simply click on the '+' button and fill the fields on the modal.",
    ],
    tag: "🏆 Challenge",
    url: "https://justboardy.vercel.app/",
    cover: "justboardy.png",
    background: "#FFA95E",
  },
  {
    title: "Völks Conference",
    cover: "mock-conference.gif",
    tag: "🏠 Landing Page",
    description: [
      "A project for a Bootstrap course that I did at Platzi. I improved and transformed it into a multilingual page using React.",
      "It consist in a simple single-page app focused on styling and design. The page shows a fake brand that organizes a virtual conference in 2025.",
    ],
    url: "https://justkahdri.github.io/mockconference/",
  },
];

export const SKILLS: Skills = {
  languages: ["JavaScript (ES2020)", "TypeScript", "Python", "SQL", "HTML", "CSS/Sass"],
  frameworks: ["ReactJS", "NextJS", "Chakra UI", "Node", "Bootstrap", "Formik"],
  tools: ["Bash/Shell", "Git & Github", "Unit Testing (Jest)"],
  design: ["Adobe Photoshop", "Adobe Illustrator", "Adobe XD", "Wireframing"],
};
