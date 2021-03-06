const { merge } = require('webpack-merge');
// * merge 여러 개의 웹팩 설정 파일을 하나로 병합해주는 라이브러리리
// 웹팩 머지를 효율적으로 사용하는 방법은 개발용과 배포용 설정 파일에서 공통으로 쓰이는 부분을 먼저 분리.
// 파일 체계는 common/dev/prod 구성하였다.
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  // envVars는 pakage.json을 통해 입력되는 명령어에따른 실행할 config파일을 고릅니다.(package.json 확인!)
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  // pk에서 env의 서치값으로 배포 로케이션 지정
  const config = merge(commonConfig, envConfig);

  return config;
};
