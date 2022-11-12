import * as React from "react";
import { BsBell } from "react-icons/bs";
import { ClickAwayListener } from "@mui/base";
import Image from "next/legacy/image";
import CircleIcon from '@mui/icons-material/Circle';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Tooltip,
  IconButton,
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
          <Tooltip title="Notifications">
            <IconButton className="focus:outline-none" onClick={()=> setOpen(!open)}>
              <Grid className="relative">
                <BsBell className="text-slate-50" />
                <span className="absolute bottom-2 left-2 text-xs text-slate-50 bg-red-600 rounded-full px-1">
                  9+
                </span>
              </Grid>
            </IconButton>
          </Tooltip>
          {open && <NotificationList />}
        </Grid>
      </ClickAwayListener>
    </React.Fragment>
  );
};
const NotificationItems = [
    {id: 1,
     channelName: "Sazzad Hossen",
     channelPhoto: "/user.jpg",
     event: "uploaded",
     title: "Is PHP a dead language? #programming #coding",
     thumbnail: "/thumbnail-coding.jpg",
     time: "2 hours ago",
     },
    {id: 2,
     channelName: "Sazzad Hossen",
     channelPhoto: "/user.jpg",
     event: "uploaded",
     title: "Is PHP a dead language? #programming #coding",
     thumbnail: "/thumbnail-coding.jpg",
     time: "2 hours ago",
     },
    {id: 3,
     channelName: "Sazzad Hossen",
     channelPhoto: "/user.jpg",
     event: "uploaded",
     title: "Is PHP a dead language? #programming #coding",
     thumbnail: "/thumbnail-coding.jpg",
     time: "2 hours ago",
     },
    {id: 4,
     channelName: "Sazzad Hossen",
     channelPhoto: "/user.jpg",
     event: "uploaded",
     title: "Is PHP a dead language? #programming #coding",
     thumbnail: "/thumbnail-coding.jpg",
     time: "2 hours ago",
     },
    {id: 5,
     channelName: "Sazzad Hossen",
     channelPhoto: "/user.jpg",
     event: "uploaded",
     title: "Is PHP a dead language? #programming #coding",
     thumbnail: "/thumbnail-coding.jpg",
     time: "2 hours ago",
     },
    {id: 6,
     channelName: "Sazzad Hossen",
     channelPhoto: "/user.jpg",
     event: "uploaded",
     title: "Is PHP a dead language? #programming #coding",
     thumbnail: "/thumbnail-coding.jpg",
     time: "2 hours ago",
     },
    {id: 7,
     channelName: "Sazzad Hossen",
     channelPhoto: "/user.jpg",
     event: "uploaded",
     title: "Is PHP a dead language? #programming #coding",
     thumbnail: "/thumbnail-coding.jpg",
     time: "2 hours ago",
     },
]
function NotificationList() {
  return (
    <React.Fragment>
        <Grid className="dropdown_notification_beta flex flex-col items-center justify-center text-slate-50 pt-[15rem] pb-[1rem] bg-[#242526]">
      
      <Grid className="notify_head_beta w-full flex items-start justify-between pt-[5rem]">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <Grid className="mb-2">
            <NotifyHeadDropdown/>
            </Grid>
         
      </Grid>
    <List>
       
      {NotificationItems.map((item) => (
         <ListItem key={item.id} className="flex flex-col cursor-pointer hover:bg-zinc-900">
            <Grid className="flex items-start justify-center">

         <ListItemAvatar className="mt-2">
           <Avatar alt="Sazzad Hossen" src={`${item.channelPhoto}`} />
         </ListItemAvatar>
         <Grid className="flex">
            
         <ListItemText>
            <h3>{item.channelName} {item.event}: {item.title}</h3>
         </ListItemText>
         <Grid className="h-[50px] w-[200px] top-2 relative flex items-center overflow-hidden">
            <Image src={`${item.thumbnail}`} alt="" layout="fill" objectFit="cover" />


         </Grid>
         <Grid className="ml-3 flex flex-col justify-between items-end">
            <MoreDropdown/>
            
         </Grid>
         </Grid>
            </Grid>
         <Grid className="w-full flex items-center justify-between mt-2 px-3">
            <span className="text-slate-300 ml-[2.6rem] text-sm">{item.time}</span>
            <CircleIcon sx={{color:'blue', fontSize:'10px'}}/>
         </Grid>
       </ListItem>
      ))}
      
    </List>
       </Grid>
 
    </React.Fragment>
  );
}

export default Notification;
