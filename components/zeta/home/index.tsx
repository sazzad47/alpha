import React from 'react';
import {Grid} from '@mui/material';
import Topbar from './topbar';
import Main from './main';
import Sidebar from './sidebar';

const Home = () => {
  return (
    <Grid className='z-[-1] bg-[#f7f2f2] dark:bg-[#242526] pt-[10vh] flex items-start'>
           <Sidebar/>
           <Main/>
    </Grid>
  )
}

export default Home