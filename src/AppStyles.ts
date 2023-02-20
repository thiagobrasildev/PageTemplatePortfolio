import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  padding: 15px;
  width: 100%;
  background-color: #f0f0f0;
  gap: 15px;
  overflow: hidden;

  .sidebar {
    display: flex;
    width: 32.5%;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 67.5%;
    gap: 15px;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sidebar {
      width: 100%;
    }

    .content {
      width: 100%;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #009688;
  padding: 16px;
  color: #fff;
  flex-direction: column;
  gap: 20px;
  font-size: 15px;

  .icons {
    display: flex;
    gap: 2px;

    svg {
      &:hover {
        opacity: 0.5;
      }
    }
  }

  a {
    color: #fff;
  }
`;
