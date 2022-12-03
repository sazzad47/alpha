import React from 'react'
import {Grid, Avatar, Typography} from '@mui/material'
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import PostModal from './PostModal';


const CreatePost = () => {
  return (
    <Grid className='text-textLight dark:text-textDark w-full p-5 bg-bgLight dark:bg-bgDark flex flex-col'>
      <Grid className=' flex items-center'>
        <Avatar src="/user.jpg"/>
        <PostModal/>
      </Grid>
      <hr className='my-3'/>
      <Grid className='w-full flex justify-between'>
        <Grid className='flex cursor-pointer w-1/3 px-3 py-2 items-center justify-center hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'>
            <CollectionsIcon/>
            <Typography className='pl-2'>Photo</Typography>
        </Grid>
        <Grid className='flex cursor-pointer w-1/3 px-3 py-2 items-center justify-center hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'>
            <VideoLibraryIcon/>
            <Typography className='pl-2'>Video</Typography>
        </Grid>
        <Grid className='flex cursor-pointer w-1/3 px-3 py-2 items-center justify-center hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'>
            <MoodIcon/>
            <Typography className='pl-2'>Feeling</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CreatePost