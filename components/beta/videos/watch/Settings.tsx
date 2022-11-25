import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ClickAwayListener } from "@mui/base";
import { CSSTransition } from "react-transition-group";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DoneIcon from "@mui/icons-material/Done";
import { Grid } from "@mui/material";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import LoopIcon from "@mui/icons-material/Loop";
import Switch from "@mui/material/Switch";


interface Props {
  playbackRate: number;
  onPlaybackRateChange: (rate: number) => void;
  setLoop: Function;
  loop: boolean;
  openSettings: boolean;
  setOpenSettings: Function;
}
const Settings = ({
  openSettings,
  setOpenSettings,
  playbackRate,
  onPlaybackRateChange,
  setLoop,
  loop,
}: Props) => {
  const handleClickAway = () => {
    setOpenSettings(false);
  };
  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Grid className="inline-block">
          <SettingsIcon
            sx={{ width: 30, height: 30 }}
            className="text-lg p-0 text-white rounded-full cursor-pointer"
            onClick={() => setOpenSettings(!openSettings)}
          />

          {openSettings && (
            <DropdownMenu
              playbackRate={playbackRate}
              onPlaybackRateChange={onPlaybackRateChange}
              setLoop={setLoop}
              loop={loop}
              openSettings={openSettings}
              setOpenSettings={setOpenSettings}
            ></DropdownMenu>
          )}
        </Grid>
      </ClickAwayListener>
    </React.Fragment>
  );
};

function DropdownMenu({
  playbackRate,
  onPlaybackRateChange,
  setLoop,
  loop,
}: Props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoop(event.target.checked);
  };
  const dropdownRef = useRef<any>();
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 32);
  }, []);

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height + 32);
  }

  function DropdownItem(props: any) {
    return (
      <Grid
        className="cursor-pointer menu_item_beta_drop hover:bg-bgLightHover dark:hover:bg-bgDarkHover px-4"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span
          className={
            props.leftIcon
              ? "text-textLight dark:text-textDark bg-[#dde2e7] dark:bg-[#6f7072] icon-button"
              : props.doneIcon
              ? "text-textLight dark:text-textDark icon-button bg-transparent"
              : "icon-button invisible"
          }
        >
          {props.doneIcon ? props.doneIcon : props.leftIcon}
        </span>
        <span className="text-textLight dark:text-textDark text-[1rem]">
          {props.children}
        </span>
        <span className="text-textLight dark:text-textDark icon-right ">
          {props.rightIcon}
        </span>
      </Grid>
    );
  }

  return (
    <div
      className="player_beta_drop max-h-[90vh] overflow-y-auto border border-gray-300 p-3 bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu_beta_drop">
          <DropdownItem
            leftIcon={<SlowMotionVideoIcon />}
            rightIcon={<ChevronRightIcon className="cursor-pointer"/>}
            goToMenu="switch-channel"
            path="#"
          >
            Speed
          </DropdownItem>
          <DropdownItem
            leftIcon={<LoopIcon />}
            rightIcon={
              <Switch
                checked={loop}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            path="#"
          >
            Loop
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "switch-channel"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu_beta_drop">
          <div className="flex p-[0.5rem]">
            <span
              className="cursor-pointer w-[30px] h-[30px] m-[2px] p-[5px] flex items-center justify-center hover:rounded-[50%] hover:bg-gray-600"
              onClick={() => setActiveMenu("main")}
            >
              <KeyboardBackspaceIcon />
            </span>
            <h1 className="text-2xl font-semibold ml-1">Speed</h1>
          </div>
          {[0.5, 1, 1.5, 2].map((rate) => (
            <Grid key={rate} onClick={() => onPlaybackRateChange(rate)}>
              <DropdownItem
                doneIcon={rate === playbackRate ? <DoneIcon /> : null}
              >
                {" "}
                {rate}x{" "}
              </DropdownItem>
            </Grid>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default Settings;
