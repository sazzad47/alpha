import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const menus = [
  { id: 1, icon: <HomeIcon />, title: "Home" },
  { id: 2, icon: <PersonAddIcon />, title: "Member Requests" },
  { id: 3, icon: <PersonIcon />, title: "Suggestions" },
  { id: 4, icon: <PeopleAltIcon />, title: "All members" },
];
const SideBar = () => {
  const [activeElement, setActiveElement] = useState<string>("Home");

  return (
    <Grid className="w-[20rem] h-[90vh] pb-5 fixed overflow-y-auto left-0 bg-bgLight dark:bg-bgDark flex flex-col p-3 text-textLight dark:text-textDark">
      <Grid className="flex flex-col">
        {menus.map((item)=> (
            <Grid key={item.id} onClick={()=> setActiveElement(item.title)} className={`p-2 rounded-[5px] flex items-center cursor-pointer ${activeElement=== item.title? "bg-bgButtonHover dark:bg-bgButtonDarkHover" : ""} hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover`}>
            <IconButton className="w-[30px] h-[30px] focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-[#707075]">
              {item.icon}
            </IconButton>
            <Typography className="pl-2 text-sm"> {item.title} </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SideBar;
