import type {NextApiRequest, NextApiResponse} from "next";

const PROJECTS: Project[] = [
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
  {
    title: "JustMELI",
    background: "#FFF159",
    description: "JustMELI",
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
    url: "https://github.com/justkahdri/files_organizer",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  res.status(200).json(PROJECTS);
}
