import './style.scss';
import BasicImg from './basic-image.png';
import LogoSvg from './logo.svg';
import { ClickCounter } from './components/ClickCounter';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from './store';

import styled from 'styled-components';

export const App = () => {
  const { name, age } = useSelector(({ user }: RootState) => user);
  const dispatch = useDispatch<Dispatch>();
  const test = '123';
  return (
    <>
      <h1>
        Yes, React 타입스크립트 와 빠른 웹팩 개발환경 세팅을 위한 보일러플레이트
        {test}
        <br />
        환경 - {process.env.NODE_ENV} {process.env.name} <br />
        리덕스 테스트 이름: {name}
        <br />
        <ClickBtn onClick={() => dispatch.user.setState({ age: age + 1 })}>
          나이증가
        </ClickBtn>
        리덕스 테스트 나이: {age}
        <br />
      </h1>
      <img src={BasicImg} alt="기본 이미지" width="300" height="200" />
      <img src={LogoSvg} alt="SVG 기본 이미지" width="300" height="200" />
      <ClickCounter />
    </>
  );
};

const ClickBtn = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
`;
