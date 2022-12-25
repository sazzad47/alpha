import React, { useContext } from "react";
import { Checkbox, Divider, Grid, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { sidebarTypes } from "../context/types";
import { Context, StoreProps } from "../context/store";
import { useTheme } from "next-themes";

const Notification = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const { dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="absolute w-full h-full flex flex-col">
      <Grid className="relative text-lg text-textDark h-[20%] bg-[#34b483] dark:bg-[#66814b33] flex items-center justify-center">
        <IconButton
          onClick={() =>
            dispatch({
              type: sidebarTypes.CHANGE_SIDEBAR_STATE,
              payload: { showSettingsMenu: true },
            })
          }
          className="focus:outline-none absolute left-2 text-inherit"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        Notification
      </Grid>
      <Grid className="h-[80%] max-h-[80%] overflow-y-auto">
        <Grid className="flex flex-col items-center px-5">
          <Grid className="w-full flex justify-between py-5">
            <Grid className="flex flex-col">
              <Typography className="p-0">Message notifications</Typography>
              <Typography className="p-0 text-sm opacity-[0.6]">
                Show notifications for new messages
              </Typography>
            </Grid>
            <Checkbox
              sx={{
                color: currentTheme === "dark" ? "#fff" : "#000",
                padding: 0,
                "&.Mui-checked": {
                  color: currentTheme === "dark" ? "#fff" : "#000",
                },
              }}
            />
          </Grid>
          <Divider className="w-full text-textLight dark:text-textDark" />
          <Grid className="w-full flex justify-between py-5">
            <Grid className="flex flex-col">
              <Typography className="p-0">Sounds</Typography>
              <Typography className="p-0 text-sm opacity-[0.6]">
                Play sounds for incoming messages
              </Typography>
            </Grid>
            <Checkbox
              sx={{
                color: currentTheme === "dark" ? "#fff" : "#000",
                padding: 0,
                "&.Mui-checked": {
                  color: currentTheme === "dark" ? "#fff" : "#000",
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Notification;
