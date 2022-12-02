import React from 'react'
import {Grid} from '@mui/material'
import CreatePost from './CreatePost'
import Posts from './posts'

const Feed = () => {
  return (
    <Grid className='flex flex-col w-[50%] items-center ml-[15rem]'>
     
      <CreatePost/>
      <Posts/>
    </Grid>
  )
}

export default Feed