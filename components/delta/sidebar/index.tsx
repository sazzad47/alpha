import React, { useContext, useState } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import MainBar from "./MainBar";
import Profile from "./Profile";
import Room from "./Room";
import GroupBar from "./group";
import Settings from "./settings";
import { Context, StoreProps } from "../context/store";
import { sidebarTypes } from "../context/types";


export interface SideMenuProps {
  showMainBar?: boolean;
  showProfile?: boolean;
  showGroup?: boolean;
  showRoom?: boolean;
}

const SideBar = () => {
  const { state, dispatch } = useContext(Context) as StoreProps;

  // const [state, setState] = useState<SideMenuProps>({
  //   showMainBar: true,
  //   showProfile: false,
  //   showGroup: false,
  //   showRoom: false,
  // })
 console.log('state', state)
  return (
  


    <Grid className="relative w-full h-[100vh]">
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showMainBar}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showProfile: false, showGroup: false, showRoom: false} })}
      >
        <MainBar />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showProfile}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showMainBar: false, showGroup: false, showRoom: false} })}
      >
        <Profile />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideGroup"
        in={state.showGroup}
        timeout={50}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showMainBar: false, showProfile: false, showRoom: false} })}
      >
        <GroupBar />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideRoom"
        in={state.showRoom}
        timeout={500}
        unmountOnExit
        onEnter={() => dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showMainBar: false, showProfile: false, showGroup: false} })}
      >
        <Room />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideRoom"
        in={state.showSettings}
        timeout={500}
        unmountOnExit
        
      >
        <Settings />
      </CSSTransition>
    </Grid>

 
  );
};

export default SideBar;
