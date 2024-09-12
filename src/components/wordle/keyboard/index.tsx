import { keyBoardWords } from "../../../stores/constants/keyBoardConstant";
import * as S from "./style";

interface keyboardInterface {
  changeWordle: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Keyboard = ({ changeWordle }: keyboardInterface) => {
  return (
    <S.KeyBoard>
      {keyBoardWords.map((line: Array<string>) => (
        <S.WordleLine>
          {line.map((key: string) => (
            <S.WordleBlank type="button" onClick={changeWordle} value={key} />
          ))}
        </S.WordleLine>
      ))}
    </S.KeyBoard>
  );
};

export default Keyboard;
