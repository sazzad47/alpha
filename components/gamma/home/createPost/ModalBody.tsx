import React, { useState, DragEvent, useRef } from "react";
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
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useTheme } from "next-themes";
import { Theme } from "emoji-picker-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { EmojiProps } from "./Feelings";
import { AudienceProps } from "./PostModal";
import { ActionProps } from ".";

const Picker = dynamic(
    () => {
      return import("emoji-picker-react");
    },
    { ssr: false }
  );
  
  interface Props {
    setShowAudience: Function;
    handleClose: () => void;
    postAudience: AudienceProps;
    actions: ActionProps;
    setActions: Function;
    feeling: EmojiProps;
  }
  const ModalBody = ({setShowAudience, handleClose, postAudience, actions, setActions, feeling}: Props) => {
    const {showImageUploader, showVideoUploader} = actions;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [comment, setComment] = useState<string>("");
    const [files, setFiles] = useState<string[]>([]);
    
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
  
    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setComment(e.target.value);
    };
  
    const onEmojiClick = (emojiObject: any) => {
      setComment((prevInput) => prevInput + emojiObject.emoji);
    };
    const closeFileUploader = () => {
      setActions((prevState: ActionProps)=> ({...prevState, showImageUploader: false}))
      setActions((prevState: ActionProps)=> ({...prevState, showVideoUploader: false}))
      setFiles([]);
    };
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.dataTransfer.files) {
        const fileArray = Array.from(e.dataTransfer.files).map((file) =>
          URL.createObjectURL(file)
        );
        setFiles((prevArray: string[]) => prevArray.concat(fileArray));
      }
      console.log("files", files);
    };
    const handleSelectFile = () => {
      fileInputRef.current?.click();
    };
  
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const fileArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );
        setFiles((prevArray: string[]) => prevArray.concat(fileArray));
      }
      console.log("files", files);
    };
   
    return (
      <Grid className="">
       <Grid className="h-[8rem] text-textLight dark:text-textDark flex flex-col justify-start p-4 pb-0">
            <Grid className="relative flex items-center justify-center w-full h-[2rem]">
              <Typography className="p-0">Create post</Typography>
              <IconButton
                onClick={handleClose}
                className="focus:outline-none text-textLight dark:text-textDark absolute right-0 w-[30px] h-[30px] bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Divider className="my-3" />
            <Grid className="w-full flex items-center justify-start">
              <Grid className="flex items-center">
                <Avatar src="/user.jpg" />
                <Grid className="flex flex-col ml-2">
                  <Typography className="p-0">Sazzad Hossen {feeling && `is ${feeling.icon} feeling ${feeling.title} `}</Typography>
                  <Button onClick={()=> setShowAudience(true)} className="max-w-[6rem] focus:outline-none flex items-center normal-case text-textLight dark:text-textDark bg-[#f0e1e1] dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                     {postAudience.icon}
                    <Typography className="px-2 p-0 text-sm whitespace-nowrap ">{postAudience.audience}</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      <Grid className="min-h-[18rem] p-4 flex flex-col justify-between">
        <Grid className="min-h-[10rem] max-h-[10rem] flex flex-col justify-between overflow-y-auto scrollbar scrollbar-track-[transparent]">
          <Grid>
            <textarea
              autoFocus
              className="w-full min-h-[6rem] border-none outline-none bg-[transparent] resize-none scrollbar scrollbar-track-[transparent] text-textLight dark:text-textDark"
              placeholder="What&lsquo;s on your mind?"
              onChange={handleComment}
              value={comment}
            />
          </Grid>
          <Grid className="relative">
            <IconButton
              onClick={() => setShowPicker((prev) => !prev)}
              className="focus:outline-none bg-bgButton dark:bg-bgButtonDark mb-2 hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
            >
              <InsertEmoticonIcon className="text-textLight dark:text-textDark" />
            </IconButton>
            <Dialog
              sx={{
                "& .MuiDialog-paper": {
                  right: "-10rem",
                  borderRadius: "10px",
                },
              }}
              onClose={() => setShowPicker(false)}
              aria-labelledby="customized-dialog-title"
              open={showPicker}
            >
              <Grid className="">
                {showPicker && (
                  <Picker
                    onEmojiClick={onEmojiClick}
                    theme={currentTheme === "dark" ? Theme.DARK : Theme.LIGHT}
                  />
                )}
              </Grid>
            </Dialog>
          </Grid>
  
          {(showImageUploader || showVideoUploader) && (
            <Grid className="relative w-full min-h-[10rem] mb-3 flex flex-col justify-center">
              <IconButton
                onClick={closeFileUploader}
                className="z-[10] focus:outline-none text-textLight dark:text-textDark absolute right-1 top-1 w-[30px] h-[30px] bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
              >
                <CloseIcon />
              </IconButton>
              {files.length !== 0 && (
                <Grid className="h-full w-full absolute z-[2]">
                  <Grid container className="w-full h-full">
                    {files.map((file, i) => (
                      <Grid
                        key={i}
                        item
                        xs={files.length === 1 ? 12 : 6}
                        className="relative w-full h-full"
                      >
                        {showImageUploader? <Image src={file} alt="" fill /> : <video src={file} className="absolute w-full h-full object-cover" />}
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              )}
  
              <Grid
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleSelectFile}
                className={`${files.length >= 1? "opacity-0": "opacity-[1]"} border rounded-lg cursor-pointer h-full w-full absolute flex flex-col justify-center items-center text-textLight dark:text-textDark`}
              >
                <Avatar className="bg-bgButton dark:bg-bgButtonDark ">
                  <UploadFileIcon />
                </Avatar>
                <Typography className="p-0 text-xl">{showImageUploader? "Add photos" : "Add videos"}</Typography>
                <Typography className="p-0 text-sm opacity-[0.7]">
                  or drag and drop
                </Typography>
                <input
                  type="file"
                  accept={showImageUploader? "image/*" : "video/*"}
                  multiple
                  hidden
                  onChange={handleFile}
                  ref={fileInputRef}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid className="">
          <Grid className="mb-3">
            <Grid className="py-2 px-3 rounded-md flex items-center justify-between border">
              <Typography className="text-sm p-0 normal-case text-textLight dark:text-textDark">
                Add to your post
              </Typography>
              <Grid>
                <Tooltip title="Add photo">
                  <IconButton
                    onClick={() => {
                      setActions((prevState: ActionProps)=> ({...prevState, showImageUploader: true}))
                      setActions((prevState: ActionProps)=> ({...prevState, showVideoUploader: false}))
                    }}
                    className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
                  >
                    <CollectionsIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add Video">
                  <IconButton 
                   onClick={() => {
                    setActions((prevState: ActionProps)=> ({...prevState, showImageUploader: false}))
                    setActions((prevState: ActionProps)=> ({...prevState, showVideoUploader: true}))
                  }}
                  className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                    <VideoLibraryIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add Feeling">
                  <IconButton onClick={()=> setActions((prevState: ActionProps)=> ({...prevState, showFeelingsModal: true}))} className="text-textLight dark:text-textDark focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                    <MoodIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="mt-2">
            <Button
              fullWidth
              className="focus:outline-none flex items-center justify-center border"
            >
              <Typography className=" p-0 normal-case text-textLight dark:text-textDark">
                Post
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    );
  };

  export default ModalBody