import React, { useState, useEffect } from "react";
import { fetchDataFromAPI } from "./api/fetchDataFromAPI";

//IMPORT COMPONENTS
import Playlist from "./components/playlist/Playlist";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";

//IMPORT STYLES
import "./styles/reset.css";
import { Logo, MainWrapper } from "./App.styles";

//APP
const App = () => {
  //STATES
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");

  //LIFECYCLE
  useEffect(() => {
    const handleData = async () => {
      const res = await fetchDataFromAPI(search);
      setTracks(res?.tracks?.items);
    };

    handleData();
  }, [search]);

  console.log("STATE tracks", tracks);
  // HANDLE FUNCTIONS

  //MAIN RENDER
  return (
    <MainWrapper>
      <Logo>
        <h1>Jamming</h1>
      </Logo>
      <SearchBar setSearch={setSearch} />
      <SearchResults searchResults={[]} />
      <Playlist tracks={tracks} />
    </MainWrapper>
  );
};

export default App;
