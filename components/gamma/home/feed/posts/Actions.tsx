import React, { useState } from "react";
import { Grid, Typography, Avatar } from "@mui/material";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import Angry from "../../../../../public/icons/angry.png";
import Care from "../../../../../public/icons/care.png";
import Haha from "../../../../../public/icons/haha.png";
import Like from "../../../../../public/icons/like.png";
import Love from "../../../../../public/icons/love.png";
import Sad from "../../../../../public/icons/sad.png";
import Wow from "../../../../../public/icons/wow.png";

import Comment from "./comment";
import Share from "./Share";
import ReactModal from "./ReactModal";

const icons = [
  { id: 1, icon: Like },
  { id: 2, icon: Love },
  { id: 3, icon: Care },
  { id: 4, icon: Wow },
  { id: 5, icon: Haha },
  { id: 6, icon: Sad },
  { id: 7, icon: Angry },
];

const Actions = () => {
  const [showCommentBox, setShowCommentBox] = useState<boolean>(false);
  return (
    <React.Fragment>
      <ActionHeader setShowCommentBox={setShowCommentBox} />
      <hr className="my-4" />
      <Grid className="flex relative justify-between">
        <LikeButton />
        <CommentButton setShowCommentBox={setShowCommentBox} />
        <Share />
      </Grid>
      <Grid>
        {showCommentBox && (
          <Grid>
            <hr className="my-3" />
            <Comment />
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

const ActionHeader = ({ setShowCommentBox }: CommentProps) => {
  return (
    <Grid className="flex justify-between items-center">
      <ReactModal />
      <Grid
        onClick={() => setShowCommentBox((prev: boolean) => !prev)}
        className="cursor-pointer"
      >
        <Typography className="p-0 text-sm"> 10 Comments</Typography>
      </Grid>
    </Grid>
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
  );
};

interface CommentProps {
  setShowCommentBox: Function;
}
const CommentButton = ({ setShowCommentBox }: CommentProps) => {
  return (
    <Grid
      onClick={() => setShowCommentBox((prev: boolean) => !prev)}
      className="flex items-center justify-center cursor-pointer px-5 py-2 rounded-sm hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
    >
      <ChatBubbleOutlineIcon />
      <Typography className="pl-2 p-0">Comment</Typography>
    </Grid>
  );
};
export default Actions;
