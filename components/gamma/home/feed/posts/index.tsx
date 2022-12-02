import React, { useState } from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {BiShare} from 'react-icons/bi'
import MoreMenus from "./MoreMenus";
import Angry from '../../../../../public/icons/angry.png'
import Care from '../../../../../public/icons/care.png'
import Haha from '../../../../../public/icons/haha.png'
import Like from '../../../../../public/icons/like.png'
import Love from '../../../../../public/icons/love.png'
import Sad from '../../../../../public/icons/sad.png'
import Wow from '../../../../../public/icons/wow.png'
interface Props {
  children: string;
}
const ReadMore = ({ children }: Props) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="pl-0 my-3 inline w-full">
      {isReadMore ? text.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        className="font-bold text-textLight dark:text-textDark cursor-pointer"
      >
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};
const icons = [
  { id: 1, icon: Like },
  { id: 2, icon: Love },
  { id: 3, icon: Care },
  { id: 4, icon: Wow },
  { id: 5, icon: Haha },
  { id: 6, icon: Sad },
  { id: 7, icon: Angry },
];
const Posts = () => {
  return (
    <Grid
      container
      className="text-textLight dark:text-textDark w-[calc(100%-2rem)] mx-1 my-5 p-5 bg-bgLight dark:bg-bgDark"
    >
      <Grid item xs={12} className="flex flex-col">
        <Grid className="flex items-center justify-between">
          <Grid className="flex items-start">
            <Avatar src="/user.jpg" />
            <Grid className="flex flex-col justify-start mt-[-2px]">
              <Typography className="p-0 pl-2">Arif Azad</Typography>
              <Typography className="p-0 pl-2 text-sm">
                8h <PublicIcon className="text-sm" />{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <MoreMenus />
          </Grid>
        </Grid>
        <ReadMore>
          What is the world made of? Depending on whom you ask, you will get
          very different answers to that question. To a biologist, the world is
          made of living organisms. To a chemist, the world is made of molecules
          formed from atoms. If you ask that question of a physicist, the
          physicist will probably start by talking about atoms, and then proceed
          to talk about the protons, neutrons and electrons that make up an atom
        </ReadMore>
        <hr className="my-4" />
        <Grid className="reaction_box flex">
          {icons.map((item) => (
            <Grid key={item.id} className="mr-1">
              <Avatar sx={{width:'20px', height: '20px'}} src={item.icon.src}/>
            </Grid>
          ))}
        </Grid>
        <Grid className="flex justify-between mt-2">
         <Grid className="like_button flex">
             <ThumbUpOffAltIcon/>
             <Typography className="pl-2">Like</Typography>
         </Grid>
         <Grid className="flex justify-center">
             <ThumbUpOffAltIcon/>
             <Typography className="pl-2 p-0">Comment</Typography>
         </Grid>
         <Grid className="flex justify-end">
             <ThumbUpOffAltIcon/>
             <Typography className="pl-2 p-0">Share</Typography>
         </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Posts;
