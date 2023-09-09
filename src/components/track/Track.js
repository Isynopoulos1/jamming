import React from "react";

//IMPORT COMPONENTS
import Button from "../button/Button";
import { saveTrack } from "../../api/save";
//IMPORT STYLES
import {
  MainContainer,
  Cover,
  TrackName,
  BtnWrapper,
  AlbumWrapper,
  BtnMainContainer,
} from "./Track.styles";

const Track = ({ track, token }) => {
  const image = track?.album?.images?.[0]?.url;

  // HANDLE FUNCTIONS
  const handleClick = async (e) => {
    e.preventDefault();
    await saveTrack(track.id, token);
    return;
  };

  //MAIN RENDER
  return (
    <MainContainer>
      <AlbumWrapper>
        <Cover src={image} alt="cover" />
        <TrackName>{track?.name}</TrackName>
      </AlbumWrapper>
      <BtnMainContainer>
        <BtnWrapper>
          <Button label="+" onClick={handleClick} />
        </BtnWrapper>
      </BtnMainContainer>
    </MainContainer>
  );
};

export default Track;
