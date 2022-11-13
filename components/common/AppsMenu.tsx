import Link from "next/link";
import React, { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import { Grid, Tooltip, IconButton } from "@mui/material";
import { IoAppsSharp } from "react-icons/io5";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssessmentIcon from "@mui/icons-material/Assessment";

const apps = [
  {
    id: 1,
    icon: <SmartDisplayIcon sx={{ fontSize: "2rem" }} />,
    name: "Beta",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/beta",
  },
  {
    id: 2,
    icon: <OfflineBoltIcon sx={{ fontSize: "2rem" }} />,
    name: "Gamma",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/gamma",
  },
  {
    id: 3,
    icon: <WhatsAppIcon sx={{ fontSize: "2rem" }} />,
    name: "Delta",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/delta",
  },
  {
    id: 4,
    icon: <TravelExploreIcon sx={{ fontSize: "2rem" }} />,
    name: "Epsilon",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/epsilon",
  },
  {
    id: 5,
    icon: <BusinessCenterIcon sx={{ fontSize: "2rem" }} />,
    name: "Zeta",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/zeta",
  },
  {
    id: 6,
    icon: <AssessmentIcon sx={{ fontSize: "2rem" }} />,
    name: "Eta",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/eta",
  },
];

interface Props {
  iconSize: string;
  bgColor: string;
}

const AppsMenu = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Grid>
          <Tooltip title="Apps">
            <IconButton className="focus:outline-none" onClick={() => setOpen(!open)}>
              <IoAppsSharp
                className={`text-slate-50 ${props.iconSize}`}
              />
            </IconButton>
          </Tooltip>
          {open && <DropdownMenu bgColor={props.bgColor} />}
        </Grid>
      </ClickAwayListener>
    </React.Fragment>
  );
};
interface DropdownProps {
  bgColor: string;
}
function DropdownMenu(props: DropdownProps) {
  return (
    <div className={`dropdown_apps ${props.bgColor} text-slate-50`}>
      <Grid container className="flex items-center justify-center">
        {apps.map((item) => (
          <Grid
            item
            xs={6}
            key={item.id}
            className="flex items-center justify-center"
          >
            <Link href={`${item.path}`}>
              <Grid className="flex flex-col items-center justify-center my-2 hover:rounded hover:bg-zinc-900 w-[5rem] p-2 text-slate-50">
                <Grid>{item.icon}</Grid>
                <Grid>{item.name}</Grid>
              </Grid>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AppsMenu;
