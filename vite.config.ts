import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "client"), // root is 'client'
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // output in project root /dist
    emptyOutDir: true,
  },
  base: "./", // important for SPA relative paths
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
