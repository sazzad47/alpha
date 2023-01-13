import React, { useState } from "react";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { MenuProps, menus } from "./menus";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListIcon from "@mui/icons-material/List";
import { CSSTransition } from "react-transition-group";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

interface Props {
  megaMenu?: MenuProps;
  microMenu?: MenuProps;
}

const Topbar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <Grid className=" w-full flex items-center justify-between h-[10vh] p-3">
      <Button
        onClick={() => setOpenSidebar(!openSidebar)}
        startIcon={<ListIcon />}
        className="focus:outline-none bg-slate-200 dark:bg-stone-700 normal-case text-textLight dark:text-textDark"
      >
        Categories
      </Button>
      <Grid className="flex gap-3">

      <Button
        className="rounded-3xl px-4 focus:outline-none bg-slate-200 dark:bg-stone-700 normal-case text-textLight dark:text-textDark"
      >
        Sell on Zeta
      </Button>
      <Button
        className="rounded-3xl px-4 focus:outline-none bg-slate-200 dark:bg-stone-700 normal-case text-textLight dark:text-textDark"
      >
        Buy from users
      </Button>
      </Grid>
      <CSSTransition
        classNames="zeta_mainMenu"
        in={openSidebar}
        timeout={500}
        unmountOnExit
      >
        <Sidebar setOpenSidebar={setOpenSidebar} />
      </CSSTransition>
    </Grid>
  );
};

const Sidebar = ({ setOpenSidebar }: { setOpenSidebar: Function }) => {
  const [openMainMenu, setOpenMainMenu] = useState<boolean>(true);
  const [openMegaMenu, setOpenMegaMenu] = useState<boolean>(false);
  const [openMicroMenu, setOpenMicroMenu] = useState<boolean>(false);
  const [currentMegaMenu, setCurrentMegaMenu] = useState<string>("");
  const [currentMicroMenu, setCurrentMicroMenu] = useState<string>("");

  return (
    <Grid className="z-[10] absolute overflow-hidden left-0 top-[10vh] w-[18rem] h-[90vh] bg-zinc-300 dark:bg-teal-900 text-textLight dark:text-textDark">
      <CSSTransition
        classNames="zeta_megaMenu"
        timeout={500}
        unmountOnExit
        in={openMainMenu}
        onEnter={() => {
          setOpenMegaMenu(false);
          setOpenMicroMenu(false);
        }}
      >
        <MainMenu
          setOpenMegaMenu={setOpenMegaMenu}
          setCurrentMegaMenu={setCurrentMegaMenu}
          setOpenSidebar={setOpenSidebar}
        />
      </CSSTransition>
      <CSSTransition
        classNames="zeta_microMenu"
        timeout={500}
        unmountOnExit
        in={openMegaMenu}
        onEnter={() => {
          setOpenMainMenu(false);
          setOpenMicroMenu(false);
        }}
      >
        <MegaMenu
          setOpenMainMenu={setOpenMainMenu}
          setOpenMicroMenu={setOpenMicroMenu}
          setCurrentMicroMenu={setCurrentMicroMenu}
          currentMegaMenu={currentMegaMenu}
        />
      </CSSTransition>
      <CSSTransition
        classNames="zeta_megaMenu"
        timeout={500}
        unmountOnExit
        in={openMicroMenu}
        onEnter={() => {
          setOpenMainMenu(false);
          setOpenMegaMenu(false);
        }}
      >
        <MicroMenu
          setOpenMegaMenu={setOpenMegaMenu}
          currentMegaMenu={currentMegaMenu}
          currentMicroMenu={currentMicroMenu}
        />
      </CSSTransition>
    </Grid>
  );
};

const MainMenu = ({
  setOpenMegaMenu,
  setCurrentMegaMenu,
  setOpenSidebar,
}: {
  setOpenMegaMenu: Function;
  setCurrentMegaMenu: Function;
  setOpenSidebar: Function;
}) => {
  return (
    <Grid className="">
      <Grid className="w-[18rem] h-[10vh] px-2">
        <Grid className="w-full h-full flex items-center justify-between">
          <Typography className="p-0 text-lg">Categories</Typography>
          <IconButton
            onClick={() => setOpenSidebar(false)}
            className="focus:outline-none text-textLight dark:text-textDark"
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        <hr className="w-full" />
      </Grid>
      <Grid className="h-[80vh] flex flex-col overflow-y-auto">
        {menus.map((megaMenu) => (
          <Grid
            onClick={() => {
              setCurrentMegaMenu(megaMenu.title);
              setOpenMegaMenu(true);
            }}
            key={megaMenu.id}
            className="cursor-pointer flex items-center gap-2 p-2 hover:bg-slate-200 dark:hover:bg-stone-700"
          >
            <Typography className="p-0 text-sm">{megaMenu.title}</Typography>
            <ChevronRightIcon />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const MegaMenu = ({
  setOpenMainMenu,
  setOpenMicroMenu,
  currentMegaMenu,
  setCurrentMicroMenu,
}: {
  currentMegaMenu: string;
  setOpenMainMenu: Function;
  setOpenMicroMenu: Function;
  setCurrentMicroMenu: Function;
}) => {
  return (
    <Grid>
      <Grid className="w-[18rem] h-[10vh] px-2">
        <Grid className="relative w-full h-full flex items-center justify-center">
          <IconButton
            onClick={() => setOpenMainMenu(true)}
            className="absolute left-0 focus:outline-none text-textLight dark:text-textDark"
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography className="p-0 text-lg">{currentMegaMenu}</Typography>
        </Grid>
        <hr className="w-full" />
      </Grid>
      <Grid className="h-[80vh] flex flex-col overflow-y-auto">
        {menus
          .find((megaMenu) => megaMenu.title === currentMegaMenu)
          ?.submenus?.map((microMenu, i) => (
            <Grid
              onClick={() => {
                setCurrentMicroMenu(microMenu.title);
                setOpenMicroMenu(true);
              }}
              key={i}
              className="cursor-pointer flex items-center gap-2 p-2 hover:bg-slate-200 dark:hover:bg-stone-700"
            >
              <Typography className="p-0 text-sm">{microMenu.title}</Typography>
              <ChevronRightIcon />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

const MicroMenu = ({
  setOpenMegaMenu,
  currentMegaMenu,
  currentMicroMenu,
}: {
  currentMegaMenu: string;
  currentMicroMenu: string;
  setOpenMegaMenu: Function;
}) => {
  return (
    <Grid>
      <Grid className="w-[18rem] h-[10vh] px-2">
        <Grid className="relative w-full h-full flex items-center justify-center">
          <IconButton
            onClick={() => setOpenMegaMenu(true)}
            className="absolute left-0 focus:outline-none text-textLight dark:text-textDark"
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography className="p-0 text-lg">{currentMicroMenu}</Typography>
        </Grid>
        <hr className="w-full" />
      </Grid>
      <Grid className="h-[80vh] flex flex-col overflow-y-auto">
        {menus
          .find((megaMenu) => megaMenu.title === currentMegaMenu)
          ?.submenus?.find((microMenu) => microMenu.title === currentMicroMenu)
          ?.submenus?.map((menu, i) => (
            <Grid
              key={i}
              className="cursor-pointer p-2 hover:bg-slate-200 dark:hover:bg-stone-700"
            >
              <Typography className="p-0 text-sm">{menu.title}</Typography>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
export default Topbar;
