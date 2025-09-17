const path = require("path");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "standalone"),
		filename: "index.esm.js",
		library: { type: "module" }, // ESM build
		globalObject: "this",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,      // Handle JS + JSX
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									targets: ">0.25%, not dead", // adjust as needed
									modules: "auto"              // 🔑 ensures import/export → require
								}
							],
							["@babel/preset-react", { "runtime": "automatic" }],
						]
					}
				}
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"], // Allow imports without extensions
	},
	externals: {
		react: "react",       // peer dependency
		"react-dom": "react-dom",
		// ✅ Treat WP packages as externals
		"@wordpress/element": "wp.element",
		"@wordpress/components": "wp.components",
		"@wordpress/i18n": "wp.i18n",
		"@wordpress/hooks": "wp.hooks",
		"@wordpress/data": "wp.data",
		"@wordpress/block-editor": "wp.blockEditor",
		// add others as needed
	},
	experiments: { outputModule: true },
	mode: "production",
};