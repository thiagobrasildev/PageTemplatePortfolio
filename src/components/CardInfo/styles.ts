import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 20px 10px;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  padding: 8px 0px;
`;

export const TimeArea = styled.div`
  color: #009688;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 0px;

  svg {
    color: #009688;
    font-weight: 400;
    margin-right: 20px;
  }

  span {
    b {
      background-color: #009688;
      color: #fff;
      font-weight: 400;
      padding: 2px 8px;
      border-radius: 5px;
    }
  }
`;

export const Information = styled.p`
  font-size: 15px;
  text-align: justify;
  line-height: 22px;
  padding: 8px 0px;
`;
