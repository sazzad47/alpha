import React from 'react'
import { Grid } from '@mui/material'
import Feed from './feed'

const Home = () => {
  return (
    <Grid className='flex justify-center flex-col w-[calc(100%-20rem)] items-center ml-[20rem]'>
      <Feed/>
    </Grid>
  )
}

export default Home