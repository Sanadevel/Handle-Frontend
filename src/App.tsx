import Wordle from "./components/wordle";
import * as S from "./App.style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage";
import Room from "./components/room";
import Exception from "./components/exception";

function App() {
  return (
    <S.App className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path=":roomId" element={<Room />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="*" element={<Exception />} />
        </Routes>
      </BrowserRouter>
    </S.App>
  );
}

export default App;
