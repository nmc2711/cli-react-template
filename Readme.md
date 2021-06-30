### boilerplate

--- 순서도

1. root element가 있는 src/index.html 작성

2. yarn add react react-dom 리액트 라이브러리 설치

3. yarn add -D typescript @types/react @types/react-dom .. devDependencies 타입스크립트와 react types모듈들을 설치

4. yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript ... jsx , tsx 등 기타 문법들을 js로 컴파일해주는 바벨 플러그인 설치

5. yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin ... code build tool webpack plugin 설치

6. yarn add -D babel-loader ... 비 자바스크립트 파일을 웹팩이 이해하게끔 변경해야하는데 로더가 그런 역할

7. yarn add -D css-loader style-loader ... 비 자바스크립트 파일중 css/style을 컴파일하는 로더 설치

8. declarion.d.ts img/svg 모듈에 대한 전역 타입 지정

9. webpack 컴파일러 단계별 분리 dev,pr,common // (build test) cd build npx serve 기대되는 프로덕트 파일 테스트가능 // prod 와 dev 의 번들파일크기 차이 확인가능

10. yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh ... 개발중인 프로덕트에 대한 코드동기변화에도 현재 react 스테이트 유지를 도와주는 helper

11. yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin ...협업간 코드규칙에 대한 공통화와 정밀화를 위해 eslint를 통한 엄격한 검사시스템 구축 이와 같은 플러그인 설치와 eslintrc작성 사용자설정에 따른 vscode setting eslint를 활성화 해준다.

12. yarn add -D prettier eslint-plugin-prettier eslint-config-prettier 또한 pettier를 eslint위에 얹어 자동 포매팅을 통한 코드정리 효과를 넣자.
    이것역시 필요한 옵션을 prettierrc를 작성해 커스터마이징 할수있다.

13. 코드규칙에 대한 설정역시 pakage.json "lint", "format" 빌드명령어로 각각 eslint,prettier 모듈로 접근해 수정경로를 설정후 전체적인 검사 및 수정을 일괄적으로 할수있다.
