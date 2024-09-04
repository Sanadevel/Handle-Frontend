import hangul from "hangul-js";
import { wordleInputTypeArr } from "../../types/wordleInput";

export const exCorrect = "신창섭";

export const dCorr: wordleInputTypeArr = {
  arr: hangul.d(exCorrect),
  curIdx: 0,
};
