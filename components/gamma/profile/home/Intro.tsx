import { Grid, Typography, Divider } from "@mui/material";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const Intro = () => {
  return (
    <Grid className="bg-bgLight dark:bg-bgDark p-4">
      <Typography className="p-0 font-bold">Intro</Typography>
      <Typography className="p-0 text-center mt-4 mb-2">
        Software Developer
      </Typography>
      <Divider className="text-textLight dark:text-textDark mb-5" />
      <Grid>
        <Grid className="flex items-center mb-3">
          <WorkIcon className="mr-3" />
          <Typography className="p-0">
            Chief Web Developer at SJK Labs
          </Typography>
        </Grid>
        <Grid className="flex items-center mb-3">
          <SchoolIcon className="mr-3" />
          <Typography className="p-0">
            Studied at Jahangirnagar University
          </Typography>
        </Grid>
        <Grid className="flex items-center mb-3">
          <HomeIcon className="mr-3" />
          <Typography className="p-0">Lives in Dhaka</Typography>
        </Grid>
        <Grid className="flex items-center mb-3">
          <PlaceIcon className="mr-3" />
          <Typography className="p-0">From Rangpur</Typography>
        </Grid>
        <Grid className="flex items-center mb-3">
          <FavoriteIcon className="mr-3" />
          <Typography className="p-0">Single</Typography>
        </Grid>
        <Grid className="flex items-center mb-3">
          <RssFeedIcon className="mr-3" />
          <Typography className="p-0">Followed by 10.4k people</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Intro;
