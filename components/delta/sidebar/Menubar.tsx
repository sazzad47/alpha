import React from "react";
import { Avatar, Grid, IconButton, Tooltip } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import MessageIcon from "@mui/icons-material/Message";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import MoreMenus from "./MoreMenus";
import SearchBar from "./SearchBar";

const Menubar = () => {
  return (
    <Grid className="flex flex-col">
      <Grid className="px-3 py-2 flex justify-between">
        <Avatar src="/user.jpg" />
        <Grid className="flex items-center">
          <Tooltip title="Groups">
            <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButton dark:hover:bg-bgButtonDark">
              <GroupsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Create room">
            <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButton dark:hover:bg-bgButtonDark">
              <VideoChatIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="New chats">
            <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButton dark:hover:bg-bgButtonDark">
              <MessageIcon />
            </IconButton>
          </Tooltip>
          <MoreMenus />
        </Grid>
      </Grid>
      <Grid className="px-3 py-2 flex">
        <SearchBar/>
      </Grid>
    </Grid>
  );
};

export default Menubar;
