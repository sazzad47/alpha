import React from 'react'
import { Grid, Typography } from '@mui/material'
import thumbnailEverest from "../../../public/thumbnail-everest.jpg";
import channelPhoto from "../../../public/user.jpg";
import Image from "next/legacy/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from 'next/link';

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

const Suggestions = () => {
  return (
    <Grid container className=''>
        {items.map((item) => (
          <Grid key={item.id} container spacing={0} className='flex items-start h-[7rem] mb-3'>
            <Grid item xs={6} className="w-full h-[7rem] relative rounded-lg overflow-hidden" >
            <Link href="/beta/videos/444"><Image src={item.thumbnail} alt="" layout='fill' objectFit='cover' /> </Link>
            </Grid>
        
            <Grid item xs={6} className="flex flex-col items-start justify-start " >
            <Link href="/beta/videos/444"><Typography className='pl-2 line-clamp-2 font-medium text-[0.9rem] text-textLight dark:text-textDark' >How to learn reciting Quran beatifully? </Typography></Link>
                <Typography className='pl-2 line-clamp-1 text-sm mt-2 opacity-[0.8] text-textLight dark:text-textDark' >{item.channelName} <CheckCircleIcon className="text-sm mb-1" /> </Typography>
                <Typography className='pl-2 text-sm opacity-[0.8] text-textLight dark:text-textDark' >{item.views} views • {item.createdAt}</Typography>
            </Grid>
          </Grid>
        ))} 
    </Grid>
  )
}

export default Suggestions