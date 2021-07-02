const webpack = require('webpack');
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('yes-prod'),
    }),
    // * BundleAnalyzerPlugin : 웹팩을 이용해 번들링되는 모듈을 빌드시 시각화해 놓은것(모듈의 용량, 비중들을 확인해 관리하기 유용)
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        // * MiniCssExtractPlugin 플러그인은 CSS 파일을 별도 파일로 추출합니다. CSS 코드가 포함된 JS 파일 별로 CSS 파일을 생성합니다.
        // CSS 및 SourceMaps의 온 디멘드 로딩기능 정말중요한데 가끔 css가 너무 크기가 크면 스타일이 읽히지않을때가 있죠
        // 이 소스맵의 데멘드 로딩기능으로 필요한 css파일만 골라읽는 작용할 수 있습니다. 넘좋음
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
