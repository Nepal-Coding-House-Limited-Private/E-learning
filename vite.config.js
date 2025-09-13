import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist"  // Netlify expects "dist" by default
  },
  optimizeDeps: {
    exclude: [
      "@babel/preset-env", 
      "@fortawesome/fontawesome-svg-core"
    ]
  }
});
