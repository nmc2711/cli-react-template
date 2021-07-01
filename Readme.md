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
   그 거대한 노드안에 있는 객체속에서 우리 Root속 pakage.json이라는 리모컨을 통해 작은 웹서버로 우리의 작업물을 보게됩니다.
   srcipt option중 "start"를 이용해 우리의 작은 웹서버를 켜보도록 해보죠.

8.
9. root element가 있는 src/index.html 작성
10. declarion.d.ts img/svg 모듈에 대한 전역 타입 지정
11. webpack 컴파일러 단계별 분리 dev,pr,common // (build test) cd build npx serve 기대되는 프로덕트 파일 테스트가능 // prod 와 dev 의 번들파일크기 차이 확인가능
12. 13. 코드규칙에 대한 설정역시 pakage.json "lint", "format" 빌드명령어로 각각 eslint,prettier 모듈로 접근해 수정경로를 설정후 전체적인 검사 및 수정을 일괄적으로 할수있다.
