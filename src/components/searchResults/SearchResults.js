import React from "react";

//IMPORT COMPONENTS
import Tracklist from "../tracklist/Tracklist";
import Track from "../track/Track";
import SearchButton from "../saveButton/SaveButton";

import { Results } from "./SearchResults.styles";

const SearchResults = ({ searchResults }) => {
  return (
    <Results>
      WTF
      <SearchButton />
    </Results>
  );
};

export default SearchResults;
