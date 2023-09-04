import styled from "styled-components";
import { colors, fonts, buttons } from "../../styles/index";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6 rem;
  margin-bottom: 6rem;
  font-family: ${fonts.font1};
`;

export const SearchInput = styled.input`
  width: 300px;
  border: 1px solid #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 1rem;
  padding: 10px 10px;
  background-color: ${colors.mediumgray};
  outline: none;
  margin-bottom: 1rem;
  color: ${colors.green};
  font-family: ${fonts.font1};
  border: 1px solid #000;

  &:hover {
    border: 1px solid ${colors.green};
  }
`;

export const SearchButton = styled.button`
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
