import React from "react";
import { Grid, Typography, IconButton, Avatar, Button, Divider } from "@mui/material";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

const RightBar = () => {
  return (
    <Grid className="w-[15rem] h-[90vh] pb-5 fixed overflow-y-auto right-0 bg-bgLight dark:bg-bgDark flex flex-col text-textLight dark:text-textDark p-3">
      <Grid className="flex flex-col">
        <Grid className="flex items-center justify-between">
          <Typography className="p-0">Friend requests</Typography>
          <Link href="#">
            <Typography className="p-0 text-sm text-textLight dark:text-textDark">
              See all
            </Typography>
          </Link>
        </Grid>
        <Grid className="flex items-start mt-2">
          <Avatar src="/user.jpg" />
          <Grid className="w-full flex flex-col ml-2">
            <Typography className="p-0">Sazzad Hossen</Typography>
            <Typography className="p-0 text-sm line-clamp-2">
              1 mutual friend
            </Typography>
            <Grid className="mt-1 flex items-center justify-between">
              <Button className="focus:outline-none bg-[#f0e1e1] hover:bg-bgButtonHover dark:bg-[#707075] dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark capitalize text-sm">
                Confirm
              </Button>
              <Button className="focus:outline-none bg-bgLight hover:bg-bgButtonHover dark:bg-bgDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark capitalize text-sm">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Divider className="my-4" />
      <Grid className="flex flex-col">
        <Typography className="p-0 mb-2">Create</Typography>
        <Grid className="py-1 px-2 rounded-[5px] flex items-center cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
          <IconButton className="w-[30px] h-[30px] focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-[#707075]">
            <AiOutlinePlus />
          </IconButton>
          <Typography className="pl-2 text-sm">Create new page</Typography>
        </Grid>
        <Grid className="py-1 px-2 rounded-[5px] flex items-center cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
          <IconButton className="w-[30px] h-[30px] focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-[#707075]">
            <AiOutlinePlus />
          </IconButton>
          <Typography className="pl-2 text-sm">Create new group</Typography>
        </Grid>
      </Grid>
      <Divider className="my-4" />
      <Grid>
        <Typography className="p-0 mb-1">Contacts</Typography>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <Grid
            key={i}
            className="rounded-[5px] flex items-center hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover p-2"
          >
            <Avatar sx={{ width: "30px", height: "30px" }} src="/user.jpg" />
            <Typography className="pl-2 text-sm">Sazzad Hossen</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default RightBar;
