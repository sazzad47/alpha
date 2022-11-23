import Link from "next/link";
import React, { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import { Grid, Typography } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import SchoolIcon from "@mui/icons-material/School";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";

const apps = [
  {
    id: 1,
    icon: <HomeIcon className="text-2xl" />,
    name: "Home",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/beta",
  },
  {
    id: 2,
    icon: <ComputerIcon className="text-2xl" />,
    name: "Programming",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/gamma",
  },
  {
    id: 3,
    icon: <SchoolIcon className="text-2xl" />,
    name: "Education",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/delta",
  },
  {
    id: 4,
    icon: <LiveTvIcon className="text-2xl" />,
    name: "News",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/epsilon",
  },
  {
    id: 5,
    icon: <SportsBaseballIcon className="text-2xl" />,
    name: "Sports",
    desc: "Beta is the best video sharing platform after YouTube. This makes the data safe from hackers.",
    path: "/zeta",
  },
];

const Categories = () => {
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Grid className="p-5 w-[200px] flex items-center text-textLight dark:text-textDark">
          <Grid
            onClick={() => setOpen(!open)}
            className="p-3 bg-[#82c9f1] cursor-pointer dark:bg-bgDark hover:bg-bgLight dark:hover:bg-bgDarkHover flex items-center justify-start"
          >
            <ListIcon className="" />
            <Typography className="text-start ml-3 px-0" align="left">
              Categories
            </Typography>
          </Grid>
          {open && <DropdownMenu />}
        </Grid>
      </ClickAwayListener>
    </React.Fragment>
  );
};

function DropdownMenu() {
  return (
    <div className="dropdown_categories_beta border h-[300px] overflow-y-auto flex justify-start border-gray-300 bg-bgLight dark:bg-bgDark">
      <Grid container className="w-full flex items-start justify-center">
        {apps.map((item) => (
          <Grid
            item
            xs={12}
            key={item.id}
            className="relative flex items-start justify-start"
          >
            <Link href="#">
              <Grid className="w-full absolute flex items-center leading-5 justify-start text-lg rounded hover:bg-bgLightHover dark:hover:bg-bgDarkHover p-2 text-textLight dark:text-textDark">
                <Grid>{item.icon}</Grid>
                <Grid className="ml-3">{item.name}</Grid>
              </Grid>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Categories;
