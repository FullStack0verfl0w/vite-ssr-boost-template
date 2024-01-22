import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import ViteSsrBoostPlugin from "@lomray/vite-ssr-boost/plugin";

// https://vitejs.dev/config/
export default defineConfig({
	root: "src",
	publicDir: "../public",
	build: {
		outDir: "../dist"
	},
	plugins: [
		react(),
		ViteSsrBoostPlugin(),
	],
})
