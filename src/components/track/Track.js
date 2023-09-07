import React from "react";

//IMPORT COMPONENTS
import Button from "../button/Button";

//IMPORT STYLES
import { TrackContainer, Cover } from "./Track.styles";

const Track = ({ track }) => {
  // VARIABLES AND HOOKS
  const image = track?.data?.albumOfTrack?.coverArt?.sources?.[0]?.url;

  // HANDLE FUNCTIONS
  const handleClick = (e) => {
    console.log(track?.data);
    return;
  };

  //MAIN RENDER
  return (
    <TrackContainer>
      {/* TODO YOU WILL ADD THE TRACK NAME */}
      <div>{track?.name}</div>
      <Cover src={image} alt="cover" />
      <div>{track?.artist}</div>
      <div>{track?.album}</div>

      <Button label="+" onClick={handleClick} />
    </TrackContainer>
  );
};

export default Track;
