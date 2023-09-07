import React from "react";

//IMPORT STYLES
import { TracklistContainer } from "./Tracklist.styles";

//IMPORT COMPONENTS
import Track from "../track/Track";

const Tracklist = ({ tracks }) => {
  return (
    <TracklistContainer>
      {/* TODO YOU WILL ADD A MAP METHOD TO RENDERS A SET OF TRACK COMPONENTS */}
      {tracks?.map((track, item) => (
        <Track key={item} track={track} />
      ))}
    </TracklistContainer>
  );
};

export default Tracklist;
