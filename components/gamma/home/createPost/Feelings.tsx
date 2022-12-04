import React from "react";
import { Grid, IconButton, Typography, Divider, Avatar } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  setShowBody: Function;
}
const emojies = [
  {id: 1,
   icon: "😊",
   title: "happy",
   },
  {id: 2,
   icon: "😍",
   title: "lovely",
   },
  {id: 3,
   icon: "🥰",
   title: "loved",
   },
  {id: 4,
   icon: "😞",
   title: "sad",
   },
  {id: 5,
   icon: "😇",
   title: "blessed",
   },
  {id: 6,
   icon: "😴",
   title: "tired",
   },
  {id: 7,
   icon: "😌",
   title: "relaxed",
   },
  {id: 8,
   icon: "😠",
   title: "angry",
   },
  {id: 9,
   icon: "😟",
   title: "worried",
   },
  {id: 10,
   icon: "😔",
   title: "alone",
   },
  {id: 11,
   icon: "🤩",
   title: "excited",
   },
  {id: 12,
   icon: "😀",
   title: "thankful",
   },
]
const Feelings = ({ setShowBody }: Props) => {
  return (
    <Grid className="audience_Modal text-textLight dark:text-textDark p-2">
      <Grid className="relative flex items-center justify-center w-full h-[2rem]">
        <Typography className="p-0">How are you feeling?</Typography>
        <IconButton
          onClick={() => setShowBody(true)}
          className="focus:outline-none text-textLight dark:text-textDark absolute left-0 top-0 w-[30px] h-[30px] bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Grid>
      <Divider className="my-3" />
      <Grid>
        <Grid className="min-w-full flex items-center justify-start h-[2.5rem] bg-bgButton dark:bg-bgButtonDark rounded-3xl px-2">
        <SearchIcon/>
        <input className="focus:outline-none w-full bg-bgButton dark:bg-bgButtonDark"/>
        </Grid>
      </Grid>
      <Grid container className="w-full my-3 overflow-y-auto scrollbar scrollbar-track-transparent max-h-[18rem]">
        {emojies.map((emoji)=> (
           <Grid key={emoji.id} item xs={6} className="w-full flex justify-start items-center hover:bg-bgButton dark:hover:bg-bgButtonDark px-3 py-2 rounded-lg">
           <Avatar sx={{width: '40px', height: '40px'}}>{emoji.icon}</Avatar>
           <Typography className="p-0 pl-2">{emoji.title}</Typography>
       </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Feelings;
