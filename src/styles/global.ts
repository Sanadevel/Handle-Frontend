import { createGlobalStyle } from "styled-components";

const colors = {
  green: "#6AAA64",
  yellow: "#D1B036",
};

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}

:root{
  background-color: #000;
  color:#fff;
  --primary-green-color : #6AAA64
  --primary-yellow-color : #D1B036
}

font-size: 16px;
`;
