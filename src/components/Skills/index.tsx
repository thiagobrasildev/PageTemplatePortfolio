import { Bars } from "../Bars";
import * as S from "./styles";

export const Skills = () => {
  return (
    <S.Container>
      <S.Text>Adobe Photoshop</S.Text>
      <Bars sizeProgress={90} />
      <S.Text>Photography</S.Text>
      <Bars sizeProgress={80} />
      <S.Text>Illustrator</S.Text>
      <Bars sizeProgress={75} />
      <S.Text>Media</S.Text>
      <Bars sizeProgress={50} />
    </S.Container>
  );
};
