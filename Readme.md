# Typescript & React Quick Boilerplate

#### Author : FeDev.황상한

### 필요한 라이브러리에 대한 정리

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

!\* 추가

- (scss도 사용할 수 있어야겠죠? 저희는 dev환경에서 style-loader를 사용할것이고, prod환경에서는 MiniCssExtractPlugin를 사용할거에요) <br />
  그 이유는 mini-css-extract-plugin 플러그인은 JavaScript 파일 안에서 호출되는 스타일 코드를 청크에서 파일로 추출하므로 개발 중에는
  플러그인을 사용하지 않는 것이 좋습니다. 즉, 개발이 끝난 후 배포 할 때 사용하면 좋습니다.
  개발 모드에서는 CSS를 여러 번 수정하고 DOM에 <style> 요소의 코드로 주입하는 것이 훨씬 빨리 작동하므로 "style-loader"를 사용하고, 배포 모드에서는 MiniCssExtractPlugin 하여 스타일 폴더를 생성하여 변환된 scss를 css형태로 사용합니다.
  (이하 webpack.common.js 와 webpack.prod.js 참고)

```
  yarn add -D sass sass-loader mini-css-extract-plugin
```

- 전역 상태관리 세팅으로는 redux @rematch-core 와 context api를 다뤄 볼것입니다.
  thunk없이 effect function관리 통합 state,reducer,actions관리를 할 수있습니다. tookit과 비슷하다고 할 수 있습니다.

```
  yarn add redux react-redux @rematch/core
```

- theme 와 golbalstyle 지정해봅시다. 자주 상요하며 키워드가 될수있는 style에대한 공통적인 부분을 theme로 선언하고,
  globalstyle 안에 reset 설정과 nomalize를 통해 다른 브라우저에 상이할 수 있는부분을 머지 시킵니다.
  root index.tsx에서 가져와 사용합니다.

```
  yarn add styled-components styled-normalize
```

### 프로젝트 세팅 Tip

1. 모든요소의 Root가 되는 폴더를 하나 만들어주세요.

2. npm init -y 를 입력하셔서 새로운 npm 패키지를 설정하는 package.json파일을 일단 전부 enter로 스킵하시고 만들어주세요.

3. Root폴더 바로 아래에 src 폴더와 build 폴더를 생성해줄게요.

4. src/index.html을 만들어서 !+tab을 통한 기본 html 양식과 body태그 바로아래 id가 root인 div를 하나 만들어줍니다.

5. index.html 과 같은 선상의 경로에 App.tsx를 하나만들게요, 뷰에 보여지고 싶은 내용을 입력해주세요.

6. App.tsx와 같은 선상의 경로에 index.tsx 파일을 만들고 아래와 같이 작성합니다. 작성코드를 보면 id가 root인 element아래 reactdom의 render함수를
   이용해 App컴포넌트를 넣어줍니다.

```
import ReactDOM from 'react-dom';
import { App } from './App';
ReactDOM.render(<App />, document.getElementById('root'));
```

7. 이제 작성한 App을 보기위해서는 웹서버를 구동해야됩니다. 우리모두 컴퓨터 전역으로 이미 노드를 설치했기때문에
   그 거대한 노드안에 있는 모듈 덩어리 속에서 우리 Root속 pakage.json이라는 리모컨을 통해 작은 웹서버를 기능을 선택해 우리의 작업물을 보게됩니다.
   script option중 "start"를 이용해 우리의 작은 웹서버를 켜보도록 해보죠.

8. package.json과 같은 선상의 경로에 webpack이라는 폴더를 만들고 webpack/webpack.config.js를 생성합니다.

9. webpack.config.js 자체를 모듈로써 common하게 사용할 것이기 떄문 module.export로 이제 웹팩 설정 옵션들을 작성하겠습니다.
   (이하 내용은 webpack.common.js 참고)

10. 이제 기본적인 웹팩 설정을 마쳤다면, 개발환경 과 사용자가 서비스를 이용할 산출물을 분리해주어야 겠죠.
    (즉, 미리보자면 우리든 "start" 명령어로 dev서버를 열것이며 "build" 명령어로 사용자가 이용할 프로젝트를 만들어 낼것입니다.)

11. 동일한 webpack 폴더내 webpack.dev.js 와 webpack.prod.js 따로 작성해주어 dev,production의 옵션에 차이를 줄 것입니다.
    (이하 내용은 webpack.dev.js 와 webpack.prod.js 참고)

12. 위 과정까지 하셨다면 공통적으로 사용하는 webpack.common.js를 바탕으로 webpack.config.js를 통해 개발서버와 실산출물을 만드는 작용을 분리시켜줍니다.
    (이하 내용은 webpack.config.js 참고)

13. 드디어 빌드를 시작할 준비를 끝마쳤습니다. package.json을 확인해볼까요

```
    "scripts": {
      "start": "webpack serve --config webpack/webpack.config.js --env env=dev",

      // 약속된 start 명령어로 우리는 미리 설치한 webpack 모듈을 실행시키고 serve를 통해 개발환경이라는 걸 명시한후
      // 같은 경로에 있는 webpack폴더에 접근해서 webpack.config.js에 접근합니다. 그중 env를 dev를 줌으로 이전에 분기를 시켜놓은 작용으로
      // webpack.common.js를 바탕으로한 webpack.dev.js를 실행시켜 개발환경으로 세팅한 webpack dev 환경을 실행시킵니다.

      "build": "webpack --config webpack/webpack.config.js --env env=prod",

      // 위와 내용은 같으며 prod를 산출해내며 미리 설정해놓은 analyzer을 통한 빌드환경 분석 화면을 show합니다.
       .....
    },
```

<br />
ps. https://hsh-yesreact-boilerplate.netlify.app/ <br />
배포테스트를 위해 netlify에 후딱 올려봤씁니다. (이때 analyzer를 꺼야합니다 ㅠㅠ)

<br /> 이후는 aws배포와 클라이언트 내부에서 커먼세팅을 해보려고합니다.
