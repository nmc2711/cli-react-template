import "./style.css";
import BasicImg from "./basic-image.png";
import LogoSvg from "./logo.svg";

export const App = () => {
  return (
    <>
      <h1>
        Yes, React 타입스크립트 와 빠른 웹팩 개발환경 세팅을 위한 보일러플레이트
      </h1>
      <img src={BasicImg} alt="기본 이미지" width="300" height="200" />
      <img src={LogoSvg} alt="SVG 기본 이미지" width="300" height="200" />
    </>
  );
};
