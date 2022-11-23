import React, { useState } from "react";
import { Grid } from "@mui/material";
import Watch from "./watch";
import Suggestions from "./Suggestions";
import Action from "./watch/action";
import Description from "./watch/Description";
import CommentBox from "./watch/comment";

const Index = () => {
  const [theaterMode, setTheaterMode] = useState<boolean>(false);
  const toggleTheater = () => {
    setTheaterMode((prev) => !prev);
  };
  return (
    <Grid className="min-h-[100vh] px-5 w-full max-w-full py-[5rem] bg-[#eee] dark:bg-[#242526]">
      <Grid container spacing={2} className={`${theaterMode? "hidden" : "flex"}`}>
        <Grid item xs={12} md={7}>
          <Watch toggleTheater={toggleTheater} />
          <Action />
          <Description />
          <CommentBox />
        </Grid>
        <Grid item xs={12} md={5}>
          <Suggestions />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={`${theaterMode? "flex" : "hidden"}`}>
        <Grid item xs={12}>
          <Watch toggleTheater={toggleTheater} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Action />
          <Description />
          <CommentBox />
        </Grid>
        <Grid item xs={12} md={5}>
          <Suggestions />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
