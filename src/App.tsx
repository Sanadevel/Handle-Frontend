import { useEffect, useState } from "react";
import WordleBlank from "./components/wordleBlank";
import { wordleInputTypeArr } from "./types/wordleInput";
import Keyboard from "./components/keyboard";
import hangul from "hangul-js";
import { exCorrect } from "./stores/constants/exampleData";
import { checkWordle } from "./utils/checkWordle";

function App() {
  const [inputWordle, setInputWordle] = useState<wordleInputTypeArr>({
    arr: [],
    curIdx: 0,
  });
  const correctAwnser: wordleInputTypeArr = {
    arr: hangul.d(exCorrect),
    curIdx: 0,
  };
  /* const [awnserWordle, setAwnserWordle] = useState<awnserWordleType>({
    arr: [],
  }); */
  const wordleLength = inputWordle.arr.length;

  useEffect(() => {
    setInputWordle({
      arr: new Array(correctAwnser.arr.length).fill(""),
      curIdx: 0,
    });
  }, [correctAwnser.arr.length]);

  const changeWordle = (keyBoard: any) => {
    const inputValue = keyBoard.target.value;
    let newArr = inputWordle.arr;

    if (inputValue === "입력" && inputWordle.curIdx === wordleLength) {
      const _res = checkWordle({
        awnser: inputWordle.arr,
        correct: correctAwnser.arr,
      });
      console.log(_res);
    } else if (inputValue === "지움" && inputWordle.curIdx > 0) {
      newArr[inputWordle.curIdx - 1] = "";
      setInputWordle({ arr: newArr, curIdx: inputWordle.curIdx - 1 });
    } else if (
      inputWordle.curIdx < wordleLength &&
      !(inputValue === "지움") &&
      !(inputValue === "입력")
    ) {
      newArr[inputWordle.curIdx] = inputValue;
      setInputWordle({ arr: newArr, curIdx: inputWordle.curIdx + 1 });
    }
  };

  return (
    <div className="App">
      <WordleBlank inputWordle={correctAwnser} />
      <WordleBlank inputWordle={inputWordle} />
      <Keyboard changeWordle={changeWordle} />
      <div>arr : {inputWordle?.arr.length}</div>
    </div>
  );
}

export default App;
