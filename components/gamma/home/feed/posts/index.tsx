import React, { useState } from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {FaShare} from 'react-icons/fa'
import MoreMenus from "./MoreMenus";
import Angry from "../../../../../public/icons/angry.png";
import Care from "../../../../../public/icons/care.png";
import Haha from "../../../../../public/icons/haha.png";
import Like from "../../../../../public/icons/like.png";
import Love from "../../../../../public/icons/love.png";
import Sad from "../../../../../public/icons/sad.png";
import Wow from "../../../../../public/icons/wow.png";
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
    <React.Fragment>
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Grid
          key={i}
          container
          className="text-textLight dark:text-textDark w-[calc(100%-2rem)] mx-1 mt-5 p-5 bg-bgLight dark:bg-bgDark"
        >
          <Grid item xs={12} className="flex flex-col">
            <Grid className="flex items-center justify-between">
              <Grid className="flex items-start">
                <Avatar src="/user.jpg" />
                <Grid className="flex flex-col justify-start mt-[-2px]">
                  <Typography className="p-0 pl-2">Arif Azad</Typography>
                  <Typography className="p-0 pl-2 text-sm">
                    8h <PublicIcon className="text-sm" />
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <MoreMenus />
              </Grid>
            </Grid>
            <ReadMore>
              What is the world made of? Depending on whom you ask, you will get
              very different answers to that question. To a biologist, the world
              is made of living organisms. To a chemist, the world is made of
              molecules formed from atoms. If you ask that question of a
              physicist, the physicist will probably start by talking about
              atoms, and then proceed to talk about the protons, neutrons and
              electrons that make up an atom
            </ReadMore>
            <Grid className="flex justify-between items-center">
              <Grid className="flex">
                <Avatar src={Love.src} sx={{ width: "20px", height: "20px" }} />
                <Avatar src={Wow.src} sx={{ width: "20px", height: "20px" }} />
                <Typography className="p-0 pl-2 text-sm opacity-[0.7]">
                  200
                </Typography>
              </Grid>
              <Grid>
                <Typography className="p-0 text-sm"> 10 Comments</Typography>
              </Grid>
            </Grid>
            <hr className="my-4" />
            <Grid className="flex relative justify-between">
              <LikeButton/>
              <Grid className="flex items-center justify-center cursor-pointer px-5 py-2 rounded-sm hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <ChatBubbleOutlineIcon />
                <Typography className="pl-2 p-0">Comment</Typography>
              </Grid>
              <Grid className="flex items-center justify-end cursor-pointer px-5 py-2 rounded-sm hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <FaShare />
                <Typography className="pl-2 p-0">Share</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  );
};

const LikeButton = () => {
  const [isShownReactBox, setIsShownReactBox] = useState<boolean>(false);
  return (
    <Grid
    onMouseEnter={() => setIsShownReactBox(true)}
    onMouseLeave={() => setIsShownReactBox(false)}
    className="like_button flex cursor-pointer px-5 py-2 rounded-sm hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
  >
    <ThumbUpOffAltIcon />
    <Typography className="pl-2 p-0">Like</Typography>
    <Grid
      className={`reaction_box absolute z-[100] translate-y-[-35px] flex ${
        isShownReactBox ? "visible" : "invisible"
      }`}
    >
      {icons.map((item) => (
        <Grid key={item.id} className="mr-2">
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src={item.icon.src}
          />
        </Grid>
      ))}
    </Grid>
  </Grid>
  )
}
export default Posts;
