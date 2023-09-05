import React, { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../../api/fetchDataFromAPI";

//IMPORT COMPONENTS
import SaveButton from "../saveButton/SaveButton";
import Tracklist from "../tracklist/Tracklist";

//IMPORT STYLES
import { PlaylistContainer } from "./Playlist.styles";

const Playlist = ({ tracks }) => {
  // MAIN RENDER
  return (
    <PlaylistContainer>
      <Tracklist tracks={tracks} />
      <SaveButton />
    </PlaylistContainer>
  );
};

export default Playlist;
