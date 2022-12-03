import React from 'react'
import {Grid} from '@mui/material'

import Posts from './posts'
import CreatePost from '../createPost'

const Feed = () => {
  return (
    <Grid className='flex justify-center flex-col w-[calc(100%-30rem)] items-center ml-[15rem]'>
     
      <CreatePost/>
      <Posts/>
    </Grid>
  )
}

export default Feed