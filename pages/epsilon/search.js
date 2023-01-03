import React from "react";
import SearchResult from "../../components/epsilon/SearchResult";
import { StoreProvider } from "../../components/epsilon/utils/ContextApi";

const Search = () => {
  return (
    <StoreProvider>
      <SearchResult />
    </StoreProvider>
  );
};

export default Search;
