import React, { useContext } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { sidebarTypes } from "../../context/types";
import { Context, StoreProps } from "../../context/store";
import DoneIcon from "@mui/icons-material/Done";

const LastSeen = () => {
  const { dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="absolute w-full h-full flex flex-col">
      <Grid className="relative text-lg text-textDark h-[20%] bg-[#34b483] dark:bg-[#66814b33] flex items-center justify-center">
        <IconButton
          onClick={() =>
            dispatch({
              type: sidebarTypes.CHANGE_SIDEBAR_STATE,
              payload: { showPrivacyMenu: true },
            })
          }
          className="focus:outline-none absolute left-2 text-inherit"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        Last seen
      </Grid>
      <Grid className="h-[80%] max-h-[80%] overflow-y-auto">
        <Grid className="flex flex-col items-center">
          <Grid className="w-full px-5 py-3">
            <Typography className="p-0 text-sm text-[#eb8181] dark:text-[#53e483]">
              Who can see my last seen
            </Typography>
          </Grid>
          <Grid className="px-5 w-full hover:bg-bgButton dark:hover:bg-bgButtonDark flex justify-between py-5">
            <Grid className="flex flex-col">
              <Typography className="p-0">Everyone</Typography>
            </Grid>
            <DoneIcon />
          </Grid>
          <Grid className="px-5 w-full hover:bg-bgButton dark:hover:bg-bgButtonDark flex justify-between py-5">
            <Grid className="flex flex-col">
              <Typography className="p-0">My contacts</Typography>
            </Grid>
          </Grid>
          <Grid className="px-5 w-full hover:bg-bgButton dark:hover:bg-bgButtonDark flex justify-between py-5">
            <Grid className="flex flex-col">
              <Typography className="p-0">Nobody</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LastSeen;
