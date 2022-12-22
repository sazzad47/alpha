import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { Theme } from "emoji-picker-react";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

const BottomNav = () => {
  const [comment, setComment] = useState<string>("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const onEmojiClick = (emojiObject: any) => {
    setComment((prevInput) => prevInput + emojiObject.emoji);
  };
  return (
    <Grid className="w-full relative px-3 py-2 flex items-center justify-between">
      <Grid className="mr-2">
        <Grid className="flex gap-2">
          <IconButton
            onClick={() => setShowPicker((prev) => !prev)}
            className="focus:outline-none ml-[-10px] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          >
            <InsertEmoticonIcon className="text-textLight dark:text-textDark" />
          </IconButton>
          {showPicker && (
            <Grid className="absolute top-[-28rem]">
              <Picker
                onEmojiClick={onEmojiClick}
                theme={currentTheme === "dark" ? Theme.DARK : Theme.LIGHT}
              />
            </Grid>
          )}
          <IconButton className="text-textLight dark:text-textDark focus:outline-none ml-[-10px] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
            <AttachFileIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid className="flex gap-2 flex-1">
        <input placeholder="Type a message" className="text-textLight dark:text-textDark bg-[#fff] dark:bg-[#bcd4bc55] w-full px-3 focus:outline-none rounded-md" />
        <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
           <KeyboardVoiceIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default BottomNav;
