import type {NextApiRequest, NextApiResponse} from "next";

const SKILLS = {
  languages: ["JavaScript (ES2020)", "TypeScript", "Python", "SQL", "HTML", "CSS/Sass"],
  frameworks: ["ReactJS", "NextJS", "Chakra UI", "Node", "Bootstrap", "Formik"],
  tools: ["Bash", "Git & Github", "Unit Testing (Jest)"],
};

interface Data {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(SKILLS);
}
