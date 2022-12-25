import React, { useContext } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { sidebarTypes } from "../context/types";
import { Context, StoreProps } from "../context/store";
import { useTheme } from "next-themes";
import DoneIcon from '@mui/icons-material/Done';

const Theme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
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
        Theme
      </Grid>
      <Grid className="h-[80%] max-h-[80%] overflow-y-auto">
        <Grid className="flex flex-col items-center">
          <Grid onClick={()=> setTheme('light')} className="px-5 w-full hover:bg-bgButton dark:hover:bg-bgButtonDark flex justify-between py-5">
            <Grid className="flex flex-col">
              <Typography className="p-0">Light</Typography>
            </Grid>
            {currentTheme === "light" && <DoneIcon/>}
          </Grid>
          <Grid onClick={()=> setTheme('dark')} className="px-5 w-full hover:bg-bgButton dark:hover:bg-bgButtonDark flex justify-between py-5">
            <Grid className="flex flex-col">
              <Typography className="p-0">Dark</Typography>
            </Grid>
            {currentTheme === "dark" && <DoneIcon/>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Theme;
