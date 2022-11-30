import React, { ReactNode } from "react";
import {
  Grid,
  Avatar,
  Typography,
  Tooltip,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Notification from "../videos/watch/action/Notification";
import { useTheme } from "next-themes";
import Layout from "../Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Home from "./Home";
import Videos from "./Videos";
import Playlists from "./Playlists";
import Channels from "./Channels";
import About from "./About";
import Shorts from "./Shorts";

const ChannelLayout = () => {
  const router = useRouter();
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Grid
        container
        className="flex flex-col pt-[3rem] bg-[#eee] dark:bg-[#242526]"
      >
        <Grid item className="relative w-full h-[30vh]">
          <Image src="/channelBanner.jpg" alt="" layout="fill" />
        </Grid>
        <Grid item className="w-full">
          <Grid container className="p-5 flex justify-between">
            <Grid item className="flex items-center">
              <Avatar src="/user.jpg" sx={{ width: "56px", height: "56px" }} />
              <Grid className="text-textLight dark:text-textDark ml-5 flex flex-col">
                <Typography className="pl-0 text-xl font-semibold">
                  Explore
                  <Tooltip title="Verified">
                    <CheckCircleIcon />
                  </Tooltip>
                </Typography>
                <Typography className="pl-0 opacity-[0.8]">@explore</Typography>
                <Typography className="pl-0 opacity-[0.8]">
                  162K Members
                </Typography>
              </Grid>
            </Grid>
            <Grid item className="flex items-center">
              <Button className="px-3 py-1 focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark rounded-3xl capitalize">
                Member
              </Button>
              <Notification />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="w-full">        
          <Tabs
            TabIndicatorProps={{
              sx: {
                bgcolor: currentTheme === "dark" ? "#fff" : "#000",
               
              }
            }}
            sx={{
              "& button": { color: currentTheme === "dark" ? "#fff" : "#000" },
              "& button:focus": { outline: "none" },
              "& button.Mui-selected": {
                color: currentTheme === "dark" ? "#fff" : "#000",
                backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Videos" {...a11yProps(1)} />
            <Tab label="Playlists" {...a11yProps(2)} />
            <Tab label="Shorts" {...a11yProps(3)} />
            <Tab label="Channels" {...a11yProps(4)} />
            <Tab label="About" {...a11yProps(5)} />
          </Tabs>
        </Grid>
        <Grid item className="w-full">
          <TabPanel value={value} index={0}>
            <Home/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Videos/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Playlists/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Shorts/>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Channels/>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <About/>
          </TabPanel>
        </Grid>
      </Grid>
    </Layout>
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
      {value === index && (
        <Grid>
          {children}
        </Grid>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default ChannelLayout;
