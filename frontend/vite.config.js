// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "standalone",
		lib: {
			entry: path.resolve(__dirname, "src/index.esm.jsx"),
			name: "MarketplaceApp",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			// Don't bundle peer deps like react, react-dom
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
				assetFileNames: (assetInfo) => assetInfo.name
			},
		},
	},
});
