/**
 * PORTFOLIO DATA CONFIGURATION
 * ============================
 * This is the MAIN FILE to customize your portfolio.
 * All content displayed on your website comes from this single file.
 * 
 * HOW TO CUSTOMIZE:
 * 1. Update the 'personal' section with your name, title, and contact info
 * 2. Modify the 'about' section with your bio and skills
 * 3. Add/edit projects in the 'projects' array
 * 4. Customize the contact section message
 * 
 * TIPS:
 * - Keep descriptions concise (1-2 sentences)
 * - Use 3-6 projects for best visual layout
 * - Skills will display as badges - add 10-20 for best results
 * - All URLs should include https://
 */

export const portfolioData = {
  // ============================================================================
  // PERSONAL INFORMATION
  // ============================================================================
  // This appears in the hero section and throughout the site
  personal: {
    name: "Adam Elshafei",                    // Your full name
    title: "Product Manager and Software Engineer.",                 // Your job title/role
    tagline: "I'm a Product Manager with a strong technical background and experience in Software engineering and Data Analytics. My current interest is in AI-assisted prototyping and the value it brings to discovery and product market fit. I enjoy building products that leverage cutting edge technologies.",
    email: "adam.elshafei12@gmail.com",      // Contact email
    social: {
      // Add your social media URLs (these appear as icon buttons)
      github: "https://github.com/adamelshafei",
      linkedin: "https://www.linkedin.com/in/adam-elshafei/"
      // To remove a social link: comment out or delete the line
      // To add more: add new properties here, then update Hero.tsx and Contact.tsx
    }
  },
  
  // ============================================================================
  // ABOUT SECTION
  // ============================================================================
  about: {
    // Bio: Array of paragraphs (2-4 recommended for best layout)
    bio: [
      "I'm a Product Manager with a strong technical foundation in software engineering. I combine data-driven product strategy with hands-on prototyping to deliver features that users love and businesses need.",
      "At Valsoft, I owned product strategy for Agora (API integration platform), RoomMaster (hospitality PMS), and DockMaster (marina management). I led delivery of 20+ API integrations driving 10× adoption and $300K+ ARR growth, and owned end-to-end delivery of a payment platform now processing $10M+ annually.",
      "I use AI-assisted prototyping (Cursor, Replit) to validate features in hours instead of weeks, build data-driven roadmaps that cut delivery time by 30%+, and partner with engineering, design, and GTM teams to ship winning products."
    ],
    
    // Skills: Array of strings that display as badges
    // Tip: Group related skills together for better visual organization
    skills: [
      // Product & Strategy Skills
      "AI Prototyping", "Product Roadmaps", "PRDs", "Agile/Scrum",
      "Product Discovery", "Jira", "Confluence", "Figma", "Market/Competitor Analysis", "KPIs",
      // Technical Skills
      "Python", "Node.js", "React", "JavaScript", "REST APIs",
      "Git", "PowerBI", "SQL"
    ]
  },
  
  // ============================================================================
  // PROJECTS SECTION
  // ============================================================================
  // Array of project objects. Each project displays as a card with:
  // - Title, description, tech stack badges
  // - Live demo and GitHub links
  // 
  // RECOMMENDED: 3-6 projects for optimal layout (displays in 3-column grid on desktop)
  projects: [
    {
      id: "1",
      title: "Agora API Integration Platform",
      description: "API integration platform for hospitality connecting Property Management Systems with third-party services including POS, CRMs, channel managers, and revenue management systems.",
      technologies: ["REST APIs", "Lightspeed", "Toast", "Revinate", "Product Strategy"],
      achievement: "Led data-driven discovery and delivery of 20+ API integrations, driving 10× API adoption and $300K+ ARR growth.",
      liveUrl: "https://valsoft.com",
      githubUrl: "https://github.com/adamelshafei"
    },
    {
      id: "2",
      title: "RoomMaster",
      description: "Legacy hospitality Property Management System (PMS) modernization and feature delivery for hotel and hospitality operations.",
      technologies: ["Hospitality Tech", "PMS", "Product Strategy", "API Integrations"],
      achievement: "Owned product strategy and delivery for legacy PMS platform serving hospitality industry.",
      liveUrl: "https://valsoft.com",
      githubUrl: "https://github.com/adamelshafei"
    },
    {
      id: "3",
      title: "DockMaster Marina Management",
      description: "The leading marina management platform in the United States, providing comprehensive solutions for marina operations and customer management.",
      technologies: ["SaaS", "Marina Tech", "Product Strategy", "Payment Platform"],
      achievement: "Owned product strategy and end-to-end delivery of payment platform now processing $10M+ annually.",
      liveUrl: "https://dockmaster.com",
      githubUrl: "https://github.com/adamelshafei"
    },
    {
      id: "4",
      title: "Mobile Component Library (Tim Hortons, Burger King, Popeyes)",
      description: "Shared UI component library for mobile app redesigns across Restaurant Brands International's major QSR brands.",
      technologies: ["React Native", "UI Components", "Cross-functional Coordination"],
      achievement: "Coordinated 3 engineering teams, design and QA to deliver reusable component library across major brands.",
      liveUrl: "https://rbi.com",
      githubUrl: "https://github.com/adamelshafei"
    },
    {
      id: "5",
      title: "PowerBI & SQL Retail Dashboards",
      description: "Automated PowerBI and SQL dashboards for tracking retail product performance across major US and Canada retailers.",
      technologies: ["PowerBI", "SQL", "Data Analytics", "Automation"],
      achievement: "Built dashboards and automated reporting workflows, saving 15+ hours per week while delivering insights for 20+ retailers.",
      liveUrl: "https://rbi.com",
      githubUrl: "https://github.com/adamelshafei"
    },
    {
      id: "6",
      title: "Tim Hortons Delivery Program",
      description: "National rollout of third-party delivery (UberEats, DoorDash, SkipTheDishes) to 1000+ Tim Hortons locations during COVID-19 response.",
      technologies: ["Program Management", "Delivery Platforms", "Operations"],
      achievement: "Managed onboarding for 1000+ stores and coordinated launch of 15+ new SKUs nationwide during pandemic response.",
      liveUrl: "https://timhortons.com",
      githubUrl: "https://github.com/adamelshafei"
    },
    {
      id: "7",
      title: "Ericsson Internal DevOps Tools",
      description: "Internal documentation tool and DevOps monitoring dashboard integrating CI/CD pipelines for engineering teams.",
      technologies: ["React", "Node.js", "Angular", "Java", "DevOps"],
      achievement: "Built documentation generation tool and monitoring dashboard providing DevOps visibility for internal teams.",
      liveUrl: "https://ericsson.com",
      githubUrl: "https://github.com/adamelshafei"
    }
  ],
  
  // ============================================================================
  // EXPERIENCE SECTION
  // ============================================================================
  // Array of work experience in reverse chronological order (most recent first)
  experience: [
    {
      id: "1",
      company: "Valsoft",
      position: "Product Manager",
      location: "Montreal, Canada",
      startDate: "March 2022",
      endDate: "March 2025",
      current: false,
      description: "Led product strategy and delivery for multiple B2B SaaS platforms in hospitality and marina management industries.",
      achievements: [
        "Owned product strategy for Agora (API integration platform), RoomMaster (legacy hospitality PMS), and DockMaster (U.S. leading marina management platform)",
        "Used AI-assisted prototyping (Cursor, Replit) to validate new features in hours, not weeks, boosting iteration speed and product-market fit confidence",
        "Led data-driven discovery and delivery of 20+ API integrations (Lightspeed, Toast, Revinate, etc.), driving 10× API adoption and $300K+ ARR growth",
        "Owned end-to-end delivery and compliance of a payment platform now processing $10M+ annually",
        "Built data-driven PRDs, roadmaps and discovery processes that cut feature delivery time by 30%+ from both engineering and QA teams",
        "Contributed to technical design and architecture projects. Led backend performance initiative that reduced peak traffic latency by 80% (20s → 3s)",
        "Partnered with marketing and sales on GTM, training, and integration-launch campaigns"
      ]
    },
    {
      id: "2",
      company: "Restaurant Brands International (RBI)",
      position: "Associate Product Manager",
      location: "Toronto, Canada",
      startDate: "October 2021",
      endDate: "March 2022",
      current: false,
      description: "Owned shared UI component library delivery for mobile app redesigns across major QSR brands.",
      achievements: [
        "Owned shared UI component library delivery for mobile app redesigns across Tim Hortons, Burger King, and Popeyes",
        "Coordinated 3 engineering teams, design and QA, managing dependencies and running cross-functional grooming to build alignment",
        "Created and owned the backlog of user stories and epics for the mobile app redesigns"
      ]
    },
    {
      id: "3",
      company: "Restaurant Brands International (RBI)",
      position: "Senior Data Analyst",
      location: "Toronto, Canada",
      startDate: "March 2020",
      endDate: "October 2021",
      current: false,
      description: "Built data analytics solutions and dashboards for retail product performance tracking.",
      achievements: [
        "Built PowerBI + SQL dashboards to track performance of retail products across major US & Canada retailers",
        "Automated legacy reporting workflows, saving 15+ hours per week in manual reporting",
        "Delivered actionable forecasts and insights for 20+ retailers across North America"
      ]
    },
    {
      id: "4",
      company: "Restaurant Brands International (RBI)",
      position: "Analyst",
      location: "Toronto, Canada",
      startDate: "March 2020",
      endDate: "March 2021",
      current: false,
      description: "Supported national delivery program rollout during COVID-19 response.",
      achievements: [
        "Supported national rollout of third-party delivery (UberEats, DoorDash, SkipTheDishes) to 1000+ Tim Hortons locations",
        "Managed onboarding for Tim Hortons stores to the delivery program during the Tim Hortons response to COVID-19",
        "Automated inventory workflows and coordinated launch of 15+ new SKUs nationwide"
      ]
    },
    {
      id: "5",
      company: "Ericsson",
      position: "Software Developer",
      location: "Montreal, Canada",
      startDate: "May 2017",
      endDate: "May 2018",
      current: false,
      description: "Developed internal tools and DevOps systems for engineering teams.",
      achievements: [
        "Developed an internal documentation tool using React and Node enabling documentation generation from a web UI",
        "Built and deployed a DevOps monitoring dashboard using Angular and Java integrating CI/CD pipelines to provide DevOps visibility for internal teams"
      ]
    }
  ],
  
  // ============================================================================
  // CONTACT SECTION
  // ============================================================================
  contact: {
    title: "Let's Build Something Great Together",              // Main heading
    description: "I'm always interested in discussing product opportunities, API integrations, or innovative ways to use AI in product development. Feel free to reach out!"  // Description text
  }
};

// TypeScript type export - helps with autocomplete and type safety
export type PortfolioData = typeof portfolioData;
