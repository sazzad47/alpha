import React, { useRef } from "react";
import {
  Grid,
  Avatar,
  Typography,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";

import { useTheme } from "next-themes";
import Image from "next/image";
import About from "./about";
import Videos from "./videos";
import Members from "./members";
import Photos from "./photos";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import Home from "./home";

const Common = () => {
  const coverPhotoInput = useRef<HTMLInputElement>(null);
  const profilePhotoInput = useRef<HTMLInputElement>(null);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCoverPhoto = () => {};
  const handleProfilePhoto = () => {};
  const handleChooseCoverPhoto = () => {
    coverPhotoInput.current?.click();
  };
  const handleChooseProfilePhoto = () => {
    profilePhotoInput.current?.click();
  };

  return (
    <Grid
      container
      className="flex flex-col pt-[80px] bg-[#eee] dark:bg-[#242526] text-textLight dark:text-textDark"
    >
      <Grid item className="relative w-full h-[55vh]">
        <Image src="/fb-cover-photo.jpg" alt="" fill />
        <input
          ref={coverPhotoInput}
          hidden
          type="file"
          accept="image/*"
          onChange={handleCoverPhoto}
        />
        <Button
          onClick={handleChooseCoverPhoto}
          className="absolute bottom-4 right-4 focus:outline-none bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark normal-case"
        >
          <CameraAltIcon className="mr-1 text-lg" /> Edit cover photo
        </Button>
      </Grid>
      <Grid item className="w-full relative px-5">
        <Avatar
          onClick={handleChooseProfilePhoto}
          src="/user.jpg"
          className="top-[-50px] z-[10] absolute w-[150px] h-[150px] cursor-pointer"
        />
        <input
          ref={profilePhotoInput}
          hidden
          type="file"
          accept="image/*"
          onChange={handleProfilePhoto}
        />
        <Grid className="flex justify-between items-end">
          <Grid className="relative flex">
            <IconButton
              onClick={handleChooseProfilePhoto}
              className="focus:outline-none bg-bgButton dark:bg-bgButtonDark w-[40px] h-[40px] absolute left-[115px] bottom-[-10px] text-textLight dark:text-textDark z-[20]"
            >
              <CameraAltIcon />
            </IconButton>
            <Grid className="ml-[150px] mt-5">
              <Typography className="p-0 pl-5 text-2xl">
                Sazzad Hossen
              </Typography>
              <Typography className="p-0 pl-5">1.2k members</Typography>
            </Grid>
          </Grid>
          <Grid className="">
            <Button className="focus:outline-none bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark normal-case">
              {" "}
              <EditIcon className="mr-1 text-lg" /> Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="w-full mt-[5rem] px-5">
        <Tabs
          TabIndicatorProps={{
            sx: {
              bgcolor: currentTheme === "dark" ? "#fff" : "#000",
            },
          }}
          sx={{
            "& button": { color: currentTheme === "dark" ? "#fff" : "#000", textTransform:"capitalize" },
            "& button:focus": { outline: "none" },
            "& button.Mui-selected": {
              color: currentTheme === "dark" ? "#fff" : "#000",
              backgroundColor: "transparent",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Members" {...a11yProps(2)} />
          <Tab label="Photos" {...a11yProps(3)} />
          <Tab label="Videos" {...a11yProps(4)} />
        </Tabs>
      </Grid>
      <Grid item className="w-full px-5">
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Members />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Photos />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Videos />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Grid>{children}</Grid>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default Common;
