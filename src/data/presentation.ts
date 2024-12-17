type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "zakaria.braksa@gmail.com",
  title: "Hi, I’m Zack 👋",
  // profile: "/profile.webp",
  description:
    "*Ex-founder* and *product engineer 👨‍💻*, I've built products that earned over 1000 upvotes on Product Hunt 🚀 and scaled a recruiting platform to serve over 100,000 developers across Africa and LATAM 🌎.",
  socials: [
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/braksa",
    },
    {
      label: "X (Twitter)",
      link: "https://x.com/zackbraksa",
    },
    {
      label: "Github",
      link: "https://github.com/zackbraksa",
    },
  ],
};

export default presentation;
