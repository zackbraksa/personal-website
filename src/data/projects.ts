export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Gemography",
    techs: ["A talent network for startups to hire remote engineers."],
    link: "https://gemography.com",
  },
  {
    title: "Startup Patterns",
    techs: ["Bite-sized startup lessons for busy founders."],
    link: "https://www.producthunt.com/products/startup-patterns",
  },
  {
    title: "Hillo for Trello",
    techs: ["Board activity tracking for Trello."],
    link: "https://www.producthunt.com/products/hillo",
  },
];

export default projects;
