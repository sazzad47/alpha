import React, { useContext } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Context, StoreProps } from "../context/store";
import { sidebarTypes } from "../context/types";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router'

const menuItems = [
  {
    id: 1,
    icon: <NotificationsIcon color="inherit" />,
    title: "Notification",
  },
  { id: 2, icon: <LockIcon color="inherit" />, title: "Privacy" },
  { id: 3, icon: <SecurityIcon color="inherit" />, title: "Security" },
  { id: 4, icon: <SettingsBrightnessIcon color="inherit" />, title: "Theme" },
  { id: 5, icon: <LogoutIcon color="inherit" />, title: "Logout" },
];

const MainBar = () => {
  const router = useRouter();
  const { dispatch } = useContext(Context) as StoreProps;
  return (
    <Grid className="absolute w-full h-full flex flex-col">
      <Grid className="relative text-lg text-textDark h-[10%] bg-[#34b483] dark:bg-[#66814b33] flex items-center justify-center">
        <IconButton
          onClick={()=> router.back()}
          className="focus:outline-none absolute left-2 text-inherit"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        Settings
      </Grid>
      <Grid className="h-[90%] overflow-y-auto flex flex-col">
        {menuItems.map((item) => (
          <Grid
            onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {["show"+ item.title]: true}})}
            key={item.id}
            className="cursor-pointer w-full hover:bg-bgButton dark:hover:bg-bgButtonDark flex gap-3 items-center"
          >
            <Grid className="p-5 pr-0">{item.icon}</Grid>
            <Grid className="flex-1 p-5">
              <Typography className="p-0">{item.title}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MainBar;
