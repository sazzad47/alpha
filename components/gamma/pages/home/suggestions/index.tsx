import React from 'react'
import {Grid, Typography, Button} from '@mui/material'
import Image from 'next/image'

const index = () => {
  return (
    <React.Fragment>
      <Grid className="w-full mt-5">
        <Typography className="p-0 pl-5 text-textLight dark:text-textDark text-lg">
          Suggested for you
        </Typography>
      </Grid>
      <Grid className="w-full text-textLight dark:text-textDark p-5">
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <Grid key={i} item xs={6} >
              <Grid className="flex flex-col bg-bgLight dark:bg-bgDark p-3">
              <Grid className="relative w-full h-[15rem]">
                <Image src="/thumbnail-coding.jpg" alt="" fill />
              </Grid>
              <Typography className="p-0 text-lg my-2">Lets Code</Typography>
              <Typography className="p-0 text-sm mb-2">12k people like this</Typography>
              <Grid className="flex flex-col gap-2" >
              <Button fullWidth className="focus:outline-none normal-case text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">Like</Button>
              </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default index