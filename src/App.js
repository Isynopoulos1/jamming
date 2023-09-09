import React, { useState, useEffect } from "react";
import { getTracks } from "./api/spotify";

// IMPORT API
import { authenticate } from "./api/auth";

//IMPORT COMPONENTS
import Playlist from "./components/playlist/Playlist";
import SearchBar from "./components/searchBar/SearchBar";

//IMPORT STYLES
import "./styles/reset.css";
import { MainWrapper } from "./App.styles";

//APP
const App = () => {
  //STATES
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");
  const [showPlaylist, setShowPlaylist] = useState(false);

  //LIFECYCLE
  useEffect(() => {
    const handleAuth = async () => {
      const res = await authenticate();
      // SAVE BEARER TOKEN INTO STATE
      setToken(res?.access_token);
    };
    handleAuth();
  }, []);

  // HANDLE FUNCTIONS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await getTracks(search, token);
    setTracks(res?.tracks?.items);
    setShowPlaylist(true); //MOSTRAR COMPONENTE PLAYLIST
    return;
  };

  //MAIN RENDER
  return (
    <MainWrapper>
      <SearchBar handleSubmit={handleSubmit} setSearch={setSearch} />
      {showPlaylist ? <Playlist tracks={tracks} token={token} /> : null}
    </MainWrapper>
  );
};

export default App;
