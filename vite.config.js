import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: true,
  },
  server: {
    port: 3000,
  },
});
