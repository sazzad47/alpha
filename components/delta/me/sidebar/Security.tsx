import React, { useContext } from "react";
import {
  Avatar,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { sidebarTypes } from "../context/types";
import { Context, StoreProps } from "../context/store";
import { useTheme } from "next-themes";
import LockIcon from '@mui/icons-material/Lock';
import MessageIcon from '@mui/icons-material/Message';
import CallIcon from '@mui/icons-material/Call';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Security = () => {
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
        Security
      </Grid>
      <Grid className="h-[80%] max-h-[80%] overflow-y-auto">
        <Grid className="flex flex-col gap-3 items-center p-5">
          <Avatar className="w-[100px] h-[100px]" > <LockIcon className="w-full h-full p-5"/> </Avatar>
          <Grid className="w-full mt-3">
            <Typography className="p-0 text-xl">
              Your chats and calls are private
            </Typography>
            <Typography className="p-0 text-sm mt-5">
              End-to-end encryption keeps your personal messages and calls
              between you and the people you choose. Not even Delta can read or
              listen to them. This includes your:
            </Typography>
            <Grid className="w-full flex flex-col gap-3 mt-5">
              <Grid className="flex gap-4">
                <MessageIcon/>
                <Typography className="p-0 text-sm">
                  Text and voice messages
                </Typography>
              </Grid>
              <Grid className="flex gap-4">
                <CallIcon/>
                <Typography className="p-0 text-sm">
                  Audio and video calls
                </Typography>
              </Grid>
              <Grid className="flex gap-4">
                <AttachFileIcon/>
                <Typography className="p-0 text-sm">
                  Photos, videos and documents
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Security;
