import React, { useContext } from 'react'
import { Avatar, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreMenus from './MoreMenus';
import { Context, StoreProps } from '../../context/store';
import { sidebarTypes } from '../../context/types';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';

const Navbar = () => {
    const { dispatch } = useContext(Context) as StoreProps;
  return (
    <Grid className="px-3 py-2 h-full flex justify-between text-textLight dark:text-textDark">
        <Grid className="flex items-center gap-3">
            <Avatar onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showProfile: true}})} src="/user.jpg" className='cursor-pointer' />
             <Grid>
                <Typography onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showProfile: true}})} className="p-0 cursor-pointer">Sazzad Hossen</Typography>
                <Typography className="p-0 text-sm opacity-[0.7]">Last seen 23 minutes ago</Typography>
             </Grid>
        </Grid>
        <Grid className="flex items-center gap-3">
            <Tooltip title="Start a voice call">
                <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButton dark:hover:bg-bgButtonDark" >
                    <CallIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Start a video call">
                <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButton dark:hover:bg-bgButtonDark" >
                    <VideocamIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Search messages">
                <IconButton onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showSearchPage: true}})} className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButton dark:hover:bg-bgButtonDark" >
                    <SearchIcon/>
                </IconButton>
            </Tooltip>
            <MoreMenus/>
        </Grid>
    </Grid>
  )
}

export default Navbar