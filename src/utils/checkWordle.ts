import { checkWordleInterface, returnArrType } from "../types/checkWordle";

export const checkWordle = ({ awnser, correct }: checkWordleInterface) => {
  const returnArr: returnArrType = new Array(awnser.length).fill("X");
  if (JSON.stringify(awnser) === JSON.stringify(correct)) {
    returnArr.fill("OO");
  } else {
    for (let i = 0; i < awnser.length; i++) {
      if (awnser[i] === correct[i]) {
        correct.splice(i, 1, "OO");
        returnArr[i] = "OO";
      }
    }
    for (let i = 0; i < awnser.length; i++) {
      if (returnArr[i] !== "OO") {
        const oIndex = correct.findIndex((element) => awnser[i] === element);
        if (oIndex !== -1) {
          correct.splice(oIndex, 1);
          returnArr[i] = "O";
        }
      }
    }
  }
  return returnArr;
};
