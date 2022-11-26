import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import thumbnailEverest from "../../../../public/thumbnail-everest.jpg";
import channelPhoto from "../../../../public/user.jpg";
import Image from "next/legacy/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardMenus from "./CardMenus";
import Link from "next/link";

const items = [
  {
    id: 1,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
  {
    id: 2,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
  {
    id: 3,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
  {
    id: 4,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
  {
    id: 5,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
  {
    id: 6,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
  {
    id: 7,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
  {
    id: 8,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
  {
    id: 9,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
  {
    id: 10,
    thumbnail: thumbnailEverest.src,
    title: "Who created this beautiful world?",
    channelName: "Explore",
    channelPhoto: channelPhoto.src,
    views: "118K",
    createdAt: "5 days ago",
  },
];

const Feed = () => {
  return (
    <Grid container spacing={2} className="my-[5rem] px-5 -z-1">
      {items.map((item) => (
        <Grid
          key={item.id}
          item
          xs={12}
          md={4}
          sm={6}
          lg={3}
          className="flex flex-col"
        >
          <Link href="/beta/videos/333">
            <Grid className="relative w-full h-[10rem] -z-2 rounded-lg overflow-hidden">
              <Image
                src={item.thumbnail}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </Grid>
          </Link>
          <Grid container className="w-full h-[7rem] mt-3">
            <Grid item xs={1}>
            <Link href="/beta/channels/222">
              <Avatar alt="Sazzad Hossen" src={`${item.channelPhoto}`} />
            </Link>
            </Grid>
            <Grid
              item
              xs={11}
              className="flex flex-col items-start justify-start"
            >
              <Grid className="w-full mb-2 flex items-start justify-between text-textLight dark:text-textDark">
                <Link href="/beta/videos/333">
                  <Grid className="w-full max-w-full line-clamp-2">
                    <Typography className="ml-[-0.2rem] font-medium text-[1rem] text-textLight dark:text-textDark">
                      {item.title}
                    </Typography>
                  </Grid>
                </Link>
                <Grid className="mt-[0.3rem]">
                  <CardMenus />
                </Grid>
              </Grid>
              <Link href="/beta/channels/222">
             <Typography className="opacity-[0.7] text-sm text-textLight dark:text-textDark">
                {item.channelName} <CheckCircleIcon className="text-sm" />
              </Typography>
            </Link>
              <Typography className="opacity-[0.7] text-sm text-textLight dark:text-textDark">
                {item.views} views • {item.createdAt}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;
