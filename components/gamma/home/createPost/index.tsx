import React, { useState } from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import PostModal from "./PostModal";
import Link from "next/link";

export interface ActionProps {
  showImageUploader?: boolean;
  showVideoUploader?: boolean;
  showFeelingsModal?: boolean;
  showBody?: boolean;
}
const CreatePost = () => {
  const [open, setOpen] = React.useState(false);
  const [actions, setActions] = useState<ActionProps>({
    showImageUploader: false,
    showVideoUploader: false,
    showFeelingsModal: false,
    showBody: true,
  });
  const handleOpenPhotoUploader = () => {
    setOpen(true);
    setActions((prevState: ActionProps) => ({
      ...prevState,
      showImageUploader: true,
      showVideoUploader: false,
    }));
  };
  const handleOpenVideoUploader = () => {
    setOpen(true);
    setActions((prevState: ActionProps) => ({
      ...prevState,
      showVideoUploader: true,
      showImageUploader: false,
    }));
  };
  const handleOpenFeelingsModal = () => {
    setOpen(true);
    setActions((prevState: ActionProps) => ({
      ...prevState,
      showFeelingsModal: true,
      showBody: false,
    }));
  };
  return (
    <Grid className="text-textLight dark:text-textDark w-full p-5 bg-bgLight dark:bg-bgDark flex flex-col">
      <Grid className="flex items-center">
        <Link href="/gamma/profiles/123"><Avatar src="/user.jpg" /></Link>
        <PostModal
          open={open}
          setOpen={setOpen}
          actions={actions}
          setActions={setActions}
        />
      </Grid>
      <hr className="my-3" />
      <Grid className="w-full flex justify-between">
        <Grid
          onClick={handleOpenPhotoUploader}
          className="flex cursor-pointer w-1/3 px-3 py-2 items-center justify-center hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <CollectionsIcon />
          <Typography className="pl-2">Photo</Typography>
        </Grid>
        <Grid
          onClick={handleOpenVideoUploader}
          className="flex cursor-pointer w-1/3 px-3 py-2 items-center justify-center hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <VideoLibraryIcon />
          <Typography className="pl-2">Video</Typography>
        </Grid>
        <Grid
          onClick={handleOpenFeelingsModal}
          className="flex cursor-pointer w-1/3 px-3 py-2 items-center justify-center hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <MoodIcon />
          <Typography className="pl-2">Feeling</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
