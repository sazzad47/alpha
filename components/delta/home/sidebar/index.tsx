import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import MainBar from "./MainBar";
import Explore from "./Explore";
import { Context, StoreProps } from "../context/store";
import { sidebarTypes } from "../context/types";

const SideBar = () => {
  const { state, dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="relative w-full h-[90vh]">
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showMainBar}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: { showContactExplore: false } })}
      >
        <MainBar />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showContactExplore}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: { showMainBar: false } })}
      >
        <Explore />
      </CSSTransition>
    </Grid>
  );
};

export default SideBar;
