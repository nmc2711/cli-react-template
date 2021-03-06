import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  // color: #424242;
}

html,
body {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
  height: 100%;
  color: #424242;
}

pre,
textarea {
  font-family: sans-serif;
}
textarea {
  outline: none;
  resize: none;
}
input,
select,
option,
button {
  font: inherit;
  outline: none;
}
input[type='text'],
input[type='number'],
input[type='password'],
input[type='tel'],
input[type='url'],
input[type='search'],
textarea {
  caret-color: #000000;
}
select,
option,
button {
  cursor: pointer;
}
pre {
  white-space: pre-line;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
}
select::-ms-expand {
  display: none;
}
button:disabled {
  cursor: auto;
}
img,
svg {
  vertical-align: top;
}
ol,
ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
  &:active,
  &:hover {
    text-decoration: none;
  }
}

button {
  display: inline-block;
  box-sizing: border-box;
  background: transparent;
}
input {
  display: inline-block;
  box-sizing: border-box;
  &.txt {
    padding: 1.1rem 1.3rem;
    font-size: 1.4rem;
    border-radius: 0.4rem;
  }
}

input[type='password'] {
  font-family: sans-serif;
}

/*input number pc에서 화살표 지우기*/
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

/*IOS input reset*/
input,
textarea {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  border-radius: 0;
}

input::-ms-clear,
input::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration {
  display: none;
}

article,
aside,
dialog,
footer,
header,
section,
footer,
nav,
figure,
main {
  display: block;
}

html {
  height: 100%;
}
body {
  min-height: 100%;
}

html,
body {
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
}

img,
form,
fieldset,
svg,
iframe,
li {
  border: 0;
  vertical-align: top;
}

ul,
ol {
  list-style: none;
}

button {
  overflow: visible;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}

button:disabled {
  cursor: default;
}

button::-moz-focus-inner {
  padding: 0;
  margin: -1px;
}

input,
button,
select {
  -webkit-border-radius: 0;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  background: transparent;
  outline: none;
}

textarea {
  outline: none;
}

input,
select {
  border: 0;
  border-radius: 0;
  vertical-align: middle;
}

input::-ms-clear {
  display: none;
}

/* 크롬 인풋 자동완성 배경 컬러 설정 */
/* input:-webkit-autofill,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 50px white inset;
} */
address,
caption,
em {
  font-style: normal;
}

div:focus {
  outline: none;
}

span:focus {
  outline: none;
}

a,
a:focus,
a:hover {
  text-decoration: none;
  outline: none;
}

table {
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

pre {
  font-family: inherit;
}

textarea {
  resize: none;
}

b,
strong {
  font-weight: bold;
}

`;

export default GlobalStyle;
