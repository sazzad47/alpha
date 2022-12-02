import React from 'react'
import {Grid} from '@mui/material'
import CreatePost from './CreatePost'
import Posts from './posts'

const Feed = () => {
  return (
    <Grid className='flex justify-center flex-col w-[calc(100%-30rem)] items-center ml-[15rem]'>
     
      <CreatePost/>
      <Posts/>
    </Grid>
  )
}

export default Feed