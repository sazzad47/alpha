import { Grid } from "@mui/material";
import React from "react";
import Photos from "./Photos";
import Friends from "./Friends";
import Intro from "./Intro";
import Posts from "./posts";
import CreatePost from "./createPost";

const Home = () => {
  return (
    <Grid className="mt-5 flex gap-5 w-full">
      <Grid className="w-[40%]">
        <Intro />
        <Photos />
        <Friends />
      </Grid>
      <Grid className="flex flex-col gap-5 w-[60%] mb-5">
        <CreatePost/>
        <Posts />
      </Grid>
    </Grid>
  );
};

export default Home;
