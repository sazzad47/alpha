import React from 'react'
import {Grid} from '@mui/material'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Feed from './feed'

const Home = () => {
  return (
    <Grid container className='min-w-full mx-0 bg-[blue]'>
       <Grid item className='w-[8rem] h-[100vh] mt-[3.5rem] bg-red-600 fixed left-0 top-0 overflow-x-hidden'>
           <Sidebar/>
       </Grid>
       <Grid item className='w-full min-h-[200vh] ml-[8rem] relative'>
         <Grid className='fixed z-20 bg-[green]'>

            <Topbar/>
         </Grid>
     
           <Grid className='mt-[6rem]'>
             <Feed/>
           </Grid>
       </Grid>
    </Grid>
  )
}

export default Home