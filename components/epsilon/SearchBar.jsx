import React, { useState } from "react";
import { Paper, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const router = useRouter();
  const { q } = router.query;
  const [searchQuery, setSearchQuery] = useState(q || "");

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      router.push(`/epsilon/search?q=${searchQuery}&page=${1}`);
    }
  };
  const searchWithButton = () => {
    if (searchQuery?.length > 0) {
      router.push(`/epsilon/search?q=${searchQuery}&page=${1}`);
    }
  };
 
  return (
    
    <Grid className="w-full h-full flex items-center justify-center">
      <Paper
        onSubmit={() => {}}
        className="flex items-center pl-[20px] w-full mx-5 md:mx-0 md:w-1/2 rounded-3xl"
      >
        <input
          className="search_input_global bg-inherit"
          placeholder="Search..."
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          autoFocus
        />
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <IconButton
          onClick={searchWithButton}
          type="submit"
          sx={{ p: "10px", color: "red" }}
          className="focus:outline-none"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
};

export default SearchBar;
