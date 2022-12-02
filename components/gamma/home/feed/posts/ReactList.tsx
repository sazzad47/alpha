import React from 'react'
import {
  Grid,
  Avatar,
  Typography,
  Tooltip,
  Button,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import { useTheme } from 'next-themes';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Like from "../../../../../public/icons/like.png";
import Love from "../../../../../public/icons/love.png";
import Sad from "../../../../../public/icons/sad.png";
import Wow from "../../../../../public/icons/wow.png";
import Image from 'next/image';
interface Props {
  handleClose: () => void;
}
const ReactList = ({handleClose}: Props) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid className='w-full text-textLight dark:text-textDark'>
        <Grid className='w-full flex items-center justify-between mb-3'>

          <Tabs
            TabIndicatorProps={{
              sx: {
                bgcolor: currentTheme === "dark" ? "#fff" : "#000",
               
              }
            }}
            sx={{
              "& button": { color: currentTheme === "dark" ? "#fff" : "#000", minWidth: '4rem', maxWidth: "4rem" },
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
            <Tab className='normal-case' label="All" {...a11yProps(0)} />
            <Tab label={<Grid className='flex items-center'><Avatar sx={{width:'20px', height:'20px'}} src={Like.src}/> <Typography className='pl-1 p-0 text-sm opacity-[0.7]'>100</Typography></Grid>} {...a11yProps(1)} />
            <Tab label={<Grid className='flex items-center'><Avatar sx={{width:'20px', height:'20px'}} src={Love.src}/> <Typography className='pl-1 p-0 text-sm opacity-[0.7]'>70</Typography></Grid>} {...a11yProps(2)} />
            <Tab label={<Grid className='flex items-center'><Avatar sx={{width:'20px', height:'20px'}} src={Wow.src}/> <Typography className='pl-1 p-0 text-sm opacity-[0.7]'>30</Typography></Grid>} {...a11yProps(3)} />
          </Tabs>
          <IconButton onClick={handleClose} className="w-[30px] h-[30px] bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <CloseIcon/>
            </IconButton>
        </Grid>
          <Grid className='min-h-[20rem] max-h-[20rem] overflow-y-auto'>
          <TabPanel value={value} index={0}>
            {[1,2,3,4,5,6,7,8,9].map((_, i)=> (
              <Grid key={i} className="w-full flex justify-between items-center my-3">
                <Grid className='flex items-center'>
                  <Avatar src='/user.jpg' />
                  <Typography className='pl-2 p-0'>Sazzad Hossen</Typography>
                </Grid>
                <Button className='flex items-center normal-case text-textLight dark:text-textDark bg-[#f0e1e1] dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'><PersonAddIcon/> <Typography className='pl-2 p-0'>Add Friend</Typography></Button>
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {[1,2,3,4,5].map((_, i)=> (
              <Grid key={i} className="w-full flex justify-between items-center my-3">
                <Grid className='flex items-center'>
                  <Avatar src='/user.jpg' />
                  <Typography className='pl-2 p-0'>Arif Azad</Typography>
                </Grid>
                <Button className='flex items-center normal-case text-textLight dark:text-textDark bg-[#f0e1e1] dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'><PersonAddIcon/> <Typography className='pl-2 p-0'>Add Friend</Typography></Button>
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {[1,2,3,4,5,6].map((_, i)=> (
              <Grid key={i} className="w-full flex justify-between items-center my-3">
                <Grid className='flex items-center'>
                  <Avatar src='/user.jpg' />
                  <Typography className='pl-2 p-0'>Mahmudul Hasan</Typography>
                </Grid>
                <Button className='flex items-center normal-case text-textLight dark:text-textDark bg-[#f0e1e1] dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'><PersonAddIcon/> <Typography className='pl-2 p-0'>Add Friend</Typography></Button>
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {[1,2,3,4].map((_, i)=> (
              <Grid key={i} className="w-full flex justify-between items-center my-3">
                <Grid className='flex items-center'>
                  <Avatar src='/user.jpg' />
                  <Typography className='pl-2 p-0'>Nasim Arafat</Typography>
                </Grid>
                <Button className='flex items-center normal-case text-textLight dark:text-textDark bg-[#f0e1e1] dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'><PersonAddIcon/> <Typography className='pl-2 p-0'>Add Friend</Typography></Button>
              </Grid>
            ))}
          </TabPanel>
          </Grid>
    </Grid>
  )
}

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

export default ReactList