import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import AddParticipants from "./AddParticipants";
import Create from "./Create";
import { Context, StoreProps } from "../../../context/store";
import { sidebarTypes } from "../../../context/types";

const GroupBar = () => {
  const { state, dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="relative w-full h-[90vh]">
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showAddParticipantsBar}
        timeout={500}
        unmountOnExit
        onEnter={() =>
          dispatch({
            type: sidebarTypes.CHANGE_SIDEBAR_STATE,
            payload: { showCreateGroupBar: false },
          })
        }
      >
        <AddParticipants />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showCreateGroupBar}
        timeout={500}
        unmountOnExit
        onEnter={() =>
          dispatch({
            type: sidebarTypes.CHANGE_SIDEBAR_STATE,
            payload: { showAddParticipantsBar: false },
          })
        }
      >
        <Create />
      </CSSTransition>
    </Grid>
  );
};

export default GroupBar;
