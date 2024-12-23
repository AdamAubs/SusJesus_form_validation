const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for your package
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "dist"), // Output directory
    publicPath: "/", // Serve from the root directory
    library: "FormValidation", // Global variable for UMD
    libraryTarget: "umd", // UMD module format
  },
  mode: "development", // Set to "development" for unminified output
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/, // Process HTML files
        use: ["html-loader"], // Use html-loader
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"], // Inject CSS and resolve imports
      },
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/, // Skip node_modules
        use: {
          loader: "babel-loader", // Transpile modern JS
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // Automatically handles image imports
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve files from the "dist" directory
    },
    port: 3000, // Development server port
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
    liveReload: true, // Enable live reload
  },
};
