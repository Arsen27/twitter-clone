const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.test': JSON.stringify('test dev'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
