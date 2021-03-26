import React from "react";
import SearchJumbo from "../components/SearchJumbo";
import Search from "../components/Search"
import ResultsContainer from "../components/ResultsContainer";

function SearchPage() {
  return (
    <div>
      <SearchJumbo />
      <Search />
      <ResultsContainer />
    </div>
  );
}

export default SearchPage;