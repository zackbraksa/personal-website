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
    "*Product engineer 👨‍💻* and *ex-founder*, I've built products that earned over *thousands of upvotes* on Product Hunt and scaled a recruiting platform to serve *100,000+ developers* across two continents 🌍🌎.",
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
