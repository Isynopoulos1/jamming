import React, { useState } from "react";

//IMPORT COMPONENTS
import Button from "../button/Button";
import { saveTrack } from "../../api/save";
//IMPORT STYLES
import { TrackContainer, Cover, TrackName } from "./Track.styles";

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
    <TrackContainer>
      <Cover src={image} alt="cover" />
      <TrackName>{track?.name}</TrackName>
      <Button label="+" onClick={handleClick} />
    </TrackContainer>
  );
};

export default Track;
