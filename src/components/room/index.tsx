import InputText from "../common/inputText";
import * as S from "./style";

const Room = () => {
  return (
    <S.Room>
      <S.Header>1 / 5</S.Header>
      <S.UsersTab>
        <S.User>김김김김김김김김김김</S.User>
      </S.UsersTab>
      <S.Chat>
        <InputText width={120} placeholder="채팅을 입력해보세요" />
      </S.Chat>
    </S.Room>
  );
};

export default Room;
