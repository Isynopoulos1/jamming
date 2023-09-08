import styled from "styled-components";
import { fonts } from "../../styles/index";

export const TrackContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #161616;
  color: white;
  font-family: ${fonts.font1};
`;

export const Cover = styled.img`
  display: flex;
  width: 100px;
`;
export const TrackName = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
