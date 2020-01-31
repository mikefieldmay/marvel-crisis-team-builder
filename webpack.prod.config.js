const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
const BrotliPlugin = require("brotli-webpack-plugin");

const config = {
  mode: "production",
  plugins: [
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    })
  ]
};

module.exports = merge(baseConfig, config);
