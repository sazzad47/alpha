import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  Divider
} from "@mui/material";
import Image from "next/image";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";


const SideBar = () => {
  const [groupIndex, setGroupIndex] = React.useState<number>(3);
  
  const groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const groupsToRender = groups.slice(0, groupIndex);

  return (
    <Grid className="w-[20rem] h-[90vh] pb-5 fixed overflow-y-auto left-0 bg-bgLight dark:bg-bgDark flex flex-col p-3 text-textLight dark:text-textDark">
      <Typography className="p-0 text-xl my-2">Groups</Typography>
      <Grid className="flex flex-col">
      <Link href="/gamma/groups/create">
        <Grid className="text-textLight dark:text-textDark py-1 px-2 rounded-[5px] flex items-center cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
          <IconButton className="w-[30px] h-[30px] focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-[#707075]">
            <AiOutlinePlus />
          </IconButton>
          <Typography className="pl-2 text-sm">Create new group</Typography>
        </Grid>
      </Link>
      </Grid>
      <Divider className="my-4" />
      <Typography className="p-0">Groups you manage</Typography>
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
      <Divider className="my-4" />
      <Typography className="p-0">Groups you have joined</Typography>
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
