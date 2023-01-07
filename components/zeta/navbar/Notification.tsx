import * as React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { ClickAwayListener } from "@mui/base";
import Image from "next/legacy/image";
import CircleIcon from "@mui/icons-material/Circle";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Tooltip,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import MoreDropdown from "./MoreDropdown";
import NotifyHeadDropdown from "./NotifyHeadDropdown";

const Notification = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Grid>
          <Tooltip title="Cart">
            <IconButton
              className="focus:outline-none text-textLight dark:text-textDark"
              onClick={() => setOpen(!open)}
            >
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon color="inherit" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Grid>
      </ClickAwayListener>
    </React.Fragment>
  );
};
const NotificationItems = [
  {
    id: 1,
    channelName: "Sazzad Hossen",
    channelPhoto: "/user.jpg",
    title: "Hunters accepted your request to join ther room",
    time: "2 hours ago",
  },
  {
    id: 2,
    channelName: "Sazzad Hossen",
    channelPhoto: "/user.jpg",
    title: "Hunters accepted your request to join ther room",
    time: "2 hours ago",
  },
  {
    id: 3,
    channelName: "Sazzad Hossen",
    channelPhoto: "/user.jpg",
    title: "Hunters accepted your request to join ther room",
    time: "2 hours ago",
  },
  {
    id: 4,
    channelName: "Sazzad Hossen",
    channelPhoto: "/user.jpg",
    title: "Hunters accepted your request to join ther room",
    time: "2 hours ago",
  },
  {
    id: 5,
    channelName: "Sazzad Hossen",
    channelPhoto: "/user.jpg",
    title: "Hunters accepted your request to join ther room",
    time: "2 hours ago",
  },
  {
    id: 6,
    channelName: "Sazzad Hossen",
    channelPhoto: "/user.jpg",
    title: "Hunters accepted your request to join ther room",
    time: "2 hours ago",
  },
  {
    id: 7,
    channelName: "Sazzad Hossen",
    channelPhoto: "/user.jpg",
    title: "Hunters accepted your request to join ther room",
    time: "2 hours ago",
  },
];
function NotificationList() {
  return (
    <React.Fragment>
      <Grid className="absolute top-[10vh] w-[450px] max-h-[90vh] translate-x-[-75%] p-[1rem] overflow-y-auto overflow-x-hidden rounded-md z-[1000] border border-gray-300 bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark">
        <Grid className="w-full h-[10vh] flex items-start justify-between">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <Grid className="">
            <NotifyHeadDropdown />
          </Grid>
        </Grid>
        <Grid className="w-full flex flex-col gap-2">
          {NotificationItems.map((item) => (
            <Grid key={item.id} className="w-full p-2 hover:bg-bgButton dark:hover:bg-bgButtonDark cursor-pointer">
              <Grid className="w-full h-full flex items-start gap-2">
                <Avatar src="/user.jpg" />
                <Grid className="flex flex-col gap-1">
                  <Typography className="p-0">{item.title}</Typography>
                  <Grid className="flex items-center gap-3">
                    <Typography className="p-0 text-sm opacity-[0.6]">
                      {item.time}
                    </Typography>
                    <CircleIcon className="text-[blue] text-xs" />
                  </Grid>
                </Grid>
                <Grid>
                  <MoreDropdown />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Notification;
