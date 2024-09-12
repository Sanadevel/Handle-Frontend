import styled, { keyframes } from "styled-components";

const fadeTitle = keyframes`
  from{
    opacity:100%;
  }to{
    opacity:0%;
  }
`;

export const App = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-family: Pretendard-Regular;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  &.complete {
    animation: ${fadeTitle};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }
`;

export const Title = styled.div`
  font-size: 5em;
`;

export const SinChangSub = keyframes`
  from{
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

export const SCS = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0%;
  text-align: center;
  font-family: Pretendard-Regular;

  img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
  }

  iframe {
    opacity: 0%;
    margin-top: 5em;
    animation: ${SinChangSub};
    animation-duration: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    animation-play-state: running;
    animation-fill-mode: forwards;
    z-index: 1;
  }

  &.notComp {
    display: none;
  }

  &.complete {
    animation: ${SinChangSub};
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
`;
