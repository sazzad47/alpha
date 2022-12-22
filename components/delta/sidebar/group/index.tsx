import React, { useState } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import AddParticipants from "./AddParticipants";
import Create from "./Create";

export interface GroupBarProps {
    setState: Function;
}

export interface SidebarGroupProps {
  showAddParticipantsBar?: boolean;
  showCreateGroupBar?: boolean;
}

const GroupBar = ({setState}: GroupBarProps) => {

  const [groupBarState, setGroupBarState] = useState<SidebarGroupProps>({
    showAddParticipantsBar: true,
    showCreateGroupBar: false,
  })
 console.log('groupBarState', groupBarState)
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
       <AddParticipants setState={setState} setGroupBarState={setGroupBarState} />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={groupBarState.showCreateGroupBar}
        timeout={50}
        unmountOnExit
        onEnter={() => setGroupBarState((prevState: SidebarGroupProps)=> ({...prevState, showAddParticipantsBar: false}))}
      >
        <Create setState={setState} setGroupBarState={setGroupBarState} />
      </CSSTransition>
    </Grid>
  );
};

export default GroupBar;
