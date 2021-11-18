declare global {
  interface Skills {
    languages: string[];
    frameworks: string[];
    tools: string[];
    design: string[];
  }

  interface Project {
    title: string;
    description: string | string[];
    tag: string;
    cover: string;
    background?: string;
    url: string;
  }
}

export {};
