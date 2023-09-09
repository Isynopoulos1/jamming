import React from "react";

//IMPORT STYLES
import { SearchBarContainer, SearchInput, Logo } from "./SearchBar.styles";

//IMPORT COMPONENTS
import Button from "../button/Button";

const SearchBar = ({ handleSubmit, setSearch }) => {
  //HANDLE FUNCTION
  const handleChange = (e) => {
    return setSearch(e.target.value);
  };
  //MAIN RENDER
  return (
    <SearchBarContainer>
      <Logo>
        <h1>Jamming</h1>
      </Logo>
      <SearchInput
        type="text"
        onChange={handleChange}
        placeholder="Enter a Song, Album or Artist"
      />
      <Button label="Search" onClick={handleSubmit} />
    </SearchBarContainer>
  );
};

export default SearchBar;
