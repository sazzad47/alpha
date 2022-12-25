import React from 'react'
import { Avatar, Divider, Grid, Typography } from '@mui/material'

const Profile = () => {
  return (
    <Grid className="w-full h-full flex flex-col items-center justify-start bg-[#e0d9d9] dark:bg-[#31363b]">
        <Grid className="w-full p-5 flex flex-col items-center justify-center">
           <Avatar src="/user.jpg" className='w-[150px] h-[150px]' />
           <Typography className="p-0 my-5 text-2xl">Sazzad Hossen</Typography>
           <Divider className='w-full'/>
        </Grid>
    </Grid>
  )
}

export default Profile