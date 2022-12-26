import React, { useContext } from 'react'
import { Avatar, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreMenus from './MoreMenus';
import { Context, StoreProps } from '../../context/store';
import { sidebarTypes } from '../../context/types';

const Navbar = () => {
    const { dispatch } = useContext(Context) as StoreProps;
  return (
    <Grid className="px-3 py-2 h-full flex justify-between text-textLight dark:text-textDark">
        <Grid className="flex items-center gap-3">
            <Avatar onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showGroupInfo: true}})} src="/thumbnail-everest.jpg" className='cursor-pointer' />
             <Grid>
                <Typography onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showGroupInfo: true}})} className="p-0 cursor-pointer">Food lovers</Typography>
                <Typography className="p-0 text-sm opacity-[0.7]">120 members</Typography>
             </Grid>
        </Grid>
        <Grid className="flex items-center gap-3">
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