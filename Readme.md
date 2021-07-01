# Typescript & React Quick Boilerplate

#### Author : FeDev.황상한

### 모듈설치에 대한 정리

!! 세팅환경에 맞는 installation 사용해주세요.<br />
!! 개발환경에만 필요한 모듈들 즉 devDependencies 넣을 모듈들은 -D로 사전표기할게요.<br />

- (리액트 코어 라이브러리들을 설치)

```
  yarn add react react-dom
```

- (타입스크립트와 리액트 타입들을 설치)

```
  yarn add -D typescript @types/react @types/react-dom
```

- (jsx/tsx 등 비자바스크립트 소스들을 JS로 컴파일 해주는 babel 플러그인을 설치)

```
  yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```

- (필요한 다수의 자바스크립트 파일을 하나의 자바 스크립트 파일로 만들어 주는 것 Webpack설치)

```
  yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

- (webpack 을 통해 번들시점에 바벨로더로 비자바스크립트 파일을 컴파일 도와주는 것)

```
  yarn add -D babel-loader
```

- (비 자바스크립트 파일중 css/style을 컴파일하는 로더 설치)

```
   yarn add -D css-loader style-loader
```

- (개발중인 프로덕트에 대한 코드 변화에도 현재 React 상태변화 유지를 도와주는 helper 설치)

```
  yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

- (협업간 코드규칙에 대한 통일성 위해 eslint를 통한 엄격한 검사시스템 구축)

```
  yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- (eslint 설정에 맞춘 pettier로 코드 포맷팅 및 클리너 설치)

```
  yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```

- (husky를 git-hooks사용과 git에 대한 액션 진행시 eslint 문법 검사를 통한 사전오류 및 워닝 방지)

```
  yarn add -D husky lint-staged
```

- (전역 polyfill 모듈중 필요한 헬퍼 함수들을 build 하려는 js코드 내로 포함시캬 polyfill 이중 호출 에러 감지)

```
  yarn add -D @babel/runtime @babel/plugin-transform-runtime
```

- (build단계에서 webpack으로 번들되는 파일의 용량 크기 및 처리순서들을 시각화로 보여줄수있는 webpack-bundle-analyzer 설치)

```
  yarn add -D webpack-bundle-analyzer
```

<br />
1. root element가 있는 src/index.html 작성
2. declarion.d.ts img/svg 모듈에 대한 전역 타입 지정
3. webpack 컴파일러 단계별 분리 dev,pr,common // (build test) cd build npx serve 기대되는 프로덕트 파일 테스트가능 // prod 와 dev 의 번들파일크기 차이 확인가능
4.  13. 코드규칙에 대한 설정역시 pakage.json "lint", "format" 빌드명령어로 각각 eslint,prettier 모듈로 접근해 수정경로를 설정후 전체적인 검사 및 수정을 일괄적으로 할수있다.
