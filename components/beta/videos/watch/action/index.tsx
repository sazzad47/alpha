import React from 'react'
import {Grid, Avatar, Typography, Button} from '@mui/material'
import channelPhoto from "../../../../../public/user.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Notification from './Notification'
import Actions from './Actions';
import Link from 'next/link';

const Index = () => {
  
  return (
    <Grid container className='mt-3 flex justify-between'>
       <Grid item className='flex items-center justify-start'>
       <Link href="/beta/channels/222"><Avatar alt="Sazzad Hossen" src={`${channelPhoto.src}`} /></Link>
        <Grid>
        <Link href="/beta/channels/222"><Typography className="pl-3 font-bold text-textLight dark:text-textDark" >Explore <CheckCircleIcon className='text-sm' /> </Typography></Link>
            <Typography className="pl-3 text-sm opacity-[0.8] text-textLight dark:text-textDark" >162K Members</Typography>
        </Grid>
        <Grid>
            <Button className='focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize'>Member</Button>
        </Grid>
         <Notification/>
       </Grid>
       <Grid item>
        <Actions/>
       </Grid>
    </Grid>
  )
}

export default Index