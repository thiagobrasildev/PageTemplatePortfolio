import { Bars } from "../Bars";
import * as S from "./styles";

export const Languages = () => {
  return (
    <S.Container>
      <S.Text>English</S.Text>
      <S.Bars size={100}></S.Bars>
      <S.Text>Spanish</S.Text>
      <S.Bars size={50}></S.Bars>
      <S.Text>German</S.Text>
      <S.Bars size={20}></S.Bars>
    </S.Container>
  );
};
