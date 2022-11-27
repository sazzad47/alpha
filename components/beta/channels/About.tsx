import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import ReportUser from "./ReportUser";

const links = [
  {id: 1,
   title: "lilo",
   url: "https://www.lilo.co.uk/"},
  {id: 2,
   title: "facebook",
   url: "https://www.lilo.co.uk/"},
  {id: 3,
   title: "twitter",
   url: "https://www.lilo.co.uk/"},
  {id: 4,
   title: "linkedin",
   url: "https://www.lilo.co.uk/"},
]
const About = () => {
  return (
    <Grid
      container
      spacing={2}
      className="p-5 text-textLight dark:text-textDark"
    >
      <Grid item xs={12} md={8} className="flex flex-col">
        <Typography className="pl-0 mb-4 text-lg font-semibold">
          Description
        </Typography>
        <Typography className="pl-0">
          Welcome to the official Explore channel on YouTube! Here you will find
          your favorite sketches, behind the scenes clips and web exclusives,
          featuring all your favorite hosts and cast members. All seasons of
          Explore are now available on Peacock, the new streaming service from
          NBCUniversal.
        </Typography>
        <hr className="my-5" />
        <Typography className="pl-0 mb-4 text-lg font-semibold">
          Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} className="flex flex-start items-center">
            <Typography className="pl-0 text-sm">For business inquiries:</Typography>
          </Grid>
          <Grid item xs={8} className="flex flex-start items-center">
            <Button className="ml-[-0.8rem] px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize">
              View email address
            </Button>
          </Grid>
          <Grid item xs={4} className="flex flex-start items-start">
            <Typography className="pl-0 text-sm">Location:</Typography>
          </Grid>
          <Grid item xs={8} className="flex flex-start items-start">
            <Typography className="pl-0">Bangladesh</Typography>
          </Grid>
        </Grid>
        <hr className="my-5" />
        <Typography className="pl-0 mb-4 text-lg font-semibold">
          Links
        </Typography>
         <Grid container className="mt-2">
           {links.map((item) => (
            <Grid item xs={6} key={item.id} className="">
              <a href={`${item.url}`} target="blank">
                <Typography className="pl-0 text-[#6b6bad]">{item.title}</Typography>
              </a>
            </Grid>
           ))}
         </Grid>
         <hr className="my-5" />
      </Grid>
      <Grid item xs={12} md={4} className="flex flex-col">
      <Typography className="pl-0 mb-4 text-lg font-semibold">
          Stats
        </Typography>
        <hr className="mb-3" />
        <Typography className="pl-0">Joined Apr 7, 2017</Typography>
        <hr className="my-3" />
        <Typography className="pl-0">185,730,153 views</Typography>
        <hr className="my-3" />
        <ReportUser/>
      </Grid>
    </Grid>
  );
};

export default About;
