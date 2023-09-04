import React, { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../../api/fetchDataFromAPI";

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
  return <div>playlist</div>;
};

export default Playlist;
