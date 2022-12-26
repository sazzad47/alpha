import React from "react";
import { Grid } from "@mui/material";
import SideBar from "./sidebar";
import Chat from "./chat";
import { StoreProvider } from "./context/store";

const Home = () => {
  return (
    <StoreProvider>
      <Grid className="w-full pt-[10vh] max-h-[90vh] text-textLight dark:text-textDark">
        <Grid container className="w-full h-full">
          <Grid item xs={4}>
            <Grid className="h-full bg-bgLight dark:bg-bgDark">
              <SideBar />
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid className="h-full">
              <Chat />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StoreProvider>
  );
};

export default Home;
