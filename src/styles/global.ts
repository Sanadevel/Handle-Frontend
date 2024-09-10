import { createGlobalStyle } from "styled-components";

export const Palette = {
  gray_1: "#a9a9a9",
  gray_2: "#949494",
  gray_3: "#6a6a6a",
  gray_4: "#3f3f3f",
  black: "#000",
  white: "#fff",
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  &:root{
    background-color: #000;
    color:#fff;
  }

  body{
  font-family: "Pretendard-Regular";
  font-size: 16px;
  }
`;
