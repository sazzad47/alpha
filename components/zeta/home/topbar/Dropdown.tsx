import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { MenuProps } from "./menus";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Dropdown = ({ submenus }: MenuProps) => {
  return (
    <Grid className="w-full bg-slate-200 dark:bg-stone-700 p-4 mt-4">
      <Grid className="flex flex-col gap-2">
        {submenus?.map((menu, i) => (
          <Grid key={i}>
            <SubMenuItem menu={menu} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

interface Props {
  menu: MenuProps;
}

const SubMenuItem = ({ menu }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Grid>
      {menu.submenus ? (
        <Grid
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="relative"
        >
          <Grid className="cursor-pointer flex gap-1 items-center">
            <Typography className="p-0 whitespace-nowrap">
              {menu.title}
            </Typography>
            <ChevronRightIcon className="" />
          </Grid>
          {open && (
            <Grid className="">
              <Grid className="absolute w-full h-full translate-x-[100%] translate-y-[-100%]">
                <SubDropDown menu={menu} />
              </Grid>
            </Grid>
          )}
        </Grid>
      ) : (
        <Grid></Grid>
      )}
    </Grid>
  );
};

const SubDropDown = ({ menu }: Props) => {
  return (
    <Grid className="w-[fit-content] ml-[10%] bg-slate-200 dark:bg-stone-700 p-4 border-l border-slate-800">
      <Grid className="flex flex-col gap-2">
        {menu.submenus?.map((item, i) => (
          <Grid key={i} className="whitespace-nowrap cursor-pointer">{item.title}</Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Dropdown;
