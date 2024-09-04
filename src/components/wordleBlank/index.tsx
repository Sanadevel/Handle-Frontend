import { wordleInputTypeArr } from "../../types/wordleInput";
import * as S from "./style";

const WordleBlank = ({ inputWordle }: { inputWordle: wordleInputTypeArr }) => {
  return (
    <S.WordleBlanks>
      {inputWordle?.arr.map((word: any, index: number) => {
        return (
          <S.WordleBlank
            className={inputWordle.result ? inputWordle.result[index] : ""}
          >
            {word}
          </S.WordleBlank>
        );
      })}
    </S.WordleBlanks>
  );
};

export default WordleBlank;
