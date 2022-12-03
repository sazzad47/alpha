import React, { useState } from "react";
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Divider,
  Avatar,
  Tooltip,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import { useTheme } from "next-themes";
import {Theme} from 'emoji-picker-react'
import dynamic from 'next/dynamic';

export default function PostModal() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full">
      <Button
        onClick={handleClickOpen}
        className="focus:outline-none ml-3 flex justify-start w-[calc(100%-0.75rem)] normal-case bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover rounded-[20px] text-textLight dark:text-textDark"
      >
        What are you thinking?
      </Button>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: currentTheme === "dark" ? "#474849" : "#fff",
            minWidth: "30rem",
            maxHeight: "30rem",
            overflowY: "auto",
          },
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Grid className="text-textLight dark:text-textDark flex flex-col justify-start p-4">
          <Grid className="relative flex items-center justify-center w-full h-[2rem]">
            <Typography className="p-0">Create post</Typography>
            <IconButton
              onClick={handleClose}
              className="text-textLight dark:text-textDark absolute right-0 w-[30px] h-[30px] bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
            >
              <CloseIcon />
            </IconButton>
          </Grid>
          <Divider className="my-3" />
          <Grid className="w-full flex items-center justify-start">
            <Grid className="flex items-center">
              <Avatar src="/user.jpg" />
              <Grid className="flex flex-col ml-2">
                <Typography className="p-0">Sazzad Hossen</Typography>
                <Button className="w-[5rem] focus:outline-none flex items-center normal-case text-textLight dark:text-textDark bg-[#f0e1e1] dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                  <PublicIcon className="text-sm" />{" "}
                  <Typography className="pl-2 p-0 text-sm">Public</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <ModalBody />
        </Grid>
      </Dialog>
    </div>
  );
}

const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);
const ModalBody = () => {
  const [comment, setComment] = useState<string>("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onEmojiClick = (emojiObject: any) => {
    setComment((prevInput) => prevInput + emojiObject.emoji);
  };

  return (
    <React.Fragment>
      <Grid className="mt-4">
        <textarea
          autoFocus
          className="w-full min-h-[8rem] border-none outline-none bg-[transparent] resize-none scrollbar scrollbar-track-[transparent] text-textLight dark:text-textDark"
          placeholder="What&lsquo;s on your mind?"
          onChange={handleComment}
          value={comment}
        />
      </Grid>
      <Grid className="relative">
        <IconButton
          onClick={() => setShowPicker((prev) => !prev)}
          className="focus:outline-none ml-[-10px] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <InsertEmoticonIcon className="text-textLight dark:text-textDark" />
        </IconButton>
        <Dialog
        sx={{
          "& .MuiDialog-paper": {
            right: "-10rem",
            borderRadius: "10px"
          },
        }}
        onClose={()=> setShowPicker(false)}
        aria-labelledby="customized-dialog-title"
        open={showPicker}
      >

        <Grid className="">
            {showPicker && <Picker
              onEmojiClick={onEmojiClick}
              theme={currentTheme === "dark"? Theme.DARK : Theme.LIGHT}
              />}
            </Grid> 
      </Dialog>
      </Grid>
      <Grid className="my-3">
        <Grid className="py-2 px-3 rounded-md flex items-center justify-between border">
            <Typography className="text-sm p-0 normal-case text-textLight dark:text-textDark"> Add to your post</Typography>
            <Grid>
              <Tooltip title="Add photo">
                <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                  <CollectionsIcon/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Add Video">
                <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                  <VideoLibraryIcon/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Add Feeling">
                <IconButton className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                  <MoodIcon/>
                </IconButton>
              </Tooltip>
            </Grid>
        </Grid>
      </Grid>
      <Grid className="mt-2">
        <Button fullWidth className="focus:outline-none flex items-center justify-center border">
            <Typography className=" p-0 normal-case text-textLight dark:text-textDark"> Post</Typography>
        </Button>
      </Grid>
      
    </React.Fragment>
  );
};
