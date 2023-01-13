import React from 'react'
import { Grid } from '@mui/material'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import ChatBox from './ChatBox'

const Chat = () => {
  return (
    <Grid className="w-full h-[90vh] flex flex-col">
        <Grid className="h-[10%] bg-[#e0d9d9] dark:bg-[#31363b]">
            <Navbar/>
        </Grid>
        <Grid className="h-[80%] max-h-[80%] bg-[rgb(3,252,252)] dark:bg-[#4b2a2a] overflow-y-auto">
            <ChatBox/>
        </Grid>
        <Grid className="w-full h-[10%] flex items-center bg-[#e0d9d9] dark:bg-[#31363b]">
            <BottomNav/>
        </Grid>
    </Grid>
  )
}

export default Chat