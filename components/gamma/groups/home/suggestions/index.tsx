import React from 'react'
import {Grid, Typography, Button} from '@mui/material'
import Carousel from './Carousel'
import Image from 'next/image'

const index = () => {
  return (
    <Grid className="text-textLight dark:text-textDark mt-4 w-full p-5 bg-bgLight dark:bg-bgDark flex flex-col">
      <Typography className='p-0 text-lg' >Suggested for you</Typography>
          <Carousel show={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <Grid key={index} container className="p-2">
              <Grid item className="relative w-full h-[13rem]">
                <Image src="/thumbnail-everest.jpg" alt="" fill />
              </Grid>
              <Grid item className="w-full flex flex-col items-start">
                <Grid className="mt-2 flex items-start">
                  <Typography className="line-clamp-2 pl-0 font-medium text-[1rem] text-textLight dark:text-textDark">
                    Coders Bangladesh
                  </Typography>
                </Grid>
                <Typography className="pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  214K members 
                </Typography>
                <Button fullWidth className='focus:outline-none mt-2 text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'> Join </Button>
              </Grid>
            </Grid>
          ))}
        </Carousel>
    </Grid>
  )
}

export default index