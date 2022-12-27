import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreActions from "./MoreActions";
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
  return (
    <Grid className="px-5 py-5 flex flex-col gap-3 justify-end">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
        <Grid key={i} className="flex flex-col gap-3">
          <Message flex="flex-row">
            <Typography className="p-2 max-w-[60%] bg-[#d5e4de] dark:bg-[#29440e33]">
              Did you cook today?
            </Typography>
          </Message>
          <Message flex="flex-row-reverse">
            <Grid className="flex gap-3 items-end max-w-[60%]">
              <Avatar className="w-[30px] h-[30px]" src="/user.jpg" />
              <Grid className="flex flex-col">
                <Typography className="p-0 text-xs">Shafin</Typography>
                <Typography className="p-2 max-w-full whitespace-normal bg-[#b5b8bb] dark:bg-[#13070a33]">
                  Yes, I did. I love cooking!
                </Typography>
              </Grid>
            </Grid>
          </Message>
        </Grid>
      ))}
    </Grid>
  );
};

const Actions = () => {
  const [comment, setComment] = useState<string>("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const onEmojiClick = (emojiObject: any) => {
    setComment((prevInput) => prevInput + emojiObject.emoji);
  };
  return (
    <Grid className="relative flex gap-3">
      <IconButton
        onClick={() => setShowPicker((prev) => !prev)}
        className="focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
      >
        <InsertEmoticonIcon className="text-textLight dark:text-textDark" />
      </IconButton>
      {showPicker && (
        <Grid className="absolute top-[3rem] left-[-10rem]">
          <Picker
            onEmojiClick={onEmojiClick}
            theme={currentTheme === "dark" ? Theme.DARK : Theme.LIGHT}
          />
        </Grid>
      )}
      <MoreActions />
    </Grid>
  );
};
interface MessageProps {
  flex: string;
  children: React.ReactNode;
}
const Message = ({ flex, children }: MessageProps) => {
  const [isShownActions, setIsShownActions] = useState<boolean>(false);

  return (
    <Grid
      onMouseEnter={() => setIsShownActions(true)}
      onMouseLeave={() => setIsShownActions(false)}
      className={`w-auto flex ${flex} gap-3 items-center justify-end`}
    >
      {isShownActions && <Actions />}
      {children}
    </Grid>
  );
};
export default ChatBox;
