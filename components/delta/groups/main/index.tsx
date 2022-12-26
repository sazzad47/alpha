import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { Context, StoreProps } from "../context/store";
import { sidebarTypes } from "../context/types";
import Chat from './chat'
import Search from './search'
import GroupInfo from "./groupInfo";

const Main = () => {
  const { state, dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="relative w-full h-[90vh]">
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showChat}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: { showGroupInfo: false, showSearchPage: false } })}
      >
        <Chat />
      </CSSTransition>
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showGroupInfo}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: { showChat: false, showSearchPage: false } })}
      >
        <GroupInfo />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showSearchPage}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: { showGroupInfo: false, showChat: false } })}
      >
        <Search/>
      </CSSTransition>
    </Grid>
  );
};

export default Main;
