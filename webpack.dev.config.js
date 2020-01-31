const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = {
  mode: "development"
  // plugins: [new BundleAnalyzerPlugin()]
};

module.exports = merge(baseConfig, config);
