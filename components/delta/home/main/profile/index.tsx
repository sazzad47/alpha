import React from "react";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Info from "./Info";

const Profile = () => {
  return (
    <Grid className="w-[calc(100%-30vw)] mt-[10vh] h-[calc(100%-10vh)] bg-bgLight dark:bg-bgDark flex flex-col">
      <Grid className="h-[10%] bg-[#e0d9d9] dark:bg-[#31363b]">
        <Navbar />
      </Grid>
      <Grid className="h-[90%] overflow-y-auto">
      <Grid className="w-full p-5 flex flex-col items-center justify-center">
        <Avatar src="/user.jpg" className="w-[150px] h-[150px]" />
        <Typography className="p-0 my-5 text-2xl">Sazzad Hossen</Typography>
        <Divider className="w-full" />
      </Grid>
      <Grid className="w-full p-5">
        <Info/>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
