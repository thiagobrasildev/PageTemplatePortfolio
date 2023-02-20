import * as S from "./styles";
import avatar from "../../assets/avatar_hat.jpg";
import {
  FaBriefcase,
  FaHome,
  FaEnvelope,
  FaPhoneAlt,
  FaAsterisk,
  FaGlobeAsia,
} from "react-icons/fa";
import { Title } from "../Title";
import { Skills } from "../Skills";
import { Languages } from "../Languages";

export const Sidebar = () => {
  return (
    <S.Container>
      <S.Image>
        <img src={avatar} alt="avatar" />
        <h1>Jane Doe</h1>
      </S.Image>
      <S.Infos>
        <S.Personal>
          <span>
            <FaBriefcase size={18} />
            <p>Designer</p>
          </span>
          <span>
            <FaHome size={16} />
            <p>London, UK</p>
          </span>
          <span>
            <FaEnvelope size={18} />
            <p>ex@mail.com</p>
          </span>
          <span>
            <FaPhoneAlt size={15} />
            <p>1224435534</p>
          </span>
        </S.Personal>
        <S.Skills>
          <Title
            icon={<FaAsterisk size={18} />}
            text="Skills"
            fontWeight="bold"
          />
          <Skills />
        </S.Skills>
        <S.Languages>
          <Title
            icon={<FaGlobeAsia size={18} />}
            text="Languages"
            fontWeight="bold"
          />
          <Languages />
        </S.Languages>
      </S.Infos>
    </S.Container>
  );
};
