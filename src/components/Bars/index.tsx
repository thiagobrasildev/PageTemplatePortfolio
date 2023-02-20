import * as S from "./styles";

type PropsType = {
  sizeProgress: number;
};

export const Bars = ({ sizeProgress }: PropsType) => {
  return (
    <S.Container>
      <S.Progress sizeBar={sizeProgress}>
        <span>{sizeProgress}%</span>
      </S.Progress>
    </S.Container>
  );
};
