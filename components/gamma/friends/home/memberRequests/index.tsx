import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

const MemberRequests = () => {
  
  return (
    <React.Fragment>
      <Grid className="w-full mt-5">
        <Typography className="p-0 text-textLight dark:text-textDark text-lg">
          Member requests
        </Typography>
      </Grid>
      <Grid className="w-full text-textLight dark:text-textDark mt-5 p-5 bg-bgLight dark:bg-bgDark">
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <Grid item xs={4} className="flex flex-col">
              <Grid className="relative w-full h-[15rem]">
                <Image src="/user.jpg" alt="" fill />
              </Grid>
              <Typography className="p-0 text-lg my-2">Siam Ahmed</Typography>
              <Grid className="flex flex-col gap-2" >
              <Button fullWidth className="focus:outline-none bg-bgButtonSecondary dark:bg-bgButtonSecondaryDark hover:bg-bgButtonSecondaryHover dark:hover:bg-bgButtonSecondaryDarkHover text-textDark normal-case">Confirm</Button>
              <Button fullWidth className="normal-case text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">Delete</Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MemberRequests;
