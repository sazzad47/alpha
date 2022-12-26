import React from 'react'
import { Avatar, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreMenus from './MoreMenus';

const Navbar = () => {
  return (
    <Grid className="px-3 py-2 h-full flex justify-between text-textLight dark:text-textDark">
        <Grid className="flex items-center gap-3">
            <Avatar src="/user.jpg" />
             <Grid>
                <Typography className="p-0 ">Sazzad Hossen</Typography>
                <Typography className="p-0 text-sm opacity-[0.7]">Last seen 23 minutes ago</Typography>
             </Grid>
        </Grid>
        <Grid className="flex items-center gap-3">
            <Tooltip title="Search messages">
                <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButton dark:hover:bg-bgButtonDark" >
                    <SearchIcon/>
                </IconButton>
            </Tooltip>
            <MoreMenus/>
        </Grid>
    </Grid>
  )
}

export default Navbar