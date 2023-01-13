import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { Context, StoreProps } from "../../context/store";
import { sidebarTypes } from "../../context/types";
import Chat from './chat'
import Search from './search'
import GroupInfo from "./groupInfo";

const Main = () => {
  const { state, dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="w-[70vw] h-[90vh] relative">
      <Grid className="w-full h-full">
        <Chat />
      </Grid>
      <Grid
        className={`fixed ${
          state.showGroupInfo ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500 top-0 bottom-0 w-full h-full`}
      >
        <GroupInfo />
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
