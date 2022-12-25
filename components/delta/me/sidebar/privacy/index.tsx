import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { Context, StoreProps } from "../../context/store";
import { sidebarTypes } from "../../context/types";
import Online from "./Online";
import LastSeen from "./LastSeen";
import About from "./About";
import Blocked from "./Blocked";
import Menu from "./Menu";

const Privacy = () => {
  const { state, dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="relative w-full h-[90vh]">
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showPrivacyMenu}
        timeout={50}
        unmountOnExit
        onEnter={() =>
          dispatch({
            type: sidebarTypes.CHANGE_SIDEBAR_STATE,
            payload: { showOnlinePrivacy: false, showLastSeenPrivacy: false, showAboutPrivacy: false, showBlocked: false },
          })
        }
      >
        <Menu />
      </CSSTransition>
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showOnlinePrivacy}
        timeout={50}
        unmountOnExit
        onEnter={() =>
          dispatch({
            type: sidebarTypes.CHANGE_SIDEBAR_STATE,
            payload: { showPrivacyMenu: false, showLastSeenPrivacy: false, showAboutPrivacy: false, showBlocked: false },
          })
        }
      >
        <Online />
      </CSSTransition>
      <CSSTransition
        classNames="delta_mainSidebar"
        in={state.showLastSeenPrivacy}
        timeout={50}
        unmountOnExit
        onEnter={() =>
          dispatch({
            type: sidebarTypes.CHANGE_SIDEBAR_STATE,
            payload: { showPrivacyMenu: false, showOnlinePrivacy: false, showAboutPrivacy: false, showBlocked: false },
          })
        }
      >
        <LastSeen />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showAboutPrivacy}
        timeout={50}
        unmountOnExit
        onEnter={() =>
          dispatch({
            type: sidebarTypes.CHANGE_SIDEBAR_STATE,
            payload: { showPrivacyMenu: false, showOnlinePrivacy: false, showLastSeenPrivacy: false, showBlocked: false },
          })
        }
      >
        <About />
      </CSSTransition>
      <CSSTransition
        classNames="delta_sideProfile"
        in={state.showBlocked}
        timeout={50}
        unmountOnExit
        onEnter={() =>
          dispatch({
            type: sidebarTypes.CHANGE_SIDEBAR_STATE,
            payload: { showPrivacyMenu: false, showOnlinePrivacy: false, showLastSeenPrivacy: false, showAboutPrivacy: false },
          })
        }
      >
        <Blocked />
      </CSSTransition>
    </Grid>
  );
};

export default Privacy;
