import React, { useState, useEffect } from "react";
import { fetchDataFromAPI } from "./api/fetchDataFromAPI";

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

  //LIFECYCLE
  // useEffect(() => {
  // const handleData = async () => {
  //   const res = await fetchDataFromAPI(search);
  //   setTracks(res?.tracks?.items);
  // };
  //   handleData();
  // }, []);

  // HANDLE FUNCTIONS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetchDataFromAPI(search);
    return setTracks(res?.tracks?.items);
  };

  console.log("STATE tracks", tracks);

  //MAIN RENDER
  return (
    <MainWrapper>
      <Logo>
        <h1>Jamming</h1>
      </Logo>
      <SearchBar handleSubmit={handleSubmit} setSearch={setSearch} />
      <Playlist tracks={tracks} />
    </MainWrapper>
  );
};

export default App;
