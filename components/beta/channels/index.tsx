import React from 'react'
import {Grid, Avatar, Typography, Tooltip, Button} from '@mui/material'
import Image from 'next/legacy/image'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Notification from '../videos/watch/action/Notification';

const Index = () => {
  return (
    <Grid container className='flex flex-col pt-[3rem] bg-[#eee] dark:bg-[#242526]'>
        <Grid item className='relative w-full h-[30vh]'>
           <Image src="/channelBanner.jpg" alt="" layout='fill' />
        </Grid>
        <Grid item className='w-full'>
          <Grid container className='p-5 flex justify-between'>
                
          <Grid item className='flex items-center'>
             <Avatar src="/user.jpg" sx={{width:'56px', height:'56px'}} />
             <Grid className='text-textLight dark:text-textDark ml-5 flex flex-col'>
               <Typography className='pl-0 text-xl font-semibold'>
                Explore <Tooltip title="Verified"><CheckCircleIcon/></Tooltip>
               </Typography>
               <Typography className='pl-0 opacity-[0.8]'>
                @explore 
               </Typography>
               <Typography className='pl-0 opacity-[0.8]'>
                162K Members
               </Typography>
             </Grid>
          </Grid>
          <Grid item className='flex items-center'>
          <Button className='px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize'>Member</Button>
             <Notification/>
          </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default Index