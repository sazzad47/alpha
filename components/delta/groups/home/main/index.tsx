import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Main = () => {
  return (
    <Grid className="w-full bg-bgLight dark:bg-bgDark min-h-[90vh] max-h-[90vh] overflow-y-auto p-5">
      <Grid className="w-full grid grid-cols-4 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
          <Grid key={i} className="flex flex-col items-center gap-2">
            <Grid className="relative w-full h-[5rem]">
              <Image src="/thumbnail-everest.jpg" alt="" fill />
            </Grid>
            <Grid className="w-full">
              <Typography className="p-0 line-clamp-1">Bike Lovers</Typography>
              <Typography className="p-0 text-sm opacity-[0.7]">
                120 members
              </Typography>
            </Grid>
            <Button
              fullWidth
              className="text-textLight dark:text-textDark focus:outline-none bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover normal-case"
            >
              Join
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Main;
