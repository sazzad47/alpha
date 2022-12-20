import React from "react";
import { Grid } from "@mui/material";
import SideBar from "./sidebar";
import Chat from "./chat";

const Home = () => {
  return (
    <Grid className="w-full max-h-[100vh] bg-bgLightPrimary dark:bg-bgDarkPrimary text-textLight dark:text-textDark">
      <Grid container className="w-full h-full">
        <Grid item xs={4}>
          <Grid className="h-full bg-bgLight dark:bg-bgDark">
            <SideBar/>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid className="h-full">
            <Chat/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
