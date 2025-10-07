# Quick Customization Guide

This guide will help you customize your portfolio template in just a few minutes.

## Step 1: Update Your Information (2 minutes)

Open `client/src/config/portfolioData.ts` and replace the sample data with your own:

### Personal Details
```typescript
personal: {
  name: "Your Name",                    // Your full name
  title: "Your Job Title",              // e.g., "Full-Stack Developer"
  tagline: "Your pitch...",             // 1-2 sentence summary
  email: "you@example.com",
  social: {
    github: "https://github.com/you",
    linkedin: "https://linkedin.com/in/you",
    twitter: "https://twitter.com/you"
  }
}
```

### About Section
```typescript
about: {
  bio: [
    "Paragraph 1 about your background...",
    "Paragraph 2 about your experience...",
    "Paragraph 3 about your interests..."
  ],
  skills: [
    "JavaScript", "TypeScript", "React",  // Replace with your skills
    "Node.js", "Python", "AWS", // Add as many as you want
  ]
}
```

### Projects
```typescript
projects: [
  {
    id: "1",                              // Keep unique IDs
    title: "Your Project Name",
    description: "What it does in 1-2 sentences",
    technologies: ["Tech1", "Tech2"],     // Stack used
    achievement: "Impact or key result",
    liveUrl: "https://demo.com",         // Live site
    githubUrl: "https://github.com/..."  // Source code
  },
  // Add 3-6 projects total
]
```

## Step 2: Customize Colors (Optional, 5 minutes)

Want to change the color scheme? Edit `client/src/index.css`:

### Quick Color Presets

#### Professional Blue (Default)
Already set! Uses `--accent: 217 91% 60%`

#### Tech Purple
```css
/* In :root section, change: */
--accent: 210 20% 92%;      /* to: */ --accent: 270 50% 92%;
--ring: 217 91% 60%;        /* to: */ --ring: 270 70% 60%;

/* In .dark section, change: */
--accent: 217 15% 20%;      /* to: */ --accent: 270 30% 20%;
--ring: 217 91% 60%;        /* to: */ --ring: 270 70% 65%;
```

#### Green Tech
```css
/* In :root section, change: */
--accent: 210 20% 92%;      /* to: */ --accent: 142 40% 92%;
--ring: 217 91% 60%;        /* to: */ --ring: 142 70% 50%;

/* In .dark section, change: */
--accent: 217 15% 20%;      /* to: */ --accent: 142 30% 18%;
--ring: 217 91% 60%;        /* to: */ --ring: 142 70% 55%;
```

#### Warm Orange
```css
/* In :root section, change: */
--accent: 210 20% 92%;      /* to: */ --accent: 25 70% 92%;
--ring: 217 91% 60%;        /* to: */ --ring: 25 90% 55%;

/* In .dark section, change: */
--accent: 217 15% 20%;      /* to: */ --accent: 25 40% 18%;
--ring: 217 91% 60%;        /* to: */ --ring: 25 90% 60%;
```

### Understanding HSL Colors
Format: `Hue Saturation% Lightness%`
- **Hue**: 0-360 (0=red, 120=green, 240=blue)
- **Saturation**: 0-100% (0=gray, 100=vivid)
- **Lightness**: 0-100% (0=black, 50=pure, 100=white)

## Step 3: Update Page Title & Meta Tags (1 minute)

Edit `client/index.html`:

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Portfolio of Your Name, a Full-Stack Developer specializing in React and Node.js">
```

## Step 4: Test Your Portfolio

1. **Run the dev server**:
   ```bash
   npm run dev
   ```

2. **Check these things**:
   - ✅ All your information appears correctly
   - ✅ Dark mode toggle works
   - ✅ Mobile menu opens on small screens
   - ✅ All links work (projects, social media)
   - ✅ Smooth scrolling between sections

3. **View on mobile**:
   - Open browser dev tools (F12)
   - Click device toolbar (mobile icon)
   - Test navigation and layout

## Step 5: Deploy Your Portfolio

### Option A: Deploy to Replit (Easiest)
1. Click "Deploy" button in Replit
2. Your portfolio is live!

### Option B: Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option C: Deploy to Netlify
1. Push code to GitHub
2. Go to netlify.com
3. "New site from Git" → Select repo
4. Deploy!

## Common Customizations

### Remove a Social Link
In `portfolioData.ts`, comment out the link:
```typescript
social: {
  github: "https://github.com/you",
  linkedin: "https://linkedin.com/in/you",
  // twitter: "https://twitter.com/you"  // Commented out
}
```

Then in `Hero.tsx` and `Contact.tsx`, comment out the Twitter button.

### Add More Projects
Just add more objects to the `projects` array in `portfolioData.ts`:
```typescript
projects: [
  { /* project 1 */ },
  { /* project 2 */ },
  { /* project 3 */ },
  { /* NEW: project 4 */ },
]
```

### Change Font
1. Update Google Fonts link in `client/index.html`
2. Update in `client/src/index.css`:
   ```css
   --font-sans: 'NewFont', -apple-system, sans-serif;
   ```

## Tips for a Great Portfolio

1. **Be Concise**: Keep descriptions clear and brief
2. **Show Impact**: Include metrics or achievements in projects
3. **Stay Current**: Update regularly with new projects
4. **Quality Matters**: 4 great projects > 10 mediocre ones
5. **Mobile First**: Most people view on phones
6. **Fast Loading**: Keep it lightweight, avoid large images

## Need Help?

- **Stuck?** Check the main README.md for detailed documentation
- **Bugs?** Clear browser cache and restart dev server
- **Styling?** All UI uses shadcn/ui components - check their docs

---

**You're ready to launch!** 🚀

Remember: Your portfolio is never "done" - keep refining it as you grow.
