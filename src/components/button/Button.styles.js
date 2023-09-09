import styled from "styled-components";
import { colors, fonts, buttons } from "../../styles/index";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  width: ${buttons.small};
  padding: 10px 10px;
  align-items: center;
  border-radius: 50px;
  outline: none;
  border: 1px solid ${colors.green};
  background-color: black;
  color: ${colors.green};
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-family: ${fonts.font1};

  &:hover {
    background-color: ${colors.green};
    color: white;
  }
`;
