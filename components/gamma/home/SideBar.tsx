import React from "react";
import {
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  IconButton,
  Divider
} from "@mui/material";
import Image from "next/image";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";


const SideBar = () => {
  const [pageIndex, setPageIndex] = React.useState<number>(3);
  const [groupIndex, setGroupIndex] = React.useState<number>(3);

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pagesToRender = pages.slice(0, pageIndex);
  const groupsToRender = groups.slice(0, groupIndex);

  return (
    <Grid className="w-[15rem] h-[90vh] pb-5 fixed overflow-y-auto left-0 bg-bgLight dark:bg-bgDark flex flex-col p-3 text-textLight dark:text-textDark">
      <Link href="/gamma/profiles/123">
      <Grid className="w-full flex justify-start items-center">
        <Avatar src="/user.jpg" />
        <Typography className="pl-4 text-textLight dark:text-textDark">Sazzad Hossen</Typography>
      </Grid>
      </Link>
      <Divider className="my-3" />
      <Typography className="p-0">Pages</Typography>
      <List>
        {pagesToRender.map((_, i) => (
          <ListItem
            key={i}
            className="py-1 px-2 rounded-[5px] flex items-center cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          >
            <Grid className="relative w-[30px] h-[20px]">
              <Image src="/thumbnail-coding.jpg" alt="" fill />
            </Grid>
            <Typography className="p-2 line-clamp-1 text-sm">
              Coding Competition
            </Typography>
          </ListItem>
        ))}
        <ListItem
          onClick={() => setPageIndex(pageIndex === 3 ? pages.length : 3)}
          className="p-2 rounded-[5px] cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <IconButton className="w-[30px] h-[30px] focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
            {pageIndex === pages.length ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </IconButton>
          <Typography className="p-2 line-clamp-1 text-sm">
            {pageIndex === pages.length ? "See less" : "See more"}
          </Typography>
        </ListItem>
      </List>
      <Typography className="p-0">Groups</Typography>
      <List>
        {groupsToRender.map((_, i) => (
          <ListItem
            key={i}
            className="py-1 px-2 rounded-[5px] flex items-center cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          >
            <Grid className="relative w-[30px] h-[20px]">
              <Image src="/thumbnail-everest.jpg" alt="" fill />
            </Grid>
            <Typography className="p-2 line-clamp-1 text-sm">
              Coders Bangladesh
            </Typography>
          </ListItem>
        ))}
        <ListItem
          onClick={() => setGroupIndex(groupIndex === 3 ? groups.length : 3)}
          className="p-2 rounded-[5px] cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <IconButton className="w-[30px] h-[30px] focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
            {groupIndex === groups.length ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </IconButton>
          <Typography className="p-2 line-clamp-1 text-sm">
            {groupIndex === groups.length ? "See less" : "See more"}
          </Typography>
        </ListItem>
        
      </List>
    </Grid>
  );
};

export default SideBar;
