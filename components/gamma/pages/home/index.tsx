import React from 'react'
import { Grid } from '@mui/material'
import Suggestions from './suggestions'


const Home = () => {
  return (
    <Grid className='flex justify-center flex-col w-[calc(100%-20rem)] items-center ml-[20rem]'>
      <Suggestions/>
    </Grid>
  )
}

export default Home