// vite.config.js
import { defineConfig } from "vite";
import html from "@rollup/plugin-html";

export default defineConfig({
  plugins: [
    html({
      inject: {
        injectTo: "body",
        entryOrder: "ascending",
      },
      minify: true,
      hash: true,
      filename: "index.html",
      title: "Your App Title",
      chunks: ["main"], // Main entry point (main.js)
    }),
    html({
      inject: {
        injectTo: "body",
        entryOrder: "ascending",
      },
      minify: true,
      hash: true,
      filename: "air.html",
      title: "Your Air Page Title",
      chunks: ["main"], // Main entry point (main.js)
    }),
    html({
      inject: {
        injectTo: "body",
        entryOrder: "ascending",
      },
      minify: true,
      hash: true,
      filename: "sea.html",
      title: "Your Sea Page Title",
      chunks: ["main"], // Main entry point (main.js)
    }),
  ],
});
