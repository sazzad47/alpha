import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import {ClickAwayListener} from '@mui/base';
import { CSSTransition } from 'react-transition-group';
import Avatar from "@mui/material/Avatar";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DoneIcon from '@mui/icons-material/Done';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Grid } from '@mui/material';
import ThemeChanger from './ThemeChanger';

const ProfileMenu = () => {
    const [open, setOpen] = useState(false);
    const handleClickAway = () => {
      setOpen(false);
    };
  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Grid>

         <Avatar
          sx={{ width: 30, height: 30 }}
          className="text-lg p-0 bg-zinc-600  rounded-full cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          S
        </Avatar>
        {open && <DropdownMenu></DropdownMenu>}
        </Grid>
     
      </ClickAwayListener>
    </React.Fragment>
  )
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState<any>();
  const dropdownRef = useRef<any>();
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 32)
  }, [])

  function calcHeight(el:any) {
    const height = el.offsetHeight;
    setMenuHeight(height + 32);
  }

  function DropdownItem(props: any) {
    return (
      <Link href="#" className="menu_item_beta_drop hover:bg-bgLightHover dark:hover:bg-bgDarkHover px-4" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className={props.leftIcon? "text-textLight dark:text-textDark bg-[#dde2e7] dark:bg-[#6f7072] icon-button": props.doneIcon? "text-textLight dark:text-textDark icon-button bg-transparent" : "icon-button invisible" }>{props.doneIcon? props.doneIcon: props.leftIcon}</span>
        <span className='text-textLight dark:text-textDark text-[1rem]'>{props.children}</span>
        <span className="text-textLight dark:text-textDark icon-right ">{props.rightIcon}</span>
      </Link>
    );
  }

  return (
    <div className="dropdown_nav_beta border border-gray-300 p-5 bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu_beta_drop">
          <DropdownItem leftIcon={<SubscriptionsIcon/>} path="/subscriptions">Subscriptions</DropdownItem>
          <DropdownItem leftIcon={<VideoLibraryIcon/>} path="/library">Library</DropdownItem>
          <DropdownItem leftIcon={<RestoreIcon/>} path="/history">History</DropdownItem>
          <DropdownItem leftIcon={<CameraIndoorIcon/>} path="/your-videos">Your Videos</DropdownItem>
          <DropdownItem leftIcon={<WatchLaterIcon/>} path="/watch-later">Watch Later</DropdownItem>
          <DropdownItem leftIcon={<VideoCameraFrontIcon/>} path="/your-channel">Your Channel</DropdownItem>
          <DropdownItem
            leftIcon={<SwitchVideoIcon/>}
            rightIcon={<ChevronRightIcon/>}
            goToMenu="switch-channel"
            path="#">
            Switch Channel
          </DropdownItem>
          <DropdownItem
            leftIcon={<SettingsIcon/>}
            rightIcon={<ChevronRightIcon/>}
            goToMenu="settings"
            path="#">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<TranslateIcon/>}
            rightIcon={<ChevronRightIcon/>}
            goToMenu="language"
            path="#">
            Language
          </DropdownItem>
          <DropdownItem
            leftIcon={<DarkModeIcon/>}
            rightIcon={<ChevronRightIcon/>}
            goToMenu="theme"
            path="#">
            Theme
          </DropdownItem>
          <DropdownItem leftIcon={<LogoutIcon/>} path="/your-channel">Sign out</DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'switch-channel'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu_beta_drop">
          <div className='flex p-[0.5rem]'>

        <span className="cursor-pointer w-[30px] h-[30px] m-[2px] p-[5px] flex items-center justify-center hover:rounded-[50%] hover:bg-gray-600" onClick={()=> setActiveMenu('main')} ><KeyboardBackspaceIcon/></span>
        <h1 className='text-2xl font-semibold ml-1'>Switch Channel</h1>
          </div>
          <DropdownItem >Lets Code</DropdownItem>
          <DropdownItem doneIcon={<DoneIcon/>}>Sazzad Hossen</DropdownItem>
          <DropdownItem >Lets Develope</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu_beta_drop">
          <div className='flex p-[0.5rem]'>

        <span className="cursor-pointer w-[30px] h-[30px] m-[2px] p-[5px] flex items-center justify-center hover:rounded-[50%] hover:bg-gray-600" onClick={()=> setActiveMenu('main')} ><KeyboardBackspaceIcon/></span>
        <h1 className='text-2xl font-semibold ml-1'>Settings</h1>
          </div>
          <DropdownItem leftIcon={<AccountCircleIcon/>}>Account</DropdownItem>
          <DropdownItem leftIcon={<DownloadForOfflineIcon/>}>Downloads</DropdownItem>
          <DropdownItem leftIcon={<NotificationsNoneIcon/>}>Notifications</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'language'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu_beta_drop">
          <div className='flex p-[0.5rem]'>

        <span className="cursor-pointer w-[30px] h-[30px] m-[2px] p-[5px] flex items-center justify-center hover:rounded-[50%] hover:bg-gray-600" onClick={()=> setActiveMenu('main')} ><KeyboardBackspaceIcon/></span>
        <h1 className='text-2xl font-semibold ml-1'>Language</h1>
          </div>
          <DropdownItem doneIcon={<DoneIcon/>}>English</DropdownItem>
          <DropdownItem >Mandarin</DropdownItem>
          <DropdownItem >Hindi</DropdownItem>
          <DropdownItem >Spanish</DropdownItem>
          <DropdownItem >French</DropdownItem>
          <DropdownItem >Arabic</DropdownItem>
          <DropdownItem >Russian</DropdownItem>
          <DropdownItem >Portuguese</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'theme'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu_beta_drop">
          <div className='flex p-[0.5rem]'>

        <span className="cursor-pointer w-[30px] h-[30px] m-[2px] p-[5px] flex items-center justify-center hover:rounded-[50%] hover:bg-gray-600" onClick={()=> setActiveMenu('main')} ><KeyboardBackspaceIcon/></span>
        <h1 className='text-2xl font-semibold ml-1'>Theme</h1>
          </div>
         <ThemeChanger/>
        </div>
      </CSSTransition>
     
     
    </div>
  );
}


export default ProfileMenu