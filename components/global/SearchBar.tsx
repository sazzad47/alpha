import React from "react";
import { Paper, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from '@mui/icons-material/Mic';

const SearchBar = () => {
  return (
    <Grid className="search_bar_global">

    <Paper component="form" onSubmit={() => {}} className="flex pl-[20px] w-full mx-5 md:mx-0 md:w-1/2 rounded-3xl">
      <input
        className="search_input_global"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", mr:1, color: "red" }}>
        <MicIcon/>
      </IconButton>
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
    </Grid>
  );
};

export default SearchBar;
