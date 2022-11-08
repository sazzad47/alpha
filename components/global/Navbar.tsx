import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsCameraVideo, BsBell } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import { IoAppsSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import Tooltip from '@mui/material/Tooltip';
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssessmentIcon from '@mui/icons-material/Assessment';


const menus = [
    {id: 1,
    icon: <SmartDisplayIcon/>,
    name: 'Beta',
    path: '/beta'
    },
    {id: 2,
    icon: <OfflineBoltIcon/>,
    name: 'Gamma',
    path: '/gamma'
    },
    {id: 3,
    icon: <WhatsAppIcon/>,
    name: 'Delta',
    path: '/delta'
    },
    {id: 4,
    icon: <TravelExploreIcon/>,
    name: 'Epsilon',
    path: '/epsilon'
    },
    {id: 5,
    icon: <BusinessCenterIcon/>,
    name: 'Zeta',
    path: '/zeta'
    },
    {id: 6,
    icon: <AssessmentIcon/>,
    name: 'Eta',
    path: '/eta'
    },
]
const Navbar: React.FC = () => {
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
        {menus.map((item)=> (
          <Link key={item.id} href={`${item.path}`}>
            <div className="text-xl text-slate-50">
                <Tooltip title={item.name}>
                    {item.icon}
                </Tooltip>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex gap-5 items-center text-xl">
      <Tooltip title="Account">
        <Avatar
          sx={{ width: 30, height: 30 }}
          className="text-lg p-0 bg-zinc-600 text-slate-50 rounded-full"
        >
          S
        </Avatar>
      </Tooltip>
      </div>
    </div>
  );
}

export default Navbar