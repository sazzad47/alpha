import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import Link from "next/link";
import { Tooltip, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';


import Notification from "./Notification";

import ProfileMenu from "./profileMenu";
import AppsMenu from "./AppsMenu";
import SearchBar from "./SearchBar";


export default function Navbar() {
  const location = useRouter();
  const router = useRouter();

  const handleSearch = () => {};

  return (
    <div className=" flex justify-between items-center px-8 h-14 w-full bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark opacity-95 fixed z-50">
      <div className="flex gap-8 items-center text-2xl">
      <Link href="/"><div className="brand_logo"><Image src={'/logo.png'} alt="logo" layout="fill" objectFit="contain" /></div></Link>
        <Link href="/beta">
          <div className="flex gap-1 items-center justify-center">
          <Tooltip title="Beta Home">
            <IconButton className="focus:outline-none">
            <SmartDisplayIcon className="text-3xl text-textLight dark:text-textDark" />
            </IconButton>
          </Tooltip>
          </div>
        </Link>
      </div>
      <SearchBar/>
      <div className="flex gap-5 items-center text-xl">
        <Tooltip title="Beta Shorts">
          <IconButton className="focus:outline-none" >
          <BsCameraVideo className="text-textLight dark:text-textDark text-lg" />
          </IconButton>
        </Tooltip>
        
        <Notification />
        
         <AppsMenu />
       
        <ProfileMenu/>
      </div>
    </div>
  );
}
