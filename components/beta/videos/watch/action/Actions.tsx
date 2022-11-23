import React from 'react'
import {Grid, Button } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import MoreActions from './MoreActions'


const Actions = () => {

  return (
    <Grid className='flex justify-between'>
        <Button className='ml-2 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize'> <ThumbUpOffAltIcon className="mr-1" /> Like</Button>
        <Button className='ml-2 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize'> <ThumbDownOffAltIcon className="mr-1 mb-[-4px]" /> Dislike</Button>
        <MoreActions/>
    </Grid>
  )
}

export default Actions