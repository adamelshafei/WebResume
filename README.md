# WebResume Portfolio Template

A modern, open-source personal portfolio template built with React, TypeScript, and shadcn/ui. Perfect for developers, designers, and professionals looking for a clean, customizable portfolio website.

## ✨ Features

- **🎨 Modern Design**: Clean, professional aesthetic with generous white space and clear hierarchy
- **🌙 Dark Mode**: Built-in dark mode toggle with persistent theme selection
- **📱 Fully Responsive**: Mobile-first design that looks great on all devices
- **🎯 Easy Customization**: All content managed through a single configuration file
- **🎨 Theme Customization**: Simple color scheme changes via CSS variables
- **⚡ Fast Performance**: Lightweight, static site ready for deployment
- **♿ Accessible**: Semantic HTML and ARIA labels throughout
- **🔧 TypeScript**: Fully typed for better developer experience
- **📦 Zero Backend**: 100% frontend - perfect for static hosting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5000`

## 📝 Customization Guide

### 1. Update Your Personal Information

Edit `client/src/config/portfolioData.ts` to customize all content:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Professional Title",
    tagline: "Your professional summary...",
    email: "your.email@example.com",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername"
    }
  },
  
  about: {
    bio: [
      "First paragraph about you...",
      "Second paragraph...",
      "Third paragraph..."
    ],
    skills: ["JavaScript", "React", "Node.js", "..."]
  },
  
  projects: [
    {
      id: "1",
      title: "Project Name",
      description: "Brief description...",
      technologies: ["React", "TypeScript", "..."],
      achievement: "Key achievement or impact...",
      liveUrl: "https://project-url.com",
      githubUrl: "https://github.com/user/project"
    },
    // Add more projects...
  ],
  
  contact: {
    title: "Your CTA heading",
    description: "Your contact section message..."
  }
};
```

### 2. Customize Colors and Theme

All colors are controlled by CSS variables in `client/src/index.css`. To change the color scheme:

#### Light Mode Colors
Edit the `:root` section:
```css
:root {
  --background: 0 0% 100%;           /* Page background */
  --foreground: 222 47% 11%;         /* Text color */
  --primary: 222 47% 11%;            /* Primary buttons */
  --muted: 210 40% 96%;              /* Card backgrounds */
  --accent: 210 20% 92%;             /* Accent elements */
  --border: 214 32% 91%;             /* Borders */
  /* ... more variables */
}
```

#### Dark Mode Colors
Edit the `.dark` section:
```css
.dark {
  --background: 222 47% 11%;         /* Dark background */
  --foreground: 210 40% 98%;         /* Light text */
  --primary: 210 40% 98%;            /* Primary buttons (dark) */
  /* ... more variables */
}
```

**Color Format**: Use HSL values in the format `H S% L%` (hue, saturation%, lightness%)
- Example: `217 91% 60%` = Professional Blue

### 3. Update Meta Tags and SEO

Edit `client/index.html`:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your custom description...">
```

### 4. Change Fonts

The template uses Inter by default. To change fonts:

1. Update the Google Fonts link in `client/index.html`
2. Update the font variable in `client/src/index.css`:
   ```css
   --font-sans: 'YourFont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
   ```

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/        # Main page sections
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Projects.tsx
│   │   │   │   └── Contact.tsx
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   └── ThemeProvider.tsx
│   │   ├── config/
│   │   │   └── portfolioData.ts # ⭐ Edit this file
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   └── index.css            # ⭐ Edit colors here
│   └── index.html               # ⭐ Edit meta tags here
├── tailwind.config.ts           # Tailwind configuration
└── package.json
```

## 🎯 Key Files to Customize

1. **`client/src/config/portfolioData.ts`** - All your content
2. **`client/src/index.css`** - Color scheme and theme
3. **`client/index.html`** - Page title and meta tags

## 🚢 Deployment

This is a static site that can be deployed to any static hosting platform:

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect your Git repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to GitHub Pages
1. Update `vite.config.ts` with your repo base path
2. Run: `npm run build`
3. Deploy the `dist` folder

### Deploy to Replit
Click the "Deploy" button in Replit to publish your portfolio live!

## 🛠️ Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons

## 📋 Component Architecture

All UI components use **shadcn/ui** exclusively:
- `Button` - All interactive buttons
- `Card` - Project cards
- `Badge` - Skills and technology tags
- `Sheet` - Mobile navigation menu
- `Separator` - Visual dividers

This ensures consistent styling and easy customization through the theme system.

## 🎨 Design Philosophy

- **Minimalist**: Clean design with focus on content
- **Professional**: Suitable for professional portfolios
- **Accessible**: WCAG compliant with semantic HTML
- **Performant**: Lightweight and fast loading
- **Customizable**: Easy to make it your own

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, mobile menu)
- **Tablet**: 768px - 1024px (two-column layouts)
- **Desktop**: > 1024px (three-column project grid)

## 🤝 Contributing

This is an open-source template. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs or suggestions
- Create pull requests for improvements

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.

## 💡 Tips

1. **Keep it simple**: Less is more - don't overcrowd your portfolio
2. **Quality over quantity**: Show your best 4-6 projects
3. **Update regularly**: Keep your content fresh and current
4. **Test on mobile**: Most visitors will view on mobile devices
5. **Optimize images**: Compress images if you add any to project cards

## 🆘 Support

If you encounter any issues:
1. Check that all dependencies are installed: `npm install`
2. Clear your browser cache and restart the dev server
3. Verify Node.js version is 18 or higher
4. Check the browser console for any errors

---

Built with ❤️ using React and shadcn/ui
