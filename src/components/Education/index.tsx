import { FaCertificate } from "react-icons/fa";
import { CardInfo } from "../CardInfo";
import { Title } from "../Title";
import * as S from "./styles";

export const Education = () => {
  return (
    <S.Container>
      <Title
        icon={<FaCertificate size={36} />}
        text="Education"
        fontSize={30}
        fontWeight="normal"
      />
      <CardInfo
        title="W3Schools.com"
        time="Forever"
        text="Web Development! All I need to know in one place"
      />
      <CardInfo
        title="London Business School"
        time="2013 - 2015"
        text="Master Degree"
      />
      <CardInfo
        title="School of Coding"
        time="2010 - 2013"
        text="Bachelor Degree"
      />
    </S.Container>
  );
};
