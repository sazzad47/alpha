import React from "react";
import { Grid } from "@mui/material";
import Topbar from "./Topbar";
import Feed from "./feed";

const Home = () => {
  return (
    <Grid className="min-h-[100vh] min-w-full pt-[3.5rem] bg-[#eee] dark:bg-[#242526]">
      <Grid className="w-full">
        <Grid container className="w-full flex flex-col">
          <Topbar />
          <Feed />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
