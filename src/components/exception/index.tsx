import { useNavigate } from "react-router-dom";
import Button from "../common/button";

const Exception = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      나가 ㅋㅋ 병신아
      <Button fontSize={1} width={8} height={2} onClick={goBack}>
        이전 페이지로
      </Button>
      <Button fontSize={1} width={8} height={2} onClick={goBack}>
        메인 페이지로
      </Button>
    </div>
  );
};

export default Exception;
