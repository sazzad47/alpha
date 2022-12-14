import React from 'react'
import { Grid } from '@mui/material'
import MemberRequests from './memberRequests'
import Suggestions from './suggestions'

const Home = () => {
  return (
    <Grid className='flex justify-center flex-col w-[calc(100%-20rem)] items-center ml-[20rem]'>
      <MemberRequests/>
      <Suggestions/>
    </Grid>
  )
}

export default Home