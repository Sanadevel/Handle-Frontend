import styled from "styled-components";

interface InputTextInterface {
  width?: number;
  height?: number;
  fontSize?: number;
  placeholder?: string;
}

export const InputTextStyle = styled.input<InputTextInterface>`
  width: ${(props) => props.width || 5}rem;
  height: ${(props) => props.height || 2}rem;
  font-size: ${(props) => props.fontSize || 1.25}em;
  font-family: "Pretendard-Regular";
  text-align: center;
  border: none;
  border-bottom: 1px solid #fff;
  background: none;
  outline: none;
  color: #fff;
`;
const InputText = ({
  fontSize,
  width,
  height,
  placeholder,
}: InputTextInterface) => {
  return (
    <InputTextStyle
      fontSize={fontSize}
      width={width}
      height={height}
      placeholder={placeholder}
    />
  );
};

export default InputText;
