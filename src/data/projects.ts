export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Gemography",
    techs: ["React", "Express", "GraphQL"],
    link: "https://gemography.com",
  },
  {
    title: "Startup Patterns",
    techs: ["iOS SDK", "Swift", "Mixpanel", "Sketch", "Express.js"],
    link: "https://www.producthunt.com/products/startup-patterns",
  },
  {
    title: "Hillo",
    techs: ["iOS SDK", "Objective-C", "Mixpanel", "Sketch"],
    link: "https://www.producthunt.com/products/hillo",
  },
];

export default projects;
