const path = require("path")

module.exports = {
  entry: {
    bundle: "./src/app.js"
  },

  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public")
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  }
};