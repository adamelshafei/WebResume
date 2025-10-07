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
    title: "Product Manager",                 // Your job title/role
    tagline: "Product Manager specializing in API platforms, payment systems, and data-driven product delivery. I leverage AI-assisted prototyping and lean experimentation to validate features fast and drive product-market fit.",
    email: "abdoshafey1@gmail.com",          // Contact email
    social: {
      // Add your social media URLs (these appear as icon buttons)
      github: "https://github.com/adamelshafei",
      linkedin: "https://linkedin.com/in/adam-elshafei",
      twitter: "https://twitter.com/adamelshafei"
      // To remove a social link: comment it out or delete the line
      // To add more: add new properties here, then update Hero.tsx and Contact.tsx
    }
  },
  
  // ============================================================================
  // ABOUT SECTION
  // ============================================================================
  about: {
    // Bio: Array of paragraphs (2-4 recommended for best layout)
    bio: [
      "I'm a Product Manager with a strong technical background in software engineering. I combine data-driven product strategy with hands-on prototyping to deliver features that users love and businesses need.",
      "At Valsoft, I owned product strategy for multiple platforms including Agora (API integration platform), RoomMaster (hospitality PMS), and DockMaster (marina management). I led delivery of 20+ API integrations driving 10× adoption and $300K+ ARR growth, and owned a payment platform now processing $10M+ annually.",
      "I use AI-assisted prototyping (Cursor, Replit, Vercel) to validate ideas in hours instead of weeks, build data-driven roadmaps that improve delivery speed by 30%+, and partner closely with engineering, design, and go-to-market teams to ship winning products."
    ],
    
    // Skills: Array of strings that display as badges
    // Tip: Group related skills together for better visual organization
    skills: [
      // Product & Strategy Skills
      "Product Strategy", "AI Prototyping", "Product Roadmaps", "PRDs", "Agile/Scrum",
      "Product Discovery", "Jira", "Confluence", "Figma", "KPIs",
      // Technical Skills
      "Python", "Node.js", "React", "JavaScript", "REST APIs",
      "Git", "PowerBI", "SQL", "Market Analysis"
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
      id: "1",                                 // Unique ID (use "1", "2", "3", etc.)
      title: "Agora API Integration Platform",
      description: "API integration platform for hospitality connecting Property Management Systems with third-party services (POS, CRMs, channel managers, revenue management systems).",
      technologies: ["REST APIs", "Lightspeed", "Toast", "Revinate", "Hospitality Tech"],  // Tech badges
      achievement: "Led data-driven discovery and delivery of 20+ API integrations, driving 10× API adoption and $300K+ ARR growth.",  // Key result/impact
      liveUrl: "https://valsoft.com/agora",           // Live demo link
      githubUrl: "https://github.com/valsoft/agora"   // Source code link
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
    // To add more projects: copy the structure above and increment the ID
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
