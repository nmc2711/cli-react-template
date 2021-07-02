import React from 'react';

import './style.scss';
import BasicImg from './basic-image.png';
import LogoSvg from './logo.svg';
import { ClickCounter } from './components/ClickCounter';

export const App = () => {
  const test = '123';
  return (
    <>
      <h1>
        Yes, React 타입스크립트 와 빠른 웹팩 개발환경 세팅을 위한 보일러플레이트
        {test}
        <br />
        환경 - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={BasicImg} alt="기본 이미지" width="300" height="200" />
      <img src={LogoSvg} alt="SVG 기본 이미지" width="300" height="200" />
      <ClickCounter />
    </>
  );
};
