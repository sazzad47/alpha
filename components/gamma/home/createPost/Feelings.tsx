import React from "react";
import { Grid, IconButton, Typography, Divider, Avatar } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  setShowBody: Function;
}

const Feelings = ({ setShowBody }: Props) => {
  return (
    <Grid className="audience_Modal text-textLight dark:text-textDark p-2">
      <Grid className="relative flex items-center justify-center w-full h-[2rem]">
        <Typography className="p-0">How are you feeling?</Typography>
        <IconButton
          onClick={() => setShowBody(true)}
          className="focus:outline-none text-textLight dark:text-textDark absolute left-0 top-0 w-[30px] h-[30px] bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Grid>
      <Divider className="my-3" />
      <Grid>
        <Grid className="min-w-full flex items-center justify-start h-[2.5rem] bg-bgButton dark:bg-bgButtonDark rounded-3xl px-2">
        <SearchIcon/>
        <input className="focus:outline-none w-full bg-bgButton dark:bg-bgButtonDark"/>
        </Grid>
      </Grid>
      {/* <Grid container>
        <Grid item xs={6} className="flex justify-start items-center">
            <Avatar sx={{width: '40px', height: '40px'}}>icon</Avatar>
            <Typography className="p-0 pl-2">happy</Typography>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Feelings;
