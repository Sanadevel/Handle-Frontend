import { useEffect, useRef, useState } from "react";
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
  const [correctAwnser, setCorrectAwnser] = useState<wordleInputTypeArr>({
    arr: hangul.d(exCorrect),
    curIdx: 0,
  });
  const [changeWord, setChangeWord] = useState("");
  const wordleLength = inputWordle.arr.length;
  const ref = useRef(null);

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
        awnser: newArr,
        correct: correctAwnser.arr,
      });
      setInputWordle({
        arr: newArr,
        curIdx: inputWordle.curIdx,
        result: _res,
      });
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
      <input
        type="text"
        value={changeWord}
        onChange={(e) => setChangeWord(e.target.value.replaceAll(" ", ""))}
      />
      <div ref={ref} onKeyDown={(e) => console.log(e.key)}>
        <button
          onClick={() => {
            setCorrectAwnser({ arr: hangul.d(changeWord), curIdx: 0 });
            setChangeWord("");
          }}
        >
          변경
        </button>
        <WordleBlank inputWordle={correctAwnser} />
        <WordleBlank inputWordle={inputWordle} />
        <Keyboard changeWordle={changeWordle} />
        <div>arr : {wordleLength}</div>
        <div>index : {inputWordle?.curIdx}</div>
        <input
          type="text"
          onChange={(e) => {
            setInputWordle({
              arr: hangul.d(e.target.value),
              curIdx: hangul.d(e.target.value).length,
            });
          }}
        />
        <button
          onClick={() => {
            setInputWordle({
              arr: new Array(correctAwnser.arr.length).fill(""),
              curIdx: 0,
            });
          }}
        >
          초기화
        </button>
      </div>
    </div>
  );
}

export default App;
