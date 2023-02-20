import { FaCalendarAlt } from "react-icons/fa";
import * as S from "./styles";

type Props = {
  title: string;
  text: string;
  time: string;
  current?: string;
};

export const CardInfo = ({ title, text, time, current }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.TimeArea>
        <FaCalendarAlt size={16} />
        <span>
          {time}
          {current ? <b>{current}</b> : null}
        </span>
      </S.TimeArea>
      <S.Information>{text}</S.Information>
    </S.Container>
  );
};
