import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const baseURL = import.meta.env.PROD ? "/vite-react-test/" : "/";

// https://vite.dev/config/
export default defineConfig({
  base: "/vite-react-test/",
  plugins: [react()],
});
