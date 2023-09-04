import React from "react";

//IMPORT COMPONENTS
import Playlist from "./components/playlist/Playlist";
import SaveButton from "./components/saveButton/SaveButton";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Track from "./components/track/Track";
import TrackList from "./components/tracklist/Tracklist";

//IMPORT STYLES
import "./styles/reset.css";
import { Logo, MainWrapper } from "./App.styles";

//APP
const App = () => {
  //MAIN RENDER
  return (
    <MainWrapper>
      <Logo>
        <h1>Jamming</h1>
      </Logo>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </MainWrapper>
  );
};

export default App;
