import React from 'react';
import {Grid} from '@mui/material';
import Main from './main';
import Topbar from './topbar';

const Home = () => {
  return (
    <Grid className='h-[90vh] overflow-y-auto bg-[#f7f2f2] dark:bg-[#242526] mt-[10vh] flex flex-col items-start'>
           <Topbar/>
           <Main/>
    </Grid>
  )
}

export default Home