import React from "react";
import {
  Grid,
  Typography,
  Tooltip,
  IconButton,
  List,
  Button,
  ListItemIcon,
} from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Image from "next/image";
import MoreMenus from "./MoreMenus";

const Playlist = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Grid className="relative text-textLight dark:text-textDark">
      <Grid className="flex items-start justify-between">
        <Grid className="flex flex-col text-textLight dark:text-textDark">
          <Typography className="pl-0 text-lg">
            Competitive Programming
          </Typography>
          <Grid className="flex items-center">
            <Typography className="pl-0 text-sm opacity-[0.8]">
              Explore
            </Typography>
            <Typography className="pl-0 text-sm opacity-[0.8]">1/10</Typography>
          </Grid>
          <Grid className="mt-1">
            <Tooltip title="Loop playlist">
              <IconButton className="focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <LoopIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid>
          <IconButton
            onClick={handleClick}
            className="focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          >
            {open ? <CloseIcon /> : <ExpandMore />}
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          className="mt-2 pb-2 max-h-[13.5rem] overflow-y-auto"
        >
          {[1,2,3,4,5,6,7,8,9,10].map((item)=> (
          <Grid key={item} className="p-3 rounded-[20px] flex items-center justify-between hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">

          <Link href="/beta/videos/333">
            <Grid className="h-[50px] flex items-center justify-between text-textLight dark:text-textDark">
              <PlayArrowIcon className="text-textLight dark:text-textDark" />
              <Grid className="w-[100px] h-full relative">
                <Image src="/thumbnail-everest.jpg" alt="" fill />
              </Grid>
              <Grid className="flex min-h-[50px] flex-col justify-start">
                <Typography className="pl-2 mt-[-4px] text-lg line-clamp-1">
                  Who created this beautiful world?
                </Typography>
                <Typography className="text-sm opacity-[0.8] pl-2">
                  Explore
                </Typography>
              </Grid>
            </Grid>
          </Link>
          <Grid>
            <MoreMenus />
          </Grid>
          </Grid>))}
        </List>
      </Collapse>
    </Grid>
  );
};

export default Playlist;
