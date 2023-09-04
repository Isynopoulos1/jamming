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

//APP
const App = () => {
  //MAIN RENDER
  return (
    <div>
      <Playlist />
      <SearchBar />
      <SearchResults />
      <Track />
      <TrackList />
      <SaveButton />
    </div>
  );
};

export default App;
