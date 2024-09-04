import { checkWordleInterface, returnArrType } from "../types/checkWordle";

export const checkWordle = ({ awnser, correct }: checkWordleInterface) => {
  const correctArr = [...correct];
  const returnArr: returnArrType = new Array(awnser.length).fill("X");
  if (JSON.stringify(awnser) === JSON.stringify(correctArr)) {
    returnArr.fill("OO");
  } else {
    for (let i = 0; i < awnser.length; i++) {
      if (awnser[i] === correctArr[i]) {
        correctArr.splice(i, 1, "OO");
        returnArr[i] = "OO";
      }
    }
    for (let i = 0; i < awnser.length; i++) {
      if (returnArr[i] !== "OO") {
        const oIndex = correctArr.findIndex((element) => awnser[i] === element);
        if (oIndex !== -1) {
          correctArr.splice(oIndex, 1);
          returnArr[i] = "O";
        }
      }
    }
  }
  return returnArr;
};
