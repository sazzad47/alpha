import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import Menubar from "./Menubar";

const SideBar = () => {
  return (
    <Grid className="w-full h-[100vh] flex flex-col">
      <Grid className="h-[20%]">
        <Menubar/>
      </Grid>
      <Grid className="h-[80%] max-h-[80%] overflow-y-auto">
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
            <Grid
              key={i}
              className="px-3 py-3 cursor-pointer flex items-start justify-between hover:bg-bgButton dark:hover:bg-bgButtonDark "
            >
              <Grid className="flex items-center gap-2">
                <Avatar src="/user.jpg" className="w-[50px] h-[50px]" />
                <Grid className="flex flex-col">
                  <Typography className="p-0">Sazzad Hossen</Typography>
                  <Typography className="p-0 text-sm opacity-[0.7]">How are you?</Typography>
                </Grid>
              </Grid>
              <Typography className="p-0">6.33 AM</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideBar;
