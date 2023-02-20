import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 16px;
  background-color: #eee;
  border-radius: 16px;
`;

type SizeProps = {
  sizeBar: number;
};

export const Progress = styled.div<SizeProps>`
  width: ${(props) => props.sizeBar}%;
  height: 100%;
  background-color: #009688;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;

  span {
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }
`;
