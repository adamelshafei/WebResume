export const portfolioData = {
  personal: {
    name: "Shawn Elbaz",
    title: "Development Manager",
    tagline: "I'm a Senior Software Engineer with expertise in full-stack development, cloud architecture, and team leadership. I specialize in building scalable applications using modern technologies and best practices.",
    email: "shawn@example.com",
    social: {
      github: "https://github.com/shawnelbaz",
      linkedin: "https://linkedin.com/in/shawnelbaz",
      twitter: "https://twitter.com/shawnelbaz"
    }
  },
  
  about: {
    bio: [
      "I'm a Senior Software Engineer with expertise in full-stack development, cloud architecture, and team leadership. I specialize in building scalable applications using modern technologies and best practices.",
      "With over 8 years of experience, I've led teams in delivering enterprise solutions across various industries. My approach combines technical excellence with a deep understanding of business needs, ensuring solutions that drive real value.",
      "I'm passionate about open-source contributions, mentoring developers, and staying at the forefront of technology trends. When I'm not coding, you'll find me exploring new frameworks or contributing to the developer community."
    ],
    skills: [
      "JavaScript", "TypeScript", "React", "Node.js", "Python", "FastAPI",
      "Azure", "AWS", ".NET", "PostgreSQL", "MongoDB", "Docker",
      "Kubernetes", "Service Bus", "CosmosDB", "API Gateway",
      "Lambda", "Step Functions", "Git", "Jira"
    ]
  },
  
  projects: [
    {
      id: "1",
      title: "RoomMaster / Agora",
      description: "A critical middleware platform connecting Property Management Systems (PMS) with third-party services.",
      technologies: ["Azure Serverless", "API Gateway", "Service Bus", "CosmosDB"],
      achievement: "Seamlessly integrates with services like Lightspeed POS, improving hotel operations efficiency.",
      liveUrl: "https://example.com/roommaster",
      githubUrl: "https://github.com/example/roommaster"
    },
    {
      id: "2",
      title: "DockMaster / DMPay",
      description: "Payment processing and marina management integration solution.",
      technologies: ["Azure", ".NET", "React", "Python", "FastAPI", "PostgreSQL"],
      achievement: "Streamlined payment processing for marina operations.",
      liveUrl: "https://example.com/dockmaster",
      githubUrl: "https://github.com/example/dockmaster"
    },
    {
      id: "3",
      title: "Valpay",
      description: "Enterprise payment processing platform for multiple business verticals.",
      technologies: ["AWS", "Docker", "Node.js", "MongoDB", "Lambda", "Step Functions"],
      achievement: "Unified payment solution across diverse business domains.",
      liveUrl: "https://example.com/valpay",
      githubUrl: "https://github.com/example/valpay"
    },
    {
      id: "4",
      title: "Valsource",
      description: "Sophisticated M&A cold outreach tool featuring advanced company profiling.",
      technologies: ["Python", "FastAPI", "AWS Lambda", "Step Functions"],
      achievement: "Automated web scraping and ETL pipelines for company/contact profiling.",
      liveUrl: "https://example.com/valsource",
      githubUrl: "https://github.com/example/valsource"
    }
  ],
  
  contact: {
    title: "Let's Build Something Great Together",
    description: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"
  }
};

export type PortfolioData = typeof portfolioData;
