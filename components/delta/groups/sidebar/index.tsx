import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import MainBar from "./MainBar";
import Create from './create';
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
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: { showGroupExplore: false, showAddParticipantsBar: false } })}
      >
        <MainBar />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showCreateBar}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: { showAddParticipantsBar: true, showMainBar: false, showGroupExplore: false } })}
      >
        <Create />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showGroupExplore}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: { showMainBar: false, showAddParticipantsBar: false } })}
      >
        <Explore />
      </CSSTransition>
    </Grid>
  );
};

export default SideBar;
