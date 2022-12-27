import React from "react";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Info from "./Info";
import Members from "./Members";

const GroupInfo = () => {
  return (
    <Grid className="absolute w-full h-[90vh] bg-bgLight dark:bg-bgDark flex flex-col">
      <Grid className="h-[10%] bg-[#e0d9d9] dark:bg-[#31363b]">
        <Navbar />
      </Grid>
      <Grid className="h-[90%] overflow-y-auto">
      <Grid className="w-full p-5 flex flex-col items-center justify-center">
        <Avatar src="/thumbnail-everest.jpg" className="w-[150px] h-[150px]" />
        <Typography className="p-0 mt-5 text-2xl">Food lovers</Typography>
        <Grid className="mb-3"><Members/></Grid>
        <Divider className="w-full" />
      </Grid>
      <Grid className="w-full px-5">
        <Info/>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default GroupInfo;
