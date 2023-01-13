import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import MainBar from "./MainBar";
import { Context, StoreProps } from "../context/store";
import { sidebarTypes } from "../context/types";
import Notification from "./Notification";
import Privacy from "./privacy";
import Security from "./Security";
import Theme from "./Theme";


const SideBar = () => {
  const { state, dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="relative w-full h-[90vh]">
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showSettingsMenu}
        timeout={500}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showNotification: false, showPrivacy: false, showSecurity: false, showTheme: false} })}
      >
        <MainBar />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showNotification}
        timeout={500}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showSettingsMenu: false, showPrivacy: false, showSecurity: false, showTheme: false}})}
      >
        <Notification/>
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showPrivacy}
        timeout={500}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showSettingsMenu: false, showNotification: false, showSecurity: false, showTheme: false, showPrivacyMenu: true}})}
      >
        <Privacy/>
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showSecurity}
        timeout={500}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showSettingsMenu: false, showNotification: false, showPrivacy: false, showTheme: false}})}
      >
        <Security/>
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showTheme}
        timeout={500}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showSettingsMenu: false, showNotification: false, showPrivacy: false, showSecurity: false}})}
      >
        <Theme/>
      </CSSTransition>
    </Grid>

 
  );
};

export default SideBar;
