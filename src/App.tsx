import { useEffect, useRef, useState } from "react";
import WordleBlank from "./components/wordleBlank";
import { wordleInputTypeArr } from "./types/wordleInput";
import Keyboard from "./components/keyboard";
import hangul from "hangul-js";
import { exCorrect } from "./stores/constants/exampleData";
import { checkWordle } from "./utils/checkWordle";
import * as S from "./App.style";
import { returnArrType } from "./types/checkWordle";

function App() {
  const [inputWordle, setInputWordle] = useState<wordleInputTypeArr>({
    arr: [],
    curIdx: 0,
  });
  const [prevInputWordle, setPrevInputWordle] = useState<wordleInputTypeArr[]>(
    []
  );
  const [correctAwnser, setCorrectAwnser] = useState<wordleInputTypeArr>({
    arr: hangul.d(exCorrect),
    curIdx: 0,
  });
  const [completeWordle, setCompleteWordle] = useState(false);
  const [failedWordle, setFailedWordle] = useState(false);
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
    if (!completeWordle || !failedWordle) {
      const inputValue = keyBoard.target.value;
      let newArr = inputWordle.arr;
      const allRightAwnser: returnArrType = new Array(newArr.length).fill("OO");

      if (inputValue === "입력" && inputWordle.curIdx === wordleLength) {
        const _res = checkWordle({
          awnser: newArr,
          correct: correctAwnser.arr,
        });
        if (JSON.stringify(_res) === JSON.stringify(allRightAwnser)) {
          setInputWordle({
            arr: newArr,
            curIdx: 0,
            result: _res,
          });
          setCompleteWordle(true);
        } else if (prevInputWordle.length >= 7) {
          if (
            window.confirm(
              "모든 기회를 사용하셨습니다. \n 다시 플레이 하시겠습니까?(제시어는 이전과 동일합니다.)"
            )
          ) {
            setPrevInputWordle([]);
            setInputWordle({
              arr: [],
              curIdx: 0,
            });
          } else {
            setInputWordle({
              arr: inputWordle.arr,
              curIdx: 0,
              result: _res,
            });
            setFailedWordle(true);
          }
        } else {
          setPrevInputWordle([
            ...prevInputWordle,
            {
              arr: [...newArr],
              curIdx: inputWordle.curIdx,
              result: _res,
            },
          ]);
          setInputWordle({
            arr: inputWordle.arr.fill(""),
            curIdx: 0,
          });
        }
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
    }
  };

  return (
    <>
      <S.SCS className={completeWordle ? "complete" : "notComp"}>
        <S.Title>Shin Chang Sub Wordle</S.Title>
        <img src={`${process.env.PUBLIC_URL}/images/SCS.webp`} alt="SCS" />
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/cYRkZmBuDqI?si=bMxoVT9YRpasA0eQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </S.SCS>
      <S.App className={completeWordle ? "complete" : ""}>
        {/* <input
        type="text"
        value={changeWord}
        onChange={(e) => setChangeWord(e.target.value.replaceAll(" ", ""))}
      /> */}
        {/* <button
          onClick={() => {
            setCorrectAwnser({ arr: hangul.d(changeWord), curIdx: 0 });
            setChangeWord("");
            }}
            >
            변경
            </button> */}
        {/*         <WordleBlank inputWordle={correctAwnser} />
         */}
        <S.Title>SCS Wordle</S.Title>
        <div>
          {prevInputWordle.map((wordle) => {
            return <WordleBlank inputWordle={wordle} />;
          })}
          <WordleBlank inputWordle={inputWordle} />
        </div>
        <Keyboard changeWordle={changeWordle} />
        {/* <div>arr : {wordleLength}</div>
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
        </button> */}
      </S.App>
    </>
  );
}

export default App;
