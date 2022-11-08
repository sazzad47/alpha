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
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssessmentIcon from '@mui/icons-material/Assessment';

export default function Navbar() {
  const location = useRouter();
  const router = useRouter();

  const handleSearch = () => {};

  return (
    <div className="w-full flex justify-between items-center px-10 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <Link href="/">
            <div className="flex gap-1 items-center justify-center">
            <AccountBalanceWalletIcon className="text-3xl text-slate-50" />
            </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link href="/beta">
            <div className="text-xl text-slate-50">
            <SmartDisplayIcon/>
            </div>
        </Link>
        <Link href="/gamma">
        <div className="text-xl text-slate-50">
           <OfflineBoltIcon/>
        </div>
        </Link>
        <Link href="/delta">
        <div className="text-xl text-slate-50">
           <WhatsAppIcon/>
        </div>
        </Link>
        <Link href="/epsilon">
        <div className="text-xl text-slate-50">
           <TravelExploreIcon/>
        </div>
        </Link>
        <Link href="/zeta">
        <div className="text-xl text-slate-50">
           <BusinessCenterIcon/>
        </div>
        </Link>
        <Link href="/eta">
        <div className="text-xl text-slate-50">
           <AssessmentIcon/>
        </div>
        </Link>
      </div>
      <div className="flex gap-5 items-center text-xl">
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
