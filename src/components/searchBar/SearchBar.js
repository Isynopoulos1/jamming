import React from "react";

import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchInput placeholder="Enter a Song, Album or Artist"></SearchInput>
      <SearchButton>SEARCH</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
