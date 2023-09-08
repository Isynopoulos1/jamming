import React, { useState, useEffect } from "react";
import { getTracks } from "./api/spotify";

// IMPORT API
import { authenticate } from "./api/auth";

//IMPORT COMPONENTS
import Playlist from "./components/playlist/Playlist";
import SearchBar from "./components/searchBar/SearchBar";

//IMPORT STYLES
import "./styles/reset.css";
import { Logo, MainWrapper } from "./App.styles";

//APP
const App = () => {
  //STATES
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");

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
    return setTracks(res?.tracks?.items);
  };

  //MAIN RENDER
  return (
    <MainWrapper>
      <Logo>
        <h1>Jamming</h1>
      </Logo>
      <SearchBar handleSubmit={handleSubmit} setSearch={setSearch} />
      <Playlist tracks={tracks} token={token} />
    </MainWrapper>
  );
};

export default App;
