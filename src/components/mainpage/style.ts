import styled from "styled-components";

export const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const InputText = styled.input`
  width: 50rem;
  height: 2.5rem;
  font-size: 1.25em;
  font-family: "Pretendard-Regular";
  text-align: center;
  border: none;
  border-bottom: 1px solid #fff;
  background: none;
  outline: none;
  color: #fff;
`;

export const Button = styled.button`
  width: 8rem;
  height: 2.5rem;
  font-size: 1.25em;
  background-color: #000;
  font-family: "Pretendard-Regular";
  border: 1px solid #fff;
  color: #fff;
  margin-top: 1rem;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background-color: var(--color-darkGray);
  }
`;
