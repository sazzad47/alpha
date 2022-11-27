import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Playlists = () => {
  return (
    <Grid className="w-full p-5 text-textLight dark:text-textDark">
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <Grid key={index} xs={12} md={3} item className="flex flex-col">
            <Grid className="playlist_item relative w-full h-[10rem]">
              <Image src="/thumbnail-everest.jpg" alt="" fill />
              <Grid className="z-[1] absolute w-[50%] h-full bg-[rgba(0,0,0,0.6)] right-0 flex flex-col items-center justify-center">
                <Typography>44</Typography>
                <Grid>
                  <PlaylistPlayIcon />
                </Grid>
              </Grid>
              <Grid className="z-[2] opacity-0 hover:opacity-100 absolute w-full h-full bg-[rgba(0,0,0,0.8)] flex items-center justify-center">
                  <Grid className="flex items-center justify-center cursor-pointer">
                    <PlayArrowIcon className="text-md"/>
                  <Typography className="pl-0 text-sm">Play All</Typography>
                  </Grid>
              </Grid>
            </Grid>
            <Typography className="pl-0 font-medium mt-2">
              Competitive Programming
            </Typography>
            <Link href="/beta/channels/222/playlists/23">
              <Typography className="mt-3 pl-0 text-sm opacity-[0.7] text-textLight dark:text-textDark">
                View full playist
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Playlists;
