import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { MenuProps } from "./menus";

export interface Props {
  menus: MenuProps;
}

const MenuItems = (menus: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Grid>
      {menus.menus.submenus ? (
        <Grid onMouseEnter={()=> setOpen(true)} onMouseLeave={()=> setOpen(false)} className="">
          <Grid className="cursor-pointer flex gap-2 bg-stone-200 dark:bg-stone-700 py-2 px-3 rounded-3xl">
            <Typography className="p-0">{menus.menus.title}</Typography>{" "}
          </Grid>
          {open && <Grid className="w-full relative">
            <Grid className="absolute flex justify-center">
              <Dropdown submenus={menus.menus.submenus} />
            </Grid>
          </Grid>}
        </Grid>
      ) : (
        <Grid></Grid>
      )}
    </Grid>
  );
};

export default MenuItems;
