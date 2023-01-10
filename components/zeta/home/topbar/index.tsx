import React from "react";
import { Grid } from "@mui/material";
import { menus } from "./menus";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  return (
    <Grid className="w-full h-[10vh] px-3 flex items-center text-textLight dark:text-textDark">
      <Grid className="w-full flex gap-4 justify-center items-center">
        {menus.map((menus) => (
          <Grid key={menus.id} >
            <MenuItems menus={menus} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
