import React, { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../../api/fetchDataFromAPI";

//IMPORT COMPONENTS
import SaveButton from "../saveButton/SaveButton";

//IMPORT STYLES
import { PlaylistContainer, SaveBtn } from "./Playlist.styles";

const Playlist = () => {
  // STATES
  const [playlist, setPlaylist] = useState(null);

  // LIFECYCLE
  useEffect(async () => {
    const data = await fetchDataFromAPI();
    setPlaylist(data?.playlists?.items);
  }, []);

  console.log(playlist);
  // MAIN RENDER

  return (
    <PlaylistContainer>
      <SaveButton />
    </PlaylistContainer>
  );
  // TODO ADD A TRACKLIST COMPONENT
};

export default Playlist;
