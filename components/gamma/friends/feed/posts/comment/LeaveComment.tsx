import React, { useState } from "react";
import { Grid, Avatar, Button, IconButton } from "@mui/material";
import channelPhoto from "../../../../../../public/user.jpg";
import { CustomTextField } from "../../../../../common/Textfield";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useTheme } from "next-themes";
import dynamic from 'next/dynamic';
import {Theme} from 'emoji-picker-react'
const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);

const LeaveComment = () => {
  const [comment, setComment] = useState<string>("");
  const [isVisibleActions, setIsVisibleActions] = useState<boolean>(false);
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  
  const onEmojiClick = (emojiObject:any) => {
    setComment(prevInput => prevInput + emojiObject.emoji);
  };

  return (
    <Grid container className="w-full mt-5">
      <Grid item xs={1}>
        <Avatar src={channelPhoto.src} sx={{ width: 46, height: 46 }} />
      </Grid>
      <Grid item xs={11} component="form" className="w-full relative flex flex-col pl-5">
        <CustomTextField
          variant="standard"
          placeholder="Add a comment..."
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
          onFocus={() => setIsVisibleActions(true)}
        />
        {isVisibleActions && (
          <Grid className="mt-3 w-full flex justify-between">
            <Grid className="flex items-center justify-center">
              <IconButton onClick={() => setShowPicker(prev=> !prev)} className="focus:outline-none ml-[-10px] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <InsertEmoticonIcon className="text-textLight dark:text-textDark"/>
              </IconButton>
            </Grid>
            <Grid className="absolute z-[100] top-[100px]">
            {showPicker && <Picker
              onEmojiClick={onEmojiClick}
              theme={currentTheme === "dark"? Theme.DARK : Theme.LIGHT}
              />}
            </Grid> 
            <Grid>
              <Button
                onClick={() => {
                  setIsVisibleActions(false);
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
                Comment
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default LeaveComment;
