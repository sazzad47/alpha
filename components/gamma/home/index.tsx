import React from 'react';
import {Grid} from '@mui/material';
import SideBar from './SideBar';
import Feed from './feed';
import RightBar from './RightBar';

const Home = () => {
  return (
    <Grid className='flex items-start justify-between px-2 py-5'>
           <SideBar/>
           <Feed/>
           <RightBar/>
    </Grid>
  )
}

export default Home