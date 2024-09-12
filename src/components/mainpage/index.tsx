import { useNavigate } from "react-router-dom";
import Button from "../common/button";
import InputText from "../common/inputText";
import * as S from "./style";
import { useState } from "react";

const MainPage = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const makeRoom = () => {
    if (nickname.length >= 3) {
      navigate(`/${Math.floor(Math.random() * 1000)}`);
    }
  };

  return (
    <S.MainPage>
      <S.Title>Handle.io</S.Title>
      <InputText
        width={30}
        height={2.5}
        placeholder="닉네임을 입력하세요"
        onChange={(e: any) => setNickname(e.target.value)}
        value={nickname}
      />
      <Button width={8} height={2.5} marginTop={2} onClick={makeRoom}>
        방 생성하기
      </Button>
    </S.MainPage>
  );
};

export default MainPage;
