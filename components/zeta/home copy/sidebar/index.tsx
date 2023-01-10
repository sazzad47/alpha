import React from "react";
import { Grid } from "@mui/material";
import { menus } from "./menus";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  return (
    <Grid className="w-[20rem] h-[90vh] pb-5 overflow-y-auto left-0 bg-stone-200 dark:bg-stone-700 p-3 text-textLight dark:text-textDark">
      <Grid>
        {menus.map((menus) => (
          <Grid key={menus.id}>
            <MenuItems menus={menus} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
