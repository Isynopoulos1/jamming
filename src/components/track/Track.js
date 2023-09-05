import React from "react";

//IMPORT STYLES
import { TrackContainer, Cover } from "./Track.styles";

const Track = ({ track }) => {
  const image = track?.data?.albumOfTrack?.coverArt?.sources?.[0]?.url;
  console.log(image);

  //MAIN RENDER
  return (
    <TrackContainer>
      {/* TODO YOU WILL ADD THE TRACK NAME */}
      <div>{track?.name}</div>
      {/* TODO YOU WILL ADD THE ARTIST NAME  AND TRACK COVER*/}
      <Cover src={image} alt="cover" />
      <div>{track?.artist}</div>
      <div>{track?.album}</div>

      {/* TODO BUTTON TRACK ACTION OR WILL GO HERE */}
    </TrackContainer>
  );
};

export default Track;
