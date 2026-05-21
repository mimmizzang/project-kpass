import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),

        notice: resolve(__dirname, "src/pages/notice/notice.html"),
        noticeDetail: resolve(__dirname, "src/pages/notice/notice-detail.html"),
      },
    },
  },
});
