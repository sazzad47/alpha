import React from "react";
import Link from "next/link";
import { Tooltip, IconButton, Avatar } from "@mui/material";
import Image from "next/legacy/image";
import Notification from "./Notification";
import AppsMenu from "./AppsMenu";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SearchBar from "./SearchBar";


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
          <Link href="/zeta">
            <Tooltip title="Zeta Home">
              <IconButton className="focus:outline-none">
                <BusinessCenterIcon className="text-3xl text-textLight dark:text-textDark" />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </div>
      <SearchBar/>
      <div className="flex gap-5 items-center text-xl">
        <Notification />
        <AppsMenu />
        <Link href="/zeta">
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
