import { wordleInputTypeArr } from "../../types/wordleInput";
import * as S from "./style";

const WordleBlank = ({ inputWordle }: { inputWordle: wordleInputTypeArr }) => {
  return (
    <S.WordleBlanks>
      {inputWordle?.arr.map((word: any) => {
        return <S.WordleBlank>{word}</S.WordleBlank>;
      })}
    </S.WordleBlanks>
  );
};

export default WordleBlank;
