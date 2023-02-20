import { FaSuitcase } from "react-icons/fa";
import { CardInfo } from "../CardInfo";
import { Title } from "../Title";
import * as S from "./styles";

export const Experience = () => {
  return (
    <S.Container>
      <Title
        icon={<FaSuitcase size={36} />}
        text="Work Experience"
        fontSize={30}
        fontWeight="normal"
      />
      <CardInfo
        title="Front End Developer / w3schools.com"
        time="Jan 2015 - "
        current="Current"
        text="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
      />
      <CardInfo
        title="Web Developer / something.com"
        time="Mar 2012 - Dec 2014"
        text="Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
      />
      <CardInfo
        title="Graphic Designer / designsomething.com"
        time="Jun 2010 - Mar 2012"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </S.Container>
  );
};
