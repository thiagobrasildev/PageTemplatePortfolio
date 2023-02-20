import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaSnapchat,
  FaTwitter,
} from "react-icons/fa";
import * as S from "./AppStyles";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <>
      <S.ContainerMain>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Experience />
          <Education />
        </div>
      </S.ContainerMain>
      <S.Footer>
        <p>Find me on social media.</p>
        <div className="icons">
          <FaFacebookSquare />
          <FaInstagram />
          <FaSnapchat />
          <FaPinterestP />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
        <p>
          Powered by <a href="#">w3.css</a>
        </p>
      </S.Footer>
    </>
  );
};
