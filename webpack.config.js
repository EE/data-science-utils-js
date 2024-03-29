const path = require("path");
const webpack = require("webpack");
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        library: "data-science-utils",
        libraryTarget: "umd",
        libraryExport: "default",
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: "url-loader"
            }
        ]
    },
    plugins: [
        new uglifyJsPlugin(),
    ]
};
