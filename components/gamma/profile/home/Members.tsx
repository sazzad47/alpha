import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Members = () => {
  return (
    <Grid className="bg-bgLight dark:bg-bgDark p-4 my-5">
      <Grid className="flex justify-between items-center">
        <Typography className="p-0 font-bold">Members</Typography>
        <Button className="focus:outline-none bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark normal-case">
          See all members
        </Button>
      </Grid>
      <Typography className="p-0 opacity-[0.8]">1.2k members</Typography>
      <Grid container spacing={2} className="mt-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
          <Grid key={i} item xs={4} className="flex flex-col">
            <Grid className="cursor-pointer relative w-full h-[8rem] rounded-lg overflow-hidden">
              <Image src="/user.jpg" alt="" fill />
            </Grid>
            <Typography className="p-0 mt-1 cursor-pointer text-sm">
              Parvez Ahmed
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Members;
