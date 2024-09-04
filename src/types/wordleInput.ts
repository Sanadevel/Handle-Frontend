import { returnArrType } from "./checkWordle";

export interface wordleInputTypeArr {
  arr: Array<wordType>;
  curIdx: number;
  result?: returnArrType;
}

export type wordType = string | "";
