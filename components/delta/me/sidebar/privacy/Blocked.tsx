import React, { useContext } from "react";
import { Avatar, Divider, Grid, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { sidebarTypes } from "../../context/types";
import { Context, StoreProps } from "../../context/store";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';

const Blocked = () => {
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
        Blocked contacts
      </Grid>
      <Grid className="h-[80%] max-h-[80%] overflow-y-auto">
        <Grid className="flex flex-col items-center">
          <Grid className="cursor-pointer px-5 w-full hover:bg-bgButton dark:hover:bg-bgButtonDark flex gap-3 py-5">
              <PersonAddIcon/>
              <Typography className="p-0">Add blocked contacts</Typography>
          </Grid>
          <Divider className="w-full"/>
          <Grid className="cursor-pointer px-5 w-full hover:bg-bgButton dark:hover:bg-bgButtonDark flex justify-between py-5">
              <Grid className="flex items-center gap-3">
                <Avatar className="w-[30px] h-[30px]" />
                <Typography className="p-0">Sazzad Hossen</Typography>
              </Grid>
              <CloseIcon/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blocked;
