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
    link: "https://www.producthunt.com/products/startup-patterns#startup-patterns",
  },
  {
    title: "Hillo for Trello",
    techs: ["Board activity tracking for Trello."],
    link: "https://www.producthunt.com/products/hillo#hillo",
  },
  {
    title: "Hidden Founders",
    techs: ["Build your MVP on a bootstrap-friendly payment plan."],
    link: "https://www.producthunt.com/products/hidden-founders?comment=57857#hidden-founders",
  },
  {
    title: "Qudos",
    techs: ["Product Hunt for dev tool"],
    link: "https://www.producthunt.com/products/qudos#qudos"
  }

];

export default projects;
