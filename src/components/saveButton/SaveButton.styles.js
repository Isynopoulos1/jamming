import styled from "styled-components";
import { colors, buttons } from "../../styles/index";

export const btnContainer = styled.div`
  display: flex;
`;

export const SaveBtn = styled.button`
  width: ${buttons.small};
  color: ${colors.green};
  background-color: black;
  outline: none;
  border: 1px solid ${colors.green};
  cursor: pointer;
`;
