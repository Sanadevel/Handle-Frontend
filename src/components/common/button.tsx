import styled from "styled-components";

interface ButtonInterface {
  children: string;
  width?: number;
  height?: number;
  fontSize?: number;
  color?: string;
  marginTop?: number;
  onClick?: Function;
}

export const ButtonStyle = styled.button<ButtonInterface>`
  width: ${(props) => props.width || 5}rem;
  height: ${(props) => props.height || 2}rem;
  font-size: ${(props) => props.fontSize || 1.25}em;
  background-color: #000;
  font-family: "Pretendard-Regular";
  border: 1px solid #fff;
  color: ${(props) => props.color || "#fff"};
  margin-top: ${(props) => props.marginTop || 0}rem;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background-color: #696969;
  }
`;

const Button = ({
  children,
  fontSize,
  height,
  width,
  color,
  marginTop,
  onClick,
}: ButtonInterface) => {
  return (
    <ButtonStyle
      fontSize={fontSize}
      height={height}
      width={width}
      color={color}
      marginTop={marginTop}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
