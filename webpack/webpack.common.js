const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // * entry는 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    // * module 로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성
    rules: [
      {
        test: /\.(ts|js)x?$/,
        // * test 로더를 적용할 파일 유형 (일반적으로 정규 표현식 사용)
        exclude: /node_modules/,
        // * exclude 제외할 파일이나 폴더명
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        // * use 해당 파일에 적용할 로더의 이름
      },
      {
        // * README에서 설명드린거와 같이 작업을 하며 스타일을 수시로 바꿀수있는 상황에는 style-loader를 이용하여 scss를 컴파일해서 사용합니다.
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    // * filename : 웹팩으로 빌드한 결과 파일의 이름
    filename: 'bundle.js',
  },
  plugins: [
    // * HtmlWebpackPlugin는 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
    // 즉, template에 지정된 경로에있는 html파일 output > path에 설정한 dir에 복사시켜주는 역활
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    // * CopyPlugin from으로 지정한 경로에 있는 폴더 혹은 파일을 통째로 build(dist)절대 경로에 옮겨주는 플로그인
    // build 성공시 assets가 통쨰로 떨궈지는걸 볼수있다.
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
  ],
  // * stats 웹팩이 실행되는 동안에 출력할 메시지 (optional로 에러, 워닝 등 선택할수있음)
  stats: 'errors-only',
};
