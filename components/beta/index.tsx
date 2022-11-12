import React from 'react'
import { ThemeProvider } from "next-themes";
import {Grid} from '@mui/material'
import Navbar from './navbar'

const Beta = () => {
  return (
    <React.Fragment>
       <ThemeProvider enableSystem={true} attribute="class">
        
      <Grid className='min-h-[100vh] overflow-y-scroll bg-[#eee] dark:bg-[#242526]'>

        <Navbar/>
      </Grid>
       </ThemeProvider>
    </React.Fragment>
  )
}

export default Beta