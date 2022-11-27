import React from 'react'
import {Grid, Typography, Avatar, Button} from '@mui/material'

const Channels = () => {
  return (
    <Grid className='w-full flex flex-col items-start p-5'>
      <Typography className='pl-0 text-textLight dark:text-textDark'>
        Featured Channels
      </Typography>
        <Grid container spacing={2} className='my-5'>
             <Grid item className='flex flex-col items-center'>
                <Avatar src='/user.jpg' sx={{width: 100, height: 100}}/>
                <Typography className='mt-2 font-semibold text-textLight dark:text-textDark'>Lets Code</Typography>
                <Typography className='text-textLight dark:text-textDark opacity-[0.7]'>162K subscribers</Typography>
                <Button className="mt-3 px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize">
                Member
              </Button>
             </Grid>
             <Grid item className='flex flex-col items-center'>
                <Avatar src='/user.jpg' sx={{width: 100, height: 100}}/>
                <Typography className='mt-2 font-semibold text-textLight dark:text-textDark'>Lets Develop</Typography>
                <Typography className='text-textLight dark:text-textDark opacity-[0.7]'>162K subscribers</Typography>
                <Button className="mt-3 px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize">
                Member
              </Button>
             </Grid>
             <Grid item className='flex flex-col items-center'>
                <Avatar src='/user.jpg' sx={{width: 100, height: 100}}/>
                <Typography className='mt-2 font-semibold text-textLight dark:text-textDark'>Learn</Typography>
                <Typography className='text-textLight dark:text-textDark opacity-[0.7]'>162K subscribers</Typography>
                <Button className="mt-3 px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize">
                Member
              </Button>
             </Grid>
        </Grid>
    </Grid>
  )
}

export default Channels