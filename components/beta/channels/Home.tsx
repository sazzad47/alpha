import React from "react";
import Carousel from "./Carousel";
import { Grid, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function App() {
  return (
    <Grid className="max-w-[1200] mr-auto ml-auto pb-5 px-5">
      <Grid className="mt-5">
        <Grid className="h-[3rem] flex items-center">
          <Typography className="px-2  text-textLight dark:text-textDark">
            Popular Videos
          </Typography>
          <Button className="px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize">
            <PlayArrowIcon /> Play All
          </Button>
        </Grid>
        <Carousel show={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <Grid key={index} container className="p-2">
              <Grid item className="relative w-full h-[10rem]">
                <Image src="/thumbnail-everest.jpg" alt="" fill />
              </Grid>
              <Grid item className="flex flex-col items-start">
                <Typography className="line-clamp-2 pl-0 font-medium text-[1rem] text-textLight dark:text-textDark">
                  Who created this beautiful world?
                </Typography>
                <Typography className="pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  Explore <CheckCircleIcon className="text-sm" />
                </Typography>
                <Typography className="pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  210Kviews • 6 days ago
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </Grid>
      <hr className="mx-2 text-textLight dark:text-textDark"/>
      <Grid className="mt-5">
        <Grid className="h-[3rem] flex items-center">
          <Typography className="px-2  text-textLight dark:text-textDark">
            Python Courses
          </Typography>
          <Button className="px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize">
            <PlayArrowIcon /> Play All
          </Button>
        </Grid>
        <Carousel show={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <Grid key={index} container className="p-2">
              <Grid item className="relative w-full h-[10rem]">
                <Image src="/thumbnail-everest.jpg" alt="" fill />
              </Grid>
              <Grid item className="flex flex-col items-start">
                <Typography className="line-clamp-2 pl-0 font-medium text-[1rem] text-textLight dark:text-textDark">
                  Who created this beautiful world?
                </Typography>
                <Typography className="pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  Explore <CheckCircleIcon className="text-sm" />
                </Typography>
                <Typography className="pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  210Kviews • 6 days ago
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </Grid>
      <hr className="mx-2 text-textLight dark:text-textDark"/>
      <Grid className="mt-5">
        <Grid className="h-[3rem] flex items-center">
          <Typography className="px-2  text-textLight dark:text-textDark">
            Learn C++
          </Typography>
          <Button className="px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize">
            <PlayArrowIcon /> Play All
          </Button>
        </Grid>
        <Carousel show={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <Grid key={index} container className="p-2">
              <Grid item className="relative w-full h-[10rem]">
                <Image src="/thumbnail-everest.jpg" alt="" fill />
              </Grid>
              <Grid item className="flex flex-col items-start">
                <Typography className="line-clamp-2 pl-0 font-medium text-[1rem] text-textLight dark:text-textDark">
                  Who created this beautiful world?
                </Typography>
                <Typography className="pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  Explore <CheckCircleIcon className="text-sm" />
                </Typography>
                <Typography className="pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  210Kviews • 6 days ago
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </Grid>
      <hr className="mx-2 text-textLight dark:text-textDark"/>
      <Grid className="mt-5">
        <Grid className="h-[3rem] flex items-center">
          <Typography className="px-2  text-textLight dark:text-textDark">
            Competitive Programming
          </Typography>
          <Button className="px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize">
            <PlayArrowIcon /> Play All
          </Button>
        </Grid>
        <Carousel show={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <Grid key={index} container className="p-2">
              <Grid item className="relative w-full h-[10rem]">
                <Image src="/thumbnail-everest.jpg" alt="" fill />
              </Grid>
              <Grid item className="flex flex-col items-start">
                <Typography className="line-clamp-2 pl-0 font-medium text-[1rem] text-textLight dark:text-textDark">
                  Who created this beautiful world?
                </Typography>
                <Typography className="pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  Explore <CheckCircleIcon className="text-sm" />
                </Typography>
                <Typography className="pl-0 opacity-[0.7] text-sm text-textLight dark:text-textDark">
                  210Kviews • 6 days ago
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}
export default App;
