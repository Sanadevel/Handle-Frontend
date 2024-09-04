import styled from "styled-components";

interface wordleBlankInterface {
  wordleColor?: string;
}

export const WordleBlanks = styled.div`
  width: 60em;
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
`;

export const WordleBlank = styled.div<wordleBlankInterface>`
  font-size: 1.5em;
  width: 2.5em;
  height: 2.5em;
  border: 1px solid #fff;
  line-height: 2.5em;
  font-family: Pretendard-Regular;
  border-radius: 0.5em;
  text-align: center;
  margin-left: 0.125rem;
  margin-right: 0.125rem;

  &.O {
    background-color: #d1b036;
  }
  &.OO {
    background-color: #6aaa64;
  }
`;
