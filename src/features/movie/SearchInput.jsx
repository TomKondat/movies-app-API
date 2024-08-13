import React, { useState } from "react";

const SearchInput = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchOnInput = (e) => {
    setSearchValue(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <>
      <div className="search-block">
        <input
          onChange={handleSearchOnInput}
          type="text"
          placeholder="search by title"
          value={searchValue}
        />
      </div>
    </>
  );
};

export default SearchInput;
