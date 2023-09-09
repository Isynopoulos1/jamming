import styled from "styled-components";
import { colors, fonts } from "../../styles/index";

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 6 rem;
  margin-bottom: 6rem;
  font-family: ${fonts.font1};
`;

export const SearchInput = styled.input`
  width: 300px;
  justify-content: center;
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
export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  color: #1ed760;
  margin-bottom: 1rem;
  pading-top: 1 rem;
`;
