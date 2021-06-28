const webpack = require("webpack");

module.exports = {
  mode: "development",
  // * cheap-module-source-map 소스맵? 배포용으로 빌드한 파일과 원본 파일을 서로 연결시켜준다.
  // 보통 서버에 배포를 할 때 성능 최적화를 위해 HTML, CSS, JS와 같은 웹 자원들을 압축한다. 그런데 압축하여 배포한 파일에서 에러가 난다면 어떻게 디버깅을 할 수 있을까?
  // 바로 소스 맵을 이용해 배포용 파일의 특정 부분이 원본 소스의 어떤 부분인지 확인한다.
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("yes-dev"),
    }),
  ],
};
