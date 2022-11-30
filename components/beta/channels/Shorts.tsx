import React from 'react'
import {Grid, Typography} from '@mui/material'
import Image from 'next/image'
import CardMenus from './CardMenus'
const Shorts = () => {
  return (
    <Grid container spacing={1} className='p-5'>
           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
            <Grid key={index} item xs={12} sm={4} md={3} lg={2}>
            <Grid container>
              <Grid item className="relative w-full h-[17rem]">
                <Image src="/thumbnail-everest.jpg" alt="" fill />
              </Grid>
              <Grid item className="flex flex-col items-start">
                <Grid className="mt-2 flex justify-between items-start">
                  <Typography className="line-clamp-2 pl-0 font-medium text-[1rem] text-textLight dark:text-textDark">
                    Who created this beautiful world?
                  </Typography>
                  <Grid className="mt-2">
                    <CardMenus />
                  </Grid>
                </Grid>
                <Typography className="mt-2 pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  210Kviews • 6 days ago
                </Typography>
              </Grid>
            </Grid>
             </Grid>
          ))}
    </Grid>
  )
}

export default Shorts