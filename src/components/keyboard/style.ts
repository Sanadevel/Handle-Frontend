import styled from "styled-components";

export const KeyBoard = styled.div`
  width: 60em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WordleLine = styled.div`
  display: flex;
`;

export const WordleBlank = styled.input`
  font-size: 1.5em;
  width: 2em;
  height: 2.5em;
  border: 1px solid #fff;
  line-height: 2.5em;
  font-family: Pretendard-Regular;
  border-radius: 0.5em;
  text-align: center;
  margin: 0.3rem;
  background: none;
  cursor: pointer;
  color: #fff;
`;
