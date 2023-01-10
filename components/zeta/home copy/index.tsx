import React from 'react';
import {Grid} from '@mui/material';
import SideBar from './sidebar';
import Main from './main';

const Home = () => {
  return (
    <Grid className='bg-[#f7f2f2] dark:bg-[#242526] pt-[10vh] flex items-start justify-between'>
           <SideBar/>
           <Main/>
    </Grid>
  )
}

export default Home