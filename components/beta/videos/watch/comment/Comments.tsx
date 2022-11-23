import React, { useState } from "react";
import {
  Grid,
  Avatar,
  Button,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import { CustomTextField } from "../../../../common/Textfield";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { Theme } from "emoji-picker-react";
import channelPhoto from "../../../../../public/user.jpg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const items = [
  {
    id: 1,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "2 weeks ago",
  },
  {
    id: 2,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "3 weeks ago",
  },
  {
    id: 3,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "1 month ago",
  },
  {
    id: 4,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "2 months ago",
  },
  {
    id: 5,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "3 months ago",
  },
  {
    id: 6,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "4 months ago",
  },
  {
    id: 7,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "5 months ago",
  },
  {
    id: 8,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "5 months ago",
  },
  {
    id: 9,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "5 months ago",
  },
  {
    id: 10,
    channelName: "Sazzad Hossen",
    channelPhoto: channelPhoto.src,
    commnet:
      "Man is created as the most beautiful creature on earth. He is given the power of reasoning and insight. Thus, everything in the universe has been created beautiful, with purpose and in proportion and measure, both qualitatively and quantitatively",
    createdAt: "5 months ago",
  },
];

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
    <p className="text-textLight dark:text-textDark pl-0 inline w-full">
      {isReadMore ? text.slice(0, 100) : text}
      <span
        onClick={toggleReadMore}
        className="font-bold text-textLight dark:text-textDark cursor-pointer"
      >
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};

const Comments = () => {
  return (
    <React.Fragment>
      {items.map((item) => (
        <Grid key={item.id} container className="w-full mt-5">
          <Grid item xs={1}>
            <Avatar src={item.channelPhoto} sx={{ width: 46, height: 46 }} />
          </Grid>
          <Grid item xs={11} className="w-full flex flex-col pl-5">
            <Typography className="text-textLight dark:text-textDark pl-0 mt-[-5px]">
              <span className="text-sm font-bold">{item.channelName} </span>{" "}
              <span className="text-sm opacity-[0.9]">{item.createdAt}</span>
            </Typography>

            <ReadMore>{item.commnet}</ReadMore>
            <Actions />
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default Comments;

const Actions = () => {
  const [isVisibleReplyBox, setIsVisibleReplyBox] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Grid className="mt-3 w-full flex items-center justify-start">
        <Tooltip title="Like">
          <IconButton className="focus:outline-none ml-[-5px] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
            <ThumbUpIcon className="text-textLight dark:text-textDark" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Dislike">
          <IconButton className="ml-4 focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
            <ThumbDownIcon className="text-textLight dark:text-textDark" />
          </IconButton>
        </Tooltip>
        <Button
          onClick={() => setIsVisibleReplyBox(true)}
          className="focus:outline-none ml-4 text-textLight dark:text-textDark capitalize rounded-2xl hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          Reply
        </Button>
      </Grid>
      {isVisibleReplyBox && (
        <Reply setIsVisibleReplyBox={setIsVisibleReplyBox} />
      )}
    </React.Fragment>
  );
};

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

interface ReplyProps {
  setIsVisibleReplyBox: Function;
}

const Reply = ({ setIsVisibleReplyBox }: ReplyProps) => {
  const [comment, setComment] = useState<string>("");

  const [showPicker, setShowPicker] = useState<boolean>(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onEmojiClick = (emojiObject: any) => {
    setComment((prevInput) => prevInput + emojiObject.emoji);
  };

  return (
    <Grid container className="w-full mt-5">
      <Grid item xs={1}>
        <Avatar src={channelPhoto.src} sx={{ width: 30, height: 30 }} />
      </Grid>
      <Grid
        item
        xs={11}
        component="form"
        className="mt-[-5px] w-full relative flex flex-col pl-5"
      >
        <CustomTextField
          variant="standard"
          placeholder="Add a reply..."
          fullWidth
          inputColor={currentTheme === "dark" ? "white" : "black"}
          labelColor={currentTheme === "dark" ? "white" : "black"}
          underlineAfterColor={currentTheme === "dark" ? "white" : "black"}
          underlineBeforeColor={currentTheme === "dark" ? "white" : "black"}
          underlineBeforeHoverColor={
            currentTheme === "dark" ? "white" : "black"
          }
          onChange={handleComment}
          value={comment}
        />

        <Grid className="mt-3 w-full flex justify-between">
          <Grid className="flex items-center justify-center">
            <IconButton
              onClick={() => setShowPicker((prev) => !prev)}
              className="focus:outline-none ml-[-10px] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
            >
              <InsertEmoticonIcon className="text-textLight dark:text-textDark" />
            </IconButton>
          </Grid>
          <Grid className="absolute z-[100] top-[100px]">
            {showPicker && (
              <Picker
                onEmojiClick={onEmojiClick}
                theme={currentTheme === "dark" ? Theme.DARK : Theme.LIGHT}
              />
            )}
          </Grid>
          <Grid>
            <Button
              onClick={() => {
                setIsVisibleReplyBox(false);
                setComment("");
                setShowPicker(false);
              }}
              className="focus:outline-none text-textLight dark:text-textDark hover:bg-bgButton hover:dark:bg-bgButtonDark capitalize rounded-2xl"
            >
              Cancel
            </Button>
            <Button
              disabled={!comment}
              className={`ml-2 focus:outline-none rounded-2xl ${
                comment
                  ? "bg-[#2d2df7] dark:bg-[#a7a7f0] text-textDark dark:text-textLight"
                  : "bg-[#e0e0ec] dark:bg-bgButtonDark text-textLight dark:text-textDark"
              } capitalize`}
            >
              Reply
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
