import styled from "styled-components";
import { fonts } from "../../styles/index";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #161616;
  color: white;
  font-family: ${fonts.font1};
  align-items: center;
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
export const BtnMainContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  align-items: center;
`;
export const BtnWrapper = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
`;
export const AlbumWrapper = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;
`;
