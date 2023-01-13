import React from "react";
import { Grid } from "@mui/material";
import SideBar from "./sidebar";
import { StoreProvider } from "../context/store";
import Main from "./main";

const Home = () => {
  return (
    <StoreProvider>
    <Grid className="w-full max-w-full pt-[10vh] max-h-[90vh] text-textLight dark:text-textDark">
      <Grid className="w-full h-full flex">
        <Grid className="w-[30vw] h-full bg-bgLight dark:bg-bgDark">
          <SideBar />
        </Grid>
        <Main />
      </Grid>
    </Grid>
  </StoreProvider>
  );
};

export default Home;
