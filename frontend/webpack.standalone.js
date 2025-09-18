const path = require("path");

module.exports = {
	entry: "./src/index.esm.jsx",
	output: {
		path: path.resolve(__dirname, 'standalone'),
		filename: 'index.esm.js',
		library: { type: 'module' },
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
									modules: false
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
		"react-dom/client": "ReactDOM",
		// add others as needed
	},
	experiments: { outputModule: true },
	mode: "production",
};