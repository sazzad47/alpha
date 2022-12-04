import React from "react";
import { Grid, IconButton, Typography, Divider, Avatar } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PublicIcon from "@mui/icons-material/Public";
import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";
import { AudienceProps } from "./PostModal";

interface Props {
  setShowBody: Function;
  postAudience: AudienceProps;
  setPostAudience: Function;
}

const Audience = ({ setShowBody, setPostAudience, postAudience }: Props) => {
  return (
    <Grid className="audience_Modal text-textLight dark:text-textDark p-2">
      <Grid className="relative flex items-center justify-center w-full h-[2rem]">
        <Typography className="p-0">Post audience</Typography>
        <IconButton
          onClick={() => setShowBody(true)}
          className="focus:outline-none text-textLight dark:text-textDark absolute left-0 top-0 w-[30px] h-[30px] bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Grid>
      <Divider className="my-3" />
      <Grid>
        <Typography className="p-0 text-lg">Who can see your post?</Typography>
        <Typography className="p-0 text-sm opacity-[0.7]">
          Your post will show up in Feed, on your profile and in search results.
        </Typography>
        <Typography className="p-0 mt-3 text-sm opacity-[0.7]">
          Your default audience is set to{" "}
          <span className="opacity-[1] font-semibold">Public</span>, but you can
          change the audience of this specific post.
        </Typography>
        <Grid className="mt-3">
          <Grid
            component="label"
            htmlFor="public"
            className="w-full h-[4rem] px-3 cursor-pointer flex items-center justify-between hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          >
            <Grid className="flex items-center">
              <Avatar>
                <PublicIcon />
              </Avatar>
              <Grid className="flex flex-col">
                <Typography className="pl-3 p-0 text-lg font-semibold">
                  Public
                </Typography>
                <Typography className="pl-3 p-0 text-sm opacity-[0.7]">
                  Anyone on or off Gamma
                </Typography>
              </Grid>
            </Grid>
            <input
              type="radio"
              name="audience"
              id="public"
              className="w-[20px] h-[20px]"
              checked={postAudience.audience === "Public"}
              onChange={() => {
                setPostAudience({
                  audience: "Public",
                  icon: <PublicIcon className="text-sm" />,
                });
                setShowBody(true);
              }}
            />
          </Grid>
          <Grid
            component="label"
            htmlFor="friends"
            className="w-full h-[4rem] px-3 cursor-pointer flex items-center justify-between hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          >
            <Grid className="flex items-center">
              <Avatar>
                <GroupIcon />
              </Avatar>
              <Grid className="flex flex-col">
                <Typography className="pl-3 p-0 text-lg font-semibold">
                  Friends
                </Typography>
                <Typography className="pl-3 p-0 text-sm opacity-[0.7]">
                  Your friends on Gamma
                </Typography>
              </Grid>
            </Grid>
            <input
              type="radio"
              name="audience"
              id="friends"
              className="w-[20px] h-[20px]"
              checked={postAudience.audience === "Friends"}
              onChange={() => {
                setPostAudience({
                  audience: "Friends",
                  icon: <GroupIcon className="text-sm" />,
                });
                setShowBody(true);
              }}
            />
          </Grid>
          <Grid
            component="label"
            htmlFor="onlyMe"
            className="w-full h-[4rem] px-3 cursor-pointer flex items-center justify-between hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          >
            <Grid className="flex items-center">
              <Avatar>
                <LockIcon />
              </Avatar>
              <Grid className="flex flex-col">
                <Typography className="pl-3 p-0 text-lg font-semibold">
                  Only me
                </Typography>
              </Grid>
            </Grid>
            <input
              type="radio"
              name="audience"
              id="onlyMe"
              className="w-[20px] h-[20px]"
              checked={postAudience.audience === "Only me"}
              onChange={() => {
                setPostAudience({
                  audience: "Only me",
                  icon: <LockIcon className="text-sm" />,
                });
                setShowBody(true);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Audience;
