import { returnArrType } from "./checkWordle";

export interface wordleInputTypeArr {
  arr: Array<wordType>;
  curIdx: number;
}

export type wordType = string | "";

export interface awnserWordleType {
  arr: Array<wordleInputTypeArr[] | returnArrType>;
}
