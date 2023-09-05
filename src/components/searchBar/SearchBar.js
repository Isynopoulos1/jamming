import React from "react";
//IMPORT STYLES
import { SearchBarContainer, SearchInput } from "./SearchBar.styles";

//IMPORT COMPONENTS
import SearchButton from "../searchButton/SearchButton";

const SearchBar = ({ setSearch }) => {
  //HANDLE FUNCTION

  const handleChange = (e) => {
    return setSearch(e.target.value);
  };
  //MAIN RENDER
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        onChange={handleChange}
        placeholder="Enter a Song, Album or Artist"
      />
      <SearchButton />
    </SearchBarContainer>
  );
};

export default SearchBar;
