import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsCameraVideo, BsBell } from "react-icons/bs";
import Link from "next/link";
import { Tooltip, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';


import Notification from "./Notification";

import ProfileMenu from "./profileMenu";
import AppsMenu from "./AppsMenu";


export default function Navbar() {
  const location = useRouter();
  const router = useRouter();

  const handleSearch = () => {};

  return (
    <div className=" flex justify-between items-center px-8 h-14 w-full bg-[#212121] opacity-95 fixed z-50">
      <div className="flex gap-8 items-center text-2xl">
      <Link href="/"><div className="brand_logo"><Image src={'/logo.png'} alt="logo" layout="fill" objectFit="contain" /></div></Link>
        <Link href="/beta">
          <div className="flex gap-1 items-center justify-center">
          <Tooltip title="Beta Home">
            <IconButton className="focus:outline-none">
            <SmartDisplayIcon className="text-3xl text-slate-50" />
            </IconButton>
          </Tooltip>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex bg-zinc-300 items-center h-10 pl-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              {/* <div>
                <AiOutlineSearch className="text-xl" />
              </div> */}
              <input
                type="text"
                className=" bg-zinc-300 focus:outline-none border-none"
                value=""
                onChange={() => {}}
              />

              <AiOutlineClose
                className={`text-xl cursor-pointer ${"invisible"}`}
                onClick={() => {}}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-300">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-2 bg-zinc-600 text-slate-50 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <Tooltip title="Beta Shorts">
          <IconButton className="focus:outline-none" >
          <BsCameraVideo className="text-slate-50" />
          </IconButton>
        </Tooltip>
        
        <Notification/>
        
         <AppsMenu bgColor="bg-bgLight dark:bg-bgDark" iconSize="text-lg"/>
       
        <ProfileMenu/>
      </div>
    </div>
  );
}
