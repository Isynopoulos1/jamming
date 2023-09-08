import React from "react";

//IMPORT STYLES
import { TracklistContainer } from "./Tracklist.styles";

//IMPORT COMPONENTS
import Track from "../track/Track";

const Tracklist = ({ tracks, token }) => {
  return (
    <TracklistContainer>
      {tracks?.map((track, key) => (
        <Track key={key} track={track} token={token} />
      ))}
    </TracklistContainer>
  );
};

export default Tracklist;
