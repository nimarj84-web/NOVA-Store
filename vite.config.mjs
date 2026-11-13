
import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],

  input: {
    en: resolve(process.cwd(), "index_en.html"),
    fa: resolve(process.cwd(), "index_fa.html"),
  },

  build: {
    emptyOutDir: true,
  },
});
