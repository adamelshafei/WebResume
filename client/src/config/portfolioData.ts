export const portfolioData = {
  personal: {
    name: "Adam Elshafei",
    title: "Product Manager",
    tagline: "Product Manager specializing in API platforms, payment systems, and data-driven product delivery. I leverage AI-assisted prototyping and lean experimentation to validate features fast and drive product-market fit.",
    email: "abdoshafey1@gmail.com",
    social: {
      github: "https://github.com/adamelshafei",
      linkedin: "https://linkedin.com/in/adam-elshafei",
      twitter: "https://twitter.com/adamelshafei"
    }
  },
  
  about: {
    bio: [
      "I'm a Product Manager with a strong technical background in software engineering. I combine data-driven product strategy with hands-on prototyping to deliver features that users love and businesses need.",
      "At Valsoft, I owned product strategy for multiple platforms including Agora (API integration platform), RoomMaster (hospitality PMS), and DockMaster (marina management). I led delivery of 20+ API integrations driving 10× adoption and $300K+ ARR growth, and owned a payment platform now processing $10M+ annually.",
      "I use AI-assisted prototyping (Cursor, Replit, Vercel) to validate ideas in hours instead of weeks, build data-driven roadmaps that improve delivery speed by 30%+, and partner closely with engineering, design, and go-to-market teams to ship winning products."
    ],
    skills: [
      "Product Strategy", "AI Prototyping", "Product Roadmaps", "PRDs", "Agile/Scrum",
      "Product Discovery", "Jira", "Confluence", "Figma", "KPIs",
      "Python", "Node.js", "React", "JavaScript", "REST APIs",
      "Git", "PowerBI", "SQL", "Market Analysis"
    ]
  },
  
  projects: [
    {
      id: "1",
      title: "Agora API Integration Platform",
      description: "API integration platform for hospitality connecting Property Management Systems with third-party services (POS, CRMs, channel managers, revenue management systems).",
      technologies: ["REST APIs", "Lightspeed", "Toast", "Revinate", "Hospitality Tech"],
      achievement: "Led data-driven discovery and delivery of 20+ API integrations, driving 10× API adoption and $300K+ ARR growth.",
      liveUrl: "https://valsoft.com/agora",
      githubUrl: "https://github.com/valsoft/agora"
    },
    {
      id: "2",
      title: "Payment Platform",
      description: "End-to-end payment processing platform with full compliance and regulatory requirements for hospitality and marina industries.",
      technologies: ["Payment Processing", "Compliance", "REST APIs", "Node.js"],
      achievement: "Owned end-to-end delivery and compliance of a payment platform now processing $10M+ annually.",
      liveUrl: "https://valsoft.com/payments",
      githubUrl: "https://github.com/valsoft/payments"
    },
    {
      id: "3",
      title: "DockMaster Marina Management",
      description: "The leading marina management platform in the United States, providing comprehensive solutions for marina operations and customer management.",
      technologies: ["SaaS", "Marina Tech", "Product Strategy", "API Integrations"],
      achievement: "Owned product strategy and feature delivery, improving operational efficiency for marinas across the US.",
      liveUrl: "https://dockmaster.com",
      githubUrl: "https://github.com/valsoft/dockmaster"
    },
    {
      id: "4",
      title: "RBI Mobile App Component Library",
      description: "Shared UI component library for mobile app redesigns across Tim Hortons, Burger King, and Popeyes brands.",
      technologies: ["React Native", "UI Components", "Cross-functional Coordination"],
      achievement: "Coordinated 3 engineering teams, design and QA to deliver reusable components across major QSR brands.",
      liveUrl: "https://rbi.com",
      githubUrl: "https://github.com/rbi/mobile-components"
    },
    {
      id: "5",
      title: "DevOps Monitoring Dashboard",
      description: "Internal DevOps monitoring dashboard integrating Jenkins and GitLab pipelines, providing Grafana-style visibility for engineering teams.",
      technologies: ["React", "Node.js", "Jenkins", "GitLab", "DevOps"],
      achievement: "Built and deployed real-time monitoring dashboard improving visibility and efficiency for internal teams at Ericsson.",
      liveUrl: "https://ericsson.com",
      githubUrl: "https://github.com/ericsson/devops-dashboard"
    }
  ],
  
  contact: {
    title: "Let's Build Something Great Together",
    description: "I'm always interested in discussing product opportunities, API integrations, or innovative ways to use AI in product development. Feel free to reach out!"
  }
};

export type PortfolioData = typeof portfolioData;
