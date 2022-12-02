import React from 'react';
import {Grid} from '@mui/material';
import SideBar from './SideBar';
import Feed from './feed';
import RightBar from './RightBar';

const Home = () => {
  return (
    <Grid className='bg-[#f7f2f2] dark:bg-[#242526] pt-[100px] flex items-start justify-between px-2 py-5'>
           <SideBar/>
           <Feed/>
           <RightBar/>
    </Grid>
  )
}

export default Home