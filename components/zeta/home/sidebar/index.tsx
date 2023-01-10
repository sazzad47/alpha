import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { MenuProps, menus } from "./menus";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Props {
  megaMenu?: MenuProps;
  microMenu?: MenuProps;
}

const Sidebar = () => {
  return (
    <Grid className="w-[15rem] h-[90vh] bg-zinc-300 dark:bg-teal-900 overflow-y-auto text-textLight dark:text-textDark">
      <Grid className="h-[10vh] flex items-center px-3">
        <Grid className="w-full flex flex-col gap-3">
          <Typography className="p-0 text-lg">Categories</Typography>
          <hr className="w-full" />
        </Grid>
      </Grid>
      <ul className="list-none">
        {menus.map((megaMenu) => (
          <MegaMenu key={megaMenu.id} megaMenu={megaMenu} />
        ))}
      </ul>
    </Grid>
  );
};

const MegaMenu = ({ megaMenu }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Grid
        className={`w-full flex items-center justify-between px-3 py-2 ${
          open ? "bg-slate-200 dark:bg-stone-700" : ""
        } cursor-pointer`}
      >
        <Typography className="p-0 text-sm">{megaMenu?.title}</Typography>
        {open && <ChevronRightIcon className="text-sm" />}
      </Grid>
      {open && megaMenu?.submenus ? (
        <ul className="absolute left-[14.8rem] h-[80vh] top-[20vh] w-[15rem] border-l border-slate-900 bg-zinc-300 dark:bg-teal-900 py-3 text-textLight dark:text-textDark">
          {megaMenu.submenus.map((microMenu, i) => (
            <MicroMenu key={i} microMenu={microMenu} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

const MicroMenu = ({ microMenu }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Grid
        className={`w-full flex items-center justify-between px-3 py-2 ${
          open ? "bg-slate-200 dark:bg-stone-700" : ""
        } cursor-pointer`}
      >
        <Typography className="p-0 text-sm">{microMenu?.title}</Typography>
        {open && <ChevronRightIcon className="text-sm" />}
      </Grid>
      {open && microMenu?.submenus ? (
        <ul className="absolute left-[14.8rem] h-[80vh] top-0 w-[15rem] border-l border-slate-900 bg-zinc-300 dark:bg-teal-900 py-3 text-textLight dark:text-textDark">
          {microMenu.submenus.map((menu, i) => (
            <li key={i}>
              <Typography className="text-sm px-3 py-2 hover:bg-slate-200 dark:hover:bg-stone-700 cursor-pointer">
                {menu.title}
              </Typography>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};
export default Sidebar;
