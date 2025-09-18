const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
	...defaultConfig,
	entry: "./src/index.wp.jsx",
	output: {
		path: path.resolve(__dirname, "build/"),
		filename: "index.js",
		library: {
			type: "window",
			name: "MarketPlaceWP",
		},
		clean: true,
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			react: "@wordpress/element",
			"react-dom": "@wordpress/element",
		},
	},
	externals: {
		"@wordpress/element": ["wp", "element"],
		"@wordpress/components": ["wp", "components"],
		"@wordpress/i18n": ["wp", "i18n"],
		"@wordpress/hooks": ["wp", "hooks"],
		"@wordpress/block-editor": ["wp", "blockEditor"],
	},
};