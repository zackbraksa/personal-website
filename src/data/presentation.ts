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
    "I've worn many hats – founder, engineering manager, product leader, growth strategist – all fueled by my love for learning and problem-solving. I've strategized, built, coded, and mentored, always aiming for growth.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/zackbraksa",
    },
    {
      label: "Github",
      link: "https://github.com/zackbraksa",
    },
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/braksa",
    },
  ],
};

export default presentation;
