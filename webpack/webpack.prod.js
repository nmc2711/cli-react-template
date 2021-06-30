const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('yes-prod'),
    }),
    // * BundleAnalyzerPlugin : 웹팩을 이용해 번들링되는 모듈을 빌드시 시각화해 놓은것(모듈의 용량, 비중들을 확인해 관리하기 유용)
    new BundleAnalyzerPlugin(),
  ],
};
