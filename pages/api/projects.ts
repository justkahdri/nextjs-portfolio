import type {NextApiRequest, NextApiResponse} from "next";

const PROJECTS: Project[] = [
  {
    title: "Völks Conference",
    cover: "mock-conference.gif",
    tag: "🏠 Landing Page",
    description: [
      "A project for a Bootstrap course that I did at Platzi. I improved and transformed it into a multilingual page using React.",
      "It consist in a simple single-page app focused in styling and design. The page shows a fake brand that organizes a virtual conference in 2025.",
    ],
    url: "https://justkahdri.github.io/mockconference/",
  },
  {
    title: "Files Organizer",
    description:
      "An App that checks and manages the Downloads folder in a windows computer. It can stay running on the background.",
    cover: "studio.jpg",
    tag: "👨‍🎤 Desktop App",
    // "description": [
    //   "This is the first desktop application that I made. I started doing it with a friend so we learned to work together with Git and Github.",
    //   "Checks and manages the Downloads folder in a windows computer, it can stay running on the background and deploys a system tray icon.",
    //   "The methodology is simple, the program reads the extensions from the files in the current folder (Downloads Folder by default) and groups them depending on their types to move them to their correspondent folders."
    // ],
    url: "https://github.com/justkahdri/files_organizer",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  res.status(200).json(PROJECTS);
}
