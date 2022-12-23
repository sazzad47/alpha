import React, { useState } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import Notification from "./Notification";
import Privacy from "./Privacy";


export interface GroupBarProps {
    setState: Function;
}

export interface SidebarGroupProps {
  showAddParticipantsBar?: boolean;
  showCreateGroupBar?: boolean;
}

const Settings = () => {

  const [groupBarState, setGroupBarState] = useState<SidebarGroupProps>({
    showAddParticipantsBar: true,
    showCreateGroupBar: false,
  })

  return (
    <Grid className="relative w-full h-[100vh]">
      <CSSTransition
        classNames="delta_mainSidebar"
        in={groupBarState.showAddParticipantsBar}
        timeout={50}
        unmountOnExit
        onEnter={() => {
        setGroupBarState((prevState: SidebarGroupProps)=> ({...prevState, showCreateGroupBar: false}));
        }}
      >
       <Notification/>
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={groupBarState.showCreateGroupBar}
        timeout={50}
        unmountOnExit
        onEnter={() => setGroupBarState((prevState: SidebarGroupProps)=> ({...prevState, showAddParticipantsBar: false}))}
      >
        <Privacy/>
      </CSSTransition>
    </Grid>
  );
};

export default Settings;
