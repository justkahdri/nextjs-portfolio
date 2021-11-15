import type {NextApiRequest, NextApiResponse} from "next";

const SKILLS = {
  languages: ["JavaScript (ES2020)", "TypeScript", "Python", "SQL", "HTML", "CSS/Sass"],
  frameworks: ["ReactJS", "NextJS", "Chakra UI", "Node", "Bootstrap", "Formik"],
  tools: ["Bash/Shell", "Git & Github", "Unit Testing (Jest)"],
  design: ["Adobe Photoshop", "Adobe Illustrator", "Adobe XD", "Wireframing"],
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Skills>) {
  res.status(200).json(SKILLS);
}
