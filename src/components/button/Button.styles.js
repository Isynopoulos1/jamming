import styled from "styled-components";
import { colors, fonts, buttons } from "../../styles/index";

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SaveBtn = styled.button`
  width: ${buttons.small};
  padding: 10px 10px;
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
