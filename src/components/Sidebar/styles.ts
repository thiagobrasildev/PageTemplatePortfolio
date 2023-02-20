import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
  position: relative;

  h1 {
    position: absolute;
    padding-left: 15px;
    margin-bottom: 13px;
    font-size: 30px;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
`;

export const Personal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding-top: 5px;
    padding-bottom: 15px;

    svg {
      color: #009688;
    }

    p {
      font-size: 15px;
      color: #757575;
    }
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Languages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
