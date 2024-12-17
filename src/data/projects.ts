export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Voxgig",
    techs: [
      "Software consultancy & SaaS company, maintaining Seneca.js & building DevRel tools.",
    ],
    link: "https://voxgig.com",
  },
  {
    title: "Gemography",
    techs: ["Recruiting platform to connect startups with remote engineers."],
    link: "https://gemography.com",
  },
  {
    title: "Startup Patterns",
    techs: ["iOS app to receive bite-sized startup lessons."],
    link: "https://www.producthunt.com/products/startup-patterns#startup-patterns",
  },
  {
    title: "Hillo for Trello",
    techs: ["iOS app to track Trello board activity."],
    link: "https://www.producthunt.com/products/hillo#hillo",
  },
  {
    title: "Hidden Founders",
    techs: ["Startup studio to help non-tech founders build their MVP."],
    link: "https://www.producthunt.com/products/hidden-founders?comment=57857#hidden-founders",
  },
  {
    title: "Qudos",
    techs: ["The Product Hunt for dev tools."],
    link: "https://www.producthunt.com/products/qudos#qudos",
  },
];

export default projects;
