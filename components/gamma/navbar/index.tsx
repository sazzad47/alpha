import React from "react";
import Link from "next/link";
import { Grid, Tooltip, IconButton, Button, Avatar } from "@mui/material";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { BsMessenger } from "react-icons/bs";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import GroupIcon from '@mui/icons-material/Group';

import AppsMenu from "./AppsMenu";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="w-full h-[80px] flex items-center justify-center fixed z-[1000]">
      <div className="header-container w-full h-full bg-bgLight dark:bg-bgDark overflow-hidden p-[20px] shadow-lg">
        <div className="header-wrapper w-full h-full flex items-center justify-between py-0 px-[8px]">
          <div className="logoBox flex items-center">
            <Link href="/">
              <Grid className="brand_logo mr-3">
                <Image src="/logo.png" alt="" fill />
              </Grid>
            </Link>
            <SearchBar />
          </div>
          <div className="iconBox1 text-textLight dark:text-textDark flex justify-between items-center px-[25px]">
            <Link href="/gamma">
              <Tooltip title="Home">
                <Button className="ml-2 w-[2rem] h-[2.5rem] rounded-[10px] focus:outline-none text-textLight dark:text-textDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                  <HomeIcon />
                </Button>
              </Tooltip>
            </Link>
            <Link href="/gamma/friends">
            <Tooltip title="Members">
              <Button className="ml-2 w-[2rem] h-[2.5rem] rounded-[10px] focus:outline-none text-textLight dark:text-textDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <GroupIcon />
              </Button>
            </Tooltip>
            </Link>
            <Link href="/gamma/groups">
            <Tooltip title="Group">
              <Button className="ml-2 w-[2rem] h-[2.5rem] rounded-[10px] focus:outline-none text-textLight dark:text-textDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <GroupsIcon />
              </Button>
            </Tooltip>
            </Link>
            <Tooltip title="Page">
              <Button className="ml-2 w-[2rem] h-[2.5rem] rounded-[10px] focus:outline-none text-textLight dark:text-textDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <AssistantPhotoIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Watch">
              <Button className="ml-2 w-[2rem] h-[2.5rem] rounded-[10px] focus:outline-none text-textLight dark:text-textDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <LiveTvIcon />
              </Button>
            </Tooltip>
            <Tooltip title="News">
              <Button className="ml-2 w-[2rem] h-[2.5rem] rounded-[10px] focus:outline-none text-textLight dark:text-textDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <ConnectedTvIcon />
              </Button>
            </Tooltip>
          </div>
          <div className="iconBox2 text-textLight dark:text-textDark flex items-center justify-between px-[25px]">
            <Tooltip title="Messenger">
              <IconButton className="ml-2 focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <BsMessenger />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notification">
              <IconButton className="ml-2 focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <NotificationsNoneIcon />
              </IconButton>
            </Tooltip>
            <AppsMenu />
            <Tooltip title="Account">
              <Avatar className="ml-2">S</Avatar>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  );
}
