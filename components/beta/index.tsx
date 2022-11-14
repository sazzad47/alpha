import React from 'react'
import { ThemeProvider } from "next-themes";
import {Grid} from '@mui/material'
import Navbar from './navbar'
import Home from './home';

const Beta = () => {
  return (
    <React.Fragment>
       <ThemeProvider enableSystem={true} attribute="class">
        
      <Grid className='min-h-[100vh] min-w-full bg-[#eee] dark:bg-[#242526]'>

        <Navbar/>
        {/* <Grid className='mt-16 w-full'>
        <Home/>
         
        </Grid> */}
      </Grid>
       </ThemeProvider>
    </React.Fragment>
  )
}

export default Beta