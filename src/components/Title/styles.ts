import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin: 18px 0px;
`;

export const Icon = styled.div`
  color: #009688;
`;

type propsType = {
  fontSize?: number;
  fontWeight: "bold" | "normal";
};

export const Text = styled.div<propsType>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
  color: #757575;
  font-weight: ${(props) => props.fontWeight};
`;
