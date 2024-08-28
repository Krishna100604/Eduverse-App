import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/webhooks": {
        target: "http://localhost:5005",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
