import * as S from "./styles";

type PropsType = {
  icon: React.ReactNode;
  text: string;
  fontSize?: number;
  fontWeight: "bold" | "normal";
};

export const Title = ({ icon, text, fontSize, fontWeight }: PropsType) => {
  return (
    <S.Container>
      <S.Icon>{icon}</S.Icon>
      <S.Text fontSize={fontSize} fontWeight={fontWeight}>
        {text}
      </S.Text>
    </S.Container>
  );
};
