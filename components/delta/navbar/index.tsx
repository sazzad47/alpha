import React from "react";
import Link from "next/link";
import { Tooltip, IconButton, Avatar } from "@mui/material";
import Image from "next/legacy/image";
import Notification from "./Notification";
import AppsMenu from "./AppsMenu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GroupsIcon from "@mui/icons-material/Groups";
import CameraIndoorIcon from "@mui/icons-material/CameraIndoor";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";

export default function Navbar() {
  return (
    <div className="top-0 left-0 flex justify-between items-center px-8 h-[10vh] w-full max-w-full bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark opacity-95 fixed z-50">
      <div className="flex flex-wrap gap-8 items-center text-2xl">
        <Link href="/">
          <div className="brand_logo">
            <Image
              src={"/logo.png"}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <div className="flex gap-1 items-center justify-center">
          <Link href="/delta">
            <Tooltip title="Delta Home">
              <IconButton className="focus:outline-none">
                <WhatsAppIcon className="text-3xl text-textLight dark:text-textDark" />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <Link href="/delta/groups/123">
        <Tooltip title="Group">
          <IconButton className="focus:outline-none">
            <GroupsIcon className="text-textLight dark:text-textDark text-2xl" />
          </IconButton>
        </Tooltip>
        </Link>
        <Tooltip title="Room">
          <IconButton className="focus:outline-none">
            <CameraIndoorIcon className="text-textLight dark:text-textDark text-2xl" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Live chat">
          <IconButton className="focus:outline-none">
            <VideoCameraFrontIcon className="text-textLight dark:text-textDark text-2xl" />
          </IconButton>
        </Tooltip>
        <Notification />
        <AppsMenu />
        <Link href="/delta/me">
        <Avatar
          sx={{ width: 30, height: 30 }}
          className="text-lg p-0 bg-zinc-600  rounded-full cursor-pointer"
          
        >
          S
        </Avatar>
        </Link>
      </div>
    </div>
  );
}
