import styled from "styled-components";
import { Palette } from "../../styles/global";

export const Room = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 5vh;
  border-bottom: 1px solid #fff;
`;

export const UsersTab = styled.div`
  width: 100vw;
  height: 65vh;
  border-bottom: 1px solid #fff;

  display: flex;
  justify-content: center;
`;

export const User = styled.div`
  width: 10em;
  height: 30em;
  border: 1px solid ${Palette.white};
  text-align: center;
  word-wrap: break-word;
  line-height: 30em;
`;

export const Chat = styled.div`
  height: 30vh;

  display: flex;
  flex-direction: column-reverse;
`;
