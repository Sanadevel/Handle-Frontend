import Button from "../common/button";
import InputText from "../common/inputText";
import * as S from "./style";

const MainPage = () => {
  return (
    <S.MainPage>
      <S.Title>Handle.io</S.Title>
      <InputText width={30} height={2.5} placeholder="닉네임을 입력하세요" />
      <Button width={8} height={2.5} marginTop={2}>
        방 생성하기
      </Button>
    </S.MainPage>
  );
};

export default MainPage;
