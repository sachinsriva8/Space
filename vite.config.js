import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://sachinsriva8.github.io/Space/",
  plugins: [react()],
});
