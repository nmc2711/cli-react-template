const path = require('path');
// *HtmlWebpackPlugin는 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // *entry는 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    // *module 로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성
    rules: [
      {
        test: /\.(ts|js)x?$/,
        // *test 로더를 적용할 파일 유형 (일반적으로 정규 표현식 사용)
        exclude: /node_modules/,
        // *exclude 제외할 파일이나 폴더명
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        // *use 해당 파일에 적용할 로더의 이름
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    // *filename 웹팩으로 빌드한 파일의 이름
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CopyPlugin({
      pattern: [{ from: 'source', to: 'dest' }],
    }),
  ],
  stats: 'errors-only',
};
