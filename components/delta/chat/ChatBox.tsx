import { Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreActions from './MoreActions'
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { Theme } from "emoji-picker-react";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);


const ChatBox = () => {
  const [comment, setComment] = useState<string>("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const onEmojiClick = (emojiObject: any) => {
    setComment((prevInput) => prevInput + emojiObject.emoji);
  };
  return (
    <Grid className="px-5 py-5 flex flex-col gap-3 justify-end">
      <Grid className="w-auto flex items-center justify-end">
        <Grid className="relative flex">
        <IconButton
            onClick={() => setShowPicker((prev) => !prev)}
            className="focus:outline-none ml-[-10px] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          >
            <InsertEmoticonIcon className="text-textLight dark:text-textDark" />
          </IconButton>
          {showPicker && (
            <Grid className="absolute top-[2rem]">
              <Picker
                onEmojiClick={onEmojiClick}
                theme={currentTheme === "dark" ? Theme.DARK : Theme.LIGHT}
              />
            </Grid>
          )}
        <MoreActions/>
        </Grid>

      <Typography className="px-3 py-3 w-[60%] bg-[#34b483] dark:bg-[#66814b33]">Where are you now? I am searching for you for two days.</Typography>
      </Grid>
      <Grid className="w-auto flex flex-col items-start justify-end">
      <Typography className="px-3 py-3 w-[60%] bg-[#fff] dark:bg-[#bcd4bc55]" >Where are you now? I am searching for you for two days.</Typography>
      </Grid>
      <Grid className="w-auto flex flex-col items-end justify-end">
      <Typography className="px-3 py-3 w-[60%] bg-[#34b483] dark:bg-[#66814b33]">Where are you now? I am searching for you for two days.</Typography>
      </Grid>
      <Grid className="w-auto flex flex-col items-start justify-end">
      <Typography className="px-3 py-3 w-[60%] bg-[#fff] dark:bg-[#bcd4bc55]" >Where are you now? I am searching for you for two days.</Typography>
      </Grid>
      <Grid className="w-auto flex flex-col items-end justify-end">
      <Typography className="px-3 py-3 w-[60%] bg-[#34b483] dark:bg-[#66814b33]">Where are you now? I am searching for you for two days.</Typography>
      </Grid>
      <Grid className="w-auto flex flex-col items-start justify-end">
      <Typography className="px-3 py-3 w-[60%] bg-[#fff] dark:bg-[#bcd4bc55]" >Where are you now? I am searching for you for two days.</Typography>
      </Grid>
      <Grid className="w-auto flex flex-col items-end justify-end">
      <Typography className="px-3 py-3 w-[60%] bg-[#34b483] dark:bg-[#66814b33]">Where are you now? I am searching for you for two days.</Typography>
      </Grid>
      <Grid className="w-auto flex flex-col items-start justify-end">
      <Typography className="px-3 py-3 w-[60%] bg-[#fff] dark:bg-[#bcd4bc55]" >Where are you now? I am searching for you for two days.</Typography>
      </Grid>
      <Grid className="w-auto flex flex-col items-end justify-end">
      <Typography className="px-3 py-3 w-[60%] bg-[#34b483] dark:bg-[#66814b33]">Where are you now? I am searching for you for two days.</Typography>
      </Grid>
      <Grid className="w-auto flex flex-col items-start justify-end">
      <Typography className="px-3 py-3 w-[60%] bg-[#fff] dark:bg-[#bcd4bc55]" >Where are you now? I am searching for you for two days.</Typography>
      </Grid>
    </Grid>
  )
}

export default ChatBox