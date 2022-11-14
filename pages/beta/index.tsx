import React from 'react'
import { NextPage } from 'next'
import Beta from '../../components/beta'
import { Grid } from '@mui/material'


const Home: NextPage = () => {
  return (
    <Grid className="w-full">

      <Beta/>
    </Grid>
  )
}

export default Home