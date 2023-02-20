import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Text = styled.div`
  font-size: 15px;
  color: #757575;
`;

type SizeProps = {
  size: number;
};

export const Bars = styled.div<SizeProps>`
  width: 100%;
  height: 24px;
  background-color: #eee;
  border-radius: 16px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: ${(props) => props.size}%;
    height: 100%;
    background-color: #009688;
    border-radius: 16px;
  }
`;
