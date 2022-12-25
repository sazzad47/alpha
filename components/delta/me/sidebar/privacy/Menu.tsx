import React, { useContext } from "react";
import { Avatar, Divider, Grid, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Context, StoreProps } from "../../context/store";
import { sidebarTypes } from "../../context/types";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const menuItems = [
  {
    id: 1,
    icon: <NotificationsIcon color="inherit" />,
    title: "Notification",
  },
  { id: 2, icon: <LockIcon color="inherit" />, title: "Privacy" },
  { id: 3, icon: <SecurityIcon color="inherit" />, title: "Security" },
  { id: 4, icon: <SettingsBrightnessIcon color="inherit" />, title: "Theme" },
];
const Menu = () => {
  const { dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="absolute w-full h-full flex flex-col">
      <Grid className="relative text-lg text-textDark h-[20%] bg-[#34b483] dark:bg-[#66814b33] flex items-center justify-center">
        <IconButton
          onClick={() =>
            dispatch({
              type: sidebarTypes.CHANGE_SIDEBAR_STATE,
              payload: {
                showSettingsMenu: true,
                showPrivacyMenu: false,
              },
            })
          }
          className="focus:outline-none absolute left-2 text-inherit"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        Privacy
      </Grid>
      <Grid className="h-[80%] overflow-y-auto flex flex-col">
        <Grid onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showOnlinePrivacy: true}})} className="h-[4rem] cursor-pointer w-full flex-col px-5">
          <Grid className="h-full w-full flex justify-between items-center">
            <Typography className="p-0">Online</Typography>
            <ChevronRightIcon />
          </Grid>
          <Divider />
        </Grid>
        <Grid onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showLastSeenPrivacy: true}})} className="h-[4rem] cursor-pointer w-full flex-col px-5">
          <Grid className="h-full w-full flex justify-between items-center">
            <Typography className="p-0">Last seen</Typography>
            <ChevronRightIcon />
          </Grid>
          <Divider />
        </Grid>
        <Grid onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showAboutPrivacy: true}})} className="h-[4rem] cursor-pointer w-full flex-col px-5">
          <Grid className="h-full w-full flex justify-between items-center">
            <Typography className="p-0">About</Typography>
            <ChevronRightIcon />
          </Grid>
          <Divider />
        </Grid>
        <Grid onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showBlocked: true}})} className="h-[4rem] cursor-pointer w-full flex-col px-5">
          <Grid className="h-full w-full flex justify-between items-center">
            <Typography className="p-0">Blocked contacts</Typography>
            <ChevronRightIcon />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Menu;
