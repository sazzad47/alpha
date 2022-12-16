import React from "react";
import {
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  IconButton,
  Divider,
  Button
} from "@mui/material";
import Image from "next/image";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";


const SideBar = () => {
  const [contactIndex, setContactIndex] = React.useState<number>(3);
  const [pageIndex, setPageIndex] = React.useState<number>(3);
  const [groupIndex, setGroupIndex] = React.useState<number>(3);

  const contacts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const groups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const contactsToRender = pages.slice(0, contactIndex);
  const pagesToRender = pages.slice(0, pageIndex);
  const groupsToRender = groups.slice(0, groupIndex);

  return (
    <Grid className="w-[20rem] h-[90vh] pb-5 fixed overflow-y-auto left-0 bg-bgLight dark:bg-bgDark flex flex-col p-3 text-textLight dark:text-textDark">
      <Link href="/gamma/profiles/123">
      <Grid className="w-full flex justify-start items-center">
        <Avatar src="/user.jpg" />
        <Typography className="pl-4 text-textLight dark:text-textDark">Sazzad Hossen</Typography>
      </Grid>
      </Link>
      <Divider className="my-3" />
      <Grid className="flex flex-col">
        <Grid className="flex items-center justify-between">
          <Typography className="p-0">Member requests</Typography>
          <Link href="#">
            <Typography className="p-0 text-sm text-textLight dark:text-textDark">
              See all
            </Typography>
          </Link>
        </Grid>
        <Grid className="relative w-full h-[5rem] flex items-start mt-2">
          <Grid className="bottom-0 w-[9.8rem] right-0 absolute flex items-center justify-between">
            <Button className="focus:outline-none bg-[#f0e1e1] hover:bg-bgButtonHover dark:bg-[#707075] dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark capitalize text-sm">
              Confirm
            </Button>
            <Button className="focus:outline-none bg-bgLight hover:bg-bgButtonHover dark:bg-bgDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark capitalize text-sm">
              Cancel
            </Button>
          </Grid>
          <Link href="/gamma/profiles/123">
            <Grid className="flex items-start text-textLight dark:text-textDark">
              <Avatar src="/user.jpg" />
              <Grid className="w-[10rem] flex flex-col pl-2">
                <Typography className="p-0">Sazzad Hossen</Typography>
                <Typography className="p-0 text-sm line-clamp-2">
                  1 mutual friend
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      </Grid>
      <Divider className="my-4" />
      <Grid className="flex flex-col">
        <Typography className="p-0 mb-2">Create</Typography>
        <Link href="/gamma/pages/create" >
        <Grid className="text-textLight dark:text-textDark py-1 px-2 rounded-[5px] flex items-center cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
          <IconButton className="w-[30px] h-[30px] focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-[#707075]">
            <AiOutlinePlus />
          </IconButton>
          <Typography className="pl-2 text-sm">Create new page</Typography>
        </Grid>
        </Link>
        <Link href="/gamma/groups/create" >
        <Grid className="text-textLight dark:text-textDark py-1 px-2 rounded-[5px] flex items-center cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
          <IconButton className="w-[30px] h-[30px] focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-[#707075]">
            <AiOutlinePlus />
          </IconButton>
          <Typography className="pl-2 text-sm">Create new group</Typography>
        </Grid>
        </Link>
      </Grid>
      <Divider className="my-4" />
      <Typography className="p-0">Contacts</Typography>
      <List>
        {contactsToRender.map((_, i) => (
          <ListItem
            key={i}
            className="py-1 px-2 rounded-[5px] flex items-center cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          >
           <Link href="/gamma/profiles/123">
            <Grid className="text-textLight dark:text-textDark rounded-[5px] flex items-center hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
              <Avatar sx={{ width: "30px", height: "30px" }} src="/user.jpg" />
              <Typography className="pl-2 text-sm">Sazzad Hossen</Typography>
            </Grid>
          </Link>
          </ListItem>
        ))}
        <ListItem
          onClick={() => setContactIndex(contactIndex === 3 ? contacts.length : 3)}
          className="p-2 rounded-[5px] cursor-pointer hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
        >
          <IconButton className="w-[30px] h-[30px] focus:outline-none text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
            {contactIndex === contacts.length ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </IconButton>
          <Typography className="p-2 line-clamp-1 text-sm">
            {contactIndex === contacts.length ? "See less" : "See more"}
          </Typography>
        </ListItem>
      </List>
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
