import express from "express";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 5000;

async function startServer() {
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { 
      middlewareMode: true,
      host: "0.0.0.0",
      allowedHosts: true, // Allow all hosts in development
      hmr: {
        clientPort: process.env.REPL_SLUG ? 443 : 5000,
      },
    },
    appType: "spa",
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
