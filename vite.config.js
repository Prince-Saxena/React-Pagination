// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/React-Pagination/", // set to your repository name
	plugins: [react()], // Replace <repository-name> with your actual repo name
});
