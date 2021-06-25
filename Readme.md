### boilerplate

--- 순서도

1. root element가 있는 src/index.html 작성

2. yarn add react react-dom 리액트 라이브러리 설치

3. yarn add -D typescript @types/react @types/react-dom .. devDependencies 타입스크립트와 react types모듈들을 설치

4. yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript ... jsx , tsx 등 기타 문법들을 js로 컴파일해주는 바벨 플러그인 설치

5. yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin ... code build tool webpack plugin 설치

6. yarn add -D babel-loader ... 비 자바스크립트 파일을 웹팩이 이해하게끔 변경해야하는데 로더가 그런 역할
