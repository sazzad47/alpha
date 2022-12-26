import React, { useContext } from 'react'
import { Grid, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Context, StoreProps } from '../../context/store';
import { sidebarTypes } from '../../context/types';

const Navbar = () => {
    const { dispatch } = useContext(Context) as StoreProps;
  return (
    <Grid className="px-3 py-2 h-full flex justify-start text-textLight dark:text-textDark">
        <Grid className="flex items-center gap-3">
               <IconButton onClick={()=> dispatch({type: sidebarTypes.CHANGE_SIDEBAR_STATE, payload: {showChat: true}})} className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButton dark:hover:bg-bgButtonDark" >
                    <CloseIcon/>
                </IconButton>
                <Typography className="p-0 ">Search Messages</Typography>
        </Grid>
    </Grid>
  )
}

export default Navbar