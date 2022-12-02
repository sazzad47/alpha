import * as React from 'react';
import {Grid, Typography, Button, Avatar} from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Like from "../../../../../public/icons/like.png";
import Love from "../../../../../public/icons/love.png";
import Sad from "../../../../../public/icons/sad.png";
import Wow from "../../../../../public/icons/wow.png";
import ReactList from './ReactList';
import { useTheme } from 'next-themes';



export default function ReactModal() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Grid onClick={handleClickOpen} className="flex cursor-pointer">
        <Avatar src={Like.src} sx={{ width: "20px", height: "20px" }} />
        <Avatar src={Love.src} sx={{ width: "20px", height: "20px" }} />
        <Avatar src={Wow.src} sx={{ width: "20px", height: "20px" }} />
        <Typography className="p-0 pl-2 text-sm opacity-[0.7]">200</Typography>
      </Grid>
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: currentTheme === "dark"? "#474849": "#fff", minWidth:"30rem"
          }
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Grid className='flex flex-col'>
          
          <Grid className="flex justify-between items-center p-4">
            <ReactList handleClose ={handleClose} />
            
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}