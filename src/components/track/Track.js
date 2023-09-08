import React from "react";

//IMPORT COMPONENTS
import Button from "../button/Button";

//IMPORT STYLES
import { TrackContainer, Cover, TrackName } from "./Track.styles";

const Track = ({ track }) => {
  // VARIABLES AND HOOKS
  const image = track?.album?.images?.[0]?.url;
  console.log(track);
  // HANDLE FUNCTIONS
  const handleClick = (e) => {
    console.log(track);
    // CALL BACKEND FUNCTION THAT WILL SAVE THIS SPECIFIC TRACK INTO A PLAYLIST
    // YOU WILL NEED TO INJECT 2 parameters that are the playingid and the trackid
    return;
  };

  //MAIN RENDER
  return (
    <TrackContainer>
      <Cover src={image} alt="cover" />
      <TrackName>{track?.name}</TrackName>
      <Button label="+" onClick={handleClick} />
    </TrackContainer>
  );
};

export default Track;
