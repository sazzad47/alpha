import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsCameraVideo, BsBell } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import { IoAppsSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function Navbar() {
  const location = useRouter();
  const router = useRouter();

  const handleSearch = () => {};

  return (
    <div className="flex justify-between items-center px-10 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
      <Link href="/">
            <div className="flex gap-1 items-center justify-center">
            <AccountBalanceWalletIcon className="text-3xl text-slate-50" />
            </div>
        </Link>
        <Link href="/beta">
          <div className="flex gap-1 items-center justify-center">
            <EmergencyRecordingIcon className="text-3xl text-slate-50" />
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
        <BsCameraVideo className="text-slate-50" />
        <IoAppsSharp className="text-slate-50" />
        <div className="relative">
          <BsBell className="text-slate-50" />
          <span className="absolute bottom-2 left-2 text-xs text-slate-50 bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>

        <Avatar
          sx={{ width: 30, height: 30 }}
          className="text-lg p-0 bg-zinc-600 text-slate-50 rounded-full"
        >
          S
        </Avatar>
      </div>
    </div>
  );
}
