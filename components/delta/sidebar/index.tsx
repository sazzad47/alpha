import React, { useState } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import MainBar from "./MainBar";
import Profile from "./Profile";
import Room from "./Room";
import GroupBar from "./group";

export interface SideMenuProps {
  showMainBar?: boolean;
  showProfile?: boolean;
  showGroup?: boolean;
  showRoom?: boolean;
}

const SideBar = () => {

  const [state, setState] = useState<SideMenuProps>({
    showMainBar: true,
    showProfile: false,
    showGroup: false,
    showRoom: false,
  })
 console.log('state', state)
  return (
    <Grid className="relative w-full h-[100vh]">
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showMainBar}
        timeout={50}
        unmountOnExit
        onEnter={() => {
        setState((prevState: SideMenuProps)=> ({...prevState, showProfile: false, showGroup: false, showRoom: false}));
        }}
      >
        <MainBar state={state} setState={setState} />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showProfile}
        timeout={50}
        unmountOnExit
        onEnter={() => setState((prevState: SideMenuProps)=> ({...prevState, showMainBar: false}))}
      >
        <Profile setState={setState} />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideGroup"
        in={state.showGroup}
        timeout={50}
        unmountOnExit
        onEnter={() => setState((prevState: SideMenuProps)=> ({...prevState, showMainBar: false}))}
      >
        <GroupBar setState={setState} />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideRoom"
        in={state.showRoom}
        timeout={500}
        unmountOnExit
        onEnter={() => setState((prevState: SideMenuProps)=> ({...prevState, showMainBar: false}))}
      >
        <Room />
      </CSSTransition>
    </Grid>
  );
};

export default SideBar;
