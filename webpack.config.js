const path = require("path");

module.exports = {
  entry: "./source/app.js",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
