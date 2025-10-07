# WebResume Portfolio Template

## Overview

A modern, responsive portfolio template built with React, TypeScript, and shadcn/ui components. Features a **dual-layout responsive design**: full portfolio on desktop and **Linktree-style mobile interface** for optimal mobile experience. This is a 100% frontend application designed for developers and professionals to showcase their work with zero backend requirements. The entire site is configured through a single data file, making customization straightforward without touching component code.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Updates (October 2025)

### Resume & Content Update
- **Resume**: Updated to latest "Software Engineer & PM" version with complete work history
- **Title**: Updated to "Product Manager & Software Engineer" 
- **Projects**: Now featuring 7 key projects:
  - Agora API Integration Platform (Valsoft)
  - RoomMaster hospitality PMS (Valsoft)
  - DockMaster Marina Management (Valsoft)
  - Mobile Component Library - Tim Hortons, Burger King, Popeyes (RBI)
  - PowerBI & SQL Retail Dashboards (RBI)
  - Tim Hortons Delivery Program (RBI)
  - Ericsson Internal DevOps Tools
- **Experience**: Complete work history with 5 roles (Valsoft, RBI x3, Ericsson) with accurate dates and locations
- **Skills**: Updated to match resume - includes AI Prototyping, Market/Competitor Analysis, PowerBI, SQL

## Previous Updates (January 2025)

### Mobile Linktree Layout
- **Responsive dual-layout system**: Automatic detection of mobile vs desktop
- **Mobile (<768px)**: Linktree-style simplified interface with:
  - Profile section (avatar, name, title, tagline)
  - Desktop viewing prompt banner
  - Stacked action buttons (Projects, Experience, Resume, Contact)
  - Social media links
  - Clean, tap-friendly design
  - **Mobile Navigation**: Action buttons switch to desktop view to display full content
- **Desktop (≥768px)**: Full portfolio with all sections
- Custom `useIsMobile` hook for responsive detection
- `forceDesktop` state allows mobile users to access full portfolio when clicking action buttons

### Experience Section
- New professional timeline component with vertical timeline design
- Work history cards showing:
  - Position, company, location, dates
  - "Current" badge for active roles
  - Achievements and key responsibilities
- Fully responsive layout
- Data-driven from `portfolioData.experience`

### Contact Information
- **Email**: adam.elshafei12@gmail.com
- **GitHub**: https://github.com/adamelshafei
- **LinkedIn**: https://www.linkedin.com/in/adam-elshafei/

### Resume Download
- Downloadable PDF resume in Hero section
- Outline button styling matching project demo links
- Available on both desktop and mobile layouts

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18+ with TypeScript, built as a Single Page Application (SPA)
- **Build Tool:** Vite for fast development and optimized production builds
- **UI Components:** shadcn/ui (Radix UI primitives) - exclusively used for all UI elements
- **Styling:** Tailwind CSS configured to use CSS variables for theming
- **Routing:** Wouter for lightweight client-side routing (currently single-page with anchor links)
- **State Management:** React hooks and Context API (ThemeProvider for dark mode)

**Design Principles:**
- Responsive, mobile-first architecture with adaptive layouts
- Component-based architecture with clear separation of concerns
- All content decoupled into a single configuration file (`client/src/config/portfolioData.ts`)
- Dual-layout responsive design (Linktree mobile + full desktop)
- Dark mode support with persistent theme storage via localStorage

**Component Structure:**
- **Section Components** (`client/src/components/sections/`): Independent, self-contained page sections (Header, Hero, About, Experience, Projects, Contact)
- **Mobile Layout** (`client/src/components/MobileLayout.tsx`): Linktree-style mobile interface
- **UI Components** (`client/src/components/ui/`): shadcn/ui primitive components
- **Custom Hooks** (`client/src/hooks/`): useIsMobile for responsive detection, useTheme for dark mode
- **Layout Logic:** Conditional rendering based on screen width (768px breakpoint)
- **Theme System:** CSS variables-based theming in `client/src/index.css` with light/dark mode variants

