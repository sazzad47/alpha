import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Context, StoreProps } from "../context/store";
import Chat from "./chat";
import Search from "./search";
import Profile from "./profile";

const Main = () => {
  const { state } = useContext(Context) as StoreProps;

  return (
    <Grid className="w-[70vw] h-[90vh] relative">
      <Grid className="w-full h-full">
        <Chat />
      </Grid>
      <Grid
        className={`fixed ${
          state.showProfile ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500 top-0 bottom-0 w-full h-full`}
      >
        <Profile />
      </Grid>
      <Grid
        className={`fixed ${
          state.showSearchPage ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500 top-0 bottom-0 w-full h-full`}
      >
        <Search />
      </Grid>
    </Grid>
  );
};

export default Main;
