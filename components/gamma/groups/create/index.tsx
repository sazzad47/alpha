import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import GroupPrivacy from "../../common/GroupPrivacy";

const Create = () => {
  return (
    <Grid className="min-h-[100vh] text-textLight dark:text-textDark bg-bgLightPrimary dark:bg-bgDarkPrimary pt-[100px] flex items-center justify-center px-2 py-5">
      <Grid className="min-w-[25rem] bg-bgLight dark:bg-bgDark p-5">
        <Grid className="flex flex-col gap-3 mb-3">
        <Typography className="p-0 text-lg">Create a Group</Typography>
        </Grid>
        <form>
          <Grid className="flex flex-col gap-3">
            <Grid className="flex flex-col gap-2">
              <label>Group Name</label>
              <input
                className="w-full h-[3rem] px-2 focus:outline outline-offset-2 outline-pink-500 bg-bgButton dark:bg-bgButtonDark border rounded-md"
                placeholder="Enter group name"
              />
            </Grid>
            <Grid className="flex flex-col gap-2">
              <label>Privacy</label>
              <GroupPrivacy/>
            </Grid>
            <Button className="focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover normal-case">Create</Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Create;
