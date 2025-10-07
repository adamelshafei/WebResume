/**
 * APP.TSX - Main Application Entry Point
 * =======================================
 * This is the root component that sets up all providers and routing.
 * 
 * PROVIDER HIERARCHY (order matters!):
 * 1. QueryClientProvider - Enables React Query for data fetching
 * 2. ThemeProvider - Manages dark/light mode
 * 3. TooltipProvider - Enables tooltips from shadcn/ui
 * 4. Toaster - Shows toast notifications
 * 5. Router - Handles page routing (currently just one page)
 * 
 * CUSTOMIZATION:
 * - To add more pages: Add <Route> components in Router()
 * - To change default theme: Edit defaultTheme prop in ThemeProvider
 * - This template is designed as a single-page app with smooth scrolling
 * 
 * ROUTING:
 * - Uses wouter (lightweight router)
 * - Currently single page (/) -> Home component
 * - To add pages: Create component in /pages, then add route here
 */

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";

/**
 * Router Component
 * Defines all application routes
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* To add more pages:
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      */}
    </Switch>
  );
}

/**
 * Main App Component
 * Wraps everything in necessary providers
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* ThemeProvider manages light/dark mode - defaultTheme can be "light" or "dark" */}
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          {/* Toaster shows notification toasts */}
          <Toaster />
          {/* Router handles navigation */}
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