**Key Architectural Decisions:**

1. **Zero Backend Design:** Eliminates server dependencies - all data is statically configured, making deployment trivial to static hosting platforms

2. **Single Configuration File:** All portfolio content (personal info, projects, skills, experience) lives in `portfolioData.ts`, enabling non-technical users to customize without understanding React

3. **Responsive Dual-Layout System:** Automatically switches between Linktree-style mobile and full desktop portfolio based on screen width for optimal UX on all devices

4. **CSS Variable Theming:** Colors defined as HSL values in CSS variables allow theme customization by editing one file (`index.css`) without touching component code

5. **shadcn/ui Exclusivity:** Enforces consistent design system by using only shadcn/ui components rather than custom implementations

6. **Anchor Link Navigation:** Uses smooth scrolling to section IDs instead of multi-page routing, keeping the experience as a cohesive single page

### Data Management

**Content Configuration:**
- Central data file: `client/src/config/portfolioData.ts`
- Structured TypeScript objects for: personal info, about section, experience timeline, projects array, contact details
- Components import and consume this data reactively

**State Management:**
- Theme state managed via Context API (`ThemeProvider`)
- React Query configured but not actively used (prepared for future API integration)
- Local storage for theme persistence

### Build and Development

**Development Server:**
- Express server (`server/index.ts`) serves Vite dev server in development
- Hot Module Replacement (HMR) enabled via Vite
- Development-only plugins: Replit cartographer and dev banner

**Production Build:**
- Vite builds optimized static assets to `dist/public`
- Server code bundled with esbuild to `dist/index.js`
- Single command deployment: builds both client and server

**Path Aliases:**
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## External Dependencies

### Third-Party Libraries

**UI Framework:**
- **Radix UI** (@radix-ui/*): Unstyled, accessible component primitives (30+ components including Dialog, Dropdown, Tooltip, etc.)
- **shadcn/ui**: Pre-styled Radix components with Tailwind - configured in `components.json`

**Styling:**
- **Tailwind CSS**: Utility-first CSS framework configured with custom theme extending CSS variables
- **class-variance-authority (CVA)**: Type-safe variant styling for components
- **clsx + tailwind-merge**: Conditional className utilities

**Development Tools:**
- **TypeScript**: Full type safety across client and server
- **Vite**: Build tool with React plugin and Replit-specific plugins in development
- **PostCSS + Autoprefixer**: CSS processing pipeline

**React Ecosystem:**
- **React Router alternative:** Wouter (lightweight routing)
- **React Query** (@tanstack/react-query): Configured for future API integration
- **React Hook Form** (@hookform/resolvers): Form validation support
- **Lucide React**: Icon library (social icons, UI icons)

**Server (Minimal):**
- **Express**: Basic HTTP server for development and static file serving
- **Drizzle ORM + Neon**: Database layer configured but not actively used (prepared for future features)
- Note: The template is designed to work without the server in production static deployments

**Font Loading:**
- **Google Fonts CDN**: Inter font family loaded via `<link>` tag in `client/index.html`

### Database Configuration

**Drizzle ORM Setup:**
- Configured for PostgreSQL via Neon serverless driver
- Schema defined in `shared/schema.ts` with basic User model
- Database URL from environment variable `DATABASE_URL`
- Migration output: `./migrations`
- **Current Usage:** Database is provisioned but not used by the portfolio template (prepared for future authentication/dynamic features)

**Storage Interface:**
- In-memory storage implementation (`server/storage.ts`) as fallback
- Abstracted CRUD interface allows swapping storage backends

### Configuration Files

- `components.json`: shadcn/ui configuration (New York style, neutral base color, CSS variables enabled)
- `tailwind.config.ts`: Tailwind configuration referencing CSS variables
- `tsconfig.json`: TypeScript configuration with path aliases
- `vite.config.ts`: Vite build configuration with React and Replit plugins
- `drizzle.config.ts`: Database ORM configuration