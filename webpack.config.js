const path = require("path");

module.exports = {
  entry: "./static/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "static/js/dist")
  },
  node: {
    fs: "empty"
  },
  //erin add to not minify
  optimization : {
  	minimize: false,
  }
};
