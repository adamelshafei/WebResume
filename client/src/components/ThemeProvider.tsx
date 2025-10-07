/**
 * THEME PROVIDER - Dark Mode Management
 * =====================================
 * This component manages the light/dark theme for the entire application.
 * 
 * HOW IT WORKS:
 * 1. Stores theme preference in localStorage (persists across sessions)
 * 2. Adds "light" or "dark" class to <html> element
 * 3. CSS variables in index.css respond to these classes
 * 
 * USAGE:
 * - Already wrapped around the app in App.tsx
 * - Use the useTheme() hook in any component to access/change theme
 * 
 * CUSTOMIZATION:
 * - Change defaultTheme prop to "dark" in App.tsx to start with dark mode
 * - Theme colors are defined in client/src/index.css
 */

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Create context for theme state (allows any child component to access theme)
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

/**
 * ThemeProvider Component
 * Wraps the app and provides theme state to all children
 */
export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  // Initialize theme from localStorage, or use defaultTheme
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme
  );

  // Effect: Update DOM and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes first, then add the active one
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    // Persist to localStorage so theme survives page refresh
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * useTheme Hook
 * Use this in any component to get/set the current theme
 * 
 * EXAMPLE:
 * const { theme, setTheme } = useTheme();
 * setTheme(theme === "light" ? "dark" : "light");
 */
export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
