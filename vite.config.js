import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['pdfjs-dist/build/pdf.worker.mjs'], // 👈 explicitly include this
  },

  server: {

    proxy:{
      '/api' : 'http://localhost:5050',
    }
  }
});
