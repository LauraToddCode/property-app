const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
	resolve: {
		alias: {
			"@redux": path.resolve(__dirname, "src/redux"),
			"@common": path.resolve(__dirname, "src/common"),
		},
	},
}
