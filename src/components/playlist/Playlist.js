import React from "react";

//IMPORT COMPONENTS

import Tracklist from "../tracklist/Tracklist";

//IMPORT STYLES
import { PlaylistContainer } from "./Playlist.styles";

const Playlist = ({ tracks }) => {
  //VERIFY IF THERE TRACKS BEFORE TO RENDERIZE BTN
  const isTrack = tracks && tracks.length > 0;

  // MAIN RENDER
  return (
    <PlaylistContainer>
      {isTrack && <Tracklist tracks={tracks} />}
    </PlaylistContainer>
  );
};

export default Playlist;
