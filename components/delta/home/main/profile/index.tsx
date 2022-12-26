import React from 'react'
import { Avatar, Divider, Grid, Typography } from '@mui/material'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <Grid className="absolute w-full h-[90vh] bg-bgLight dark:bg-bgDark flex flex-col">
      <Grid className="h-[10%] bg-[#e0d9d9] dark:bg-[#31363b]">
        <Navbar/>
      </Grid>
        <Grid className="w-full p-5 flex flex-col items-center justify-center">
           <Avatar src="/user.jpg" className='w-[150px] h-[150px]' />
           <Typography className="p-0 my-5 text-2xl">Sazzad Hossen</Typography>
           <Divider className='w-full'/>
        </Grid>
    </Grid>
  )
}

export default Profile