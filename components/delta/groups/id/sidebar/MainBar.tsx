import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import Menubar from "./Menubar";

const MainBar = () => {
  return (
    <Grid className="absolute w-full h-full flex flex-col">
      <Grid className="h-[20%]">
        <Menubar />
      </Grid>
      <Grid className="h-[80%] max-h-[80%] overflow-y-auto">
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
            <Grid
              key={i}
              className="px-3 py-3 cursor-pointer flex items-start justify-between hover:bg-bgButton dark:hover:bg-bgButtonDark "
            >
              <Grid className="w-full flex items-center gap-4">
                <Avatar
                  src="/thumbnail-everest.jpg"
                  className="w-[50px] h-[50px]"
                />
                <Grid className="flex-1 flex flex-col">
                  <Grid className="flex justify-between items-center">
                    <Typography className="p-0 line-clamp-1">
                      Food Lovers
                    </Typography>
                    <Typography className="p-0 text-xs">6.33 AM</Typography>
                  </Grid>
                  <Typography className="p-0 text-sm opacity-[0.7] line-clamp-1">
                    Shafin: Chicken salad recipe uses a few simple ingredients
                    to create a cold, creamy salad
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainBar;
