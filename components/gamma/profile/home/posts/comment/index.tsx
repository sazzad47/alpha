import React from 'react'
import LeaveComment from './LeaveComment'
import {Grid} from '@mui/material'
import Comments from './Comments'
import SortComment from './SortComment'

const Index = () => {
  return (
    <Grid container className='flex flex-col'>
       <SortComment/>
       <LeaveComment/>
       <Comments/>
    </Grid>
  )
}

export default Index