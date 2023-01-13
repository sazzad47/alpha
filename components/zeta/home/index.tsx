import React from 'react';
import {Grid} from '@mui/material';
import Main from './main';
import Topbar from './topbar';

const Home = () => {
  return (
    <Grid className='relative bg-[#f7f2f2] dark:bg-[#242526] pt-[10vh] flex flex-col items-start'>
           <Topbar/>
           <Main/>
    </Grid>
  )
}

export default Home