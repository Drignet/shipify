import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "main.js",
        index: resolve(__dirname, "index.html"),
        air: resolve(__dirname, "air.html"),
        sea: resolve(__dirname, "sea.html"),
      },
    },
  },
});
