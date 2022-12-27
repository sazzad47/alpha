import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const Info = () => {
  return (
    <Grid container className="w-full flex flex-col pb-5">
      <Typography className="p-0 text-lg">Media</Typography>
      <Grid className="w-full flex flex-wrap gap-3">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((_,i)=> (
          <Grid key={i} className="w-[calc(20%-10px)] h-[5rem]">
            <Grid className="relative w-full h-full">
             <Image src="/thumbnail-everest.jpg" alt="" fill />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Info;
