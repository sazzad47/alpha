import React from 'react'
import {
  Grid,
  Avatar,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import { useTheme } from 'next-themes';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


interface Props {
  handleClose: () => void;
}
const MembersList = ({handleClose}: Props) => {
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
            <Tab className='normal-case' label="Members" {...a11yProps(0)} />
            <Tab className='normal-case' label="Admins" {...a11yProps(1)} />
          </Tabs>
          <IconButton onClick={handleClose} className="text-textLight dark:text-textDark w-[30px] h-[30px] bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
                <CloseIcon/>
            </IconButton>
        </Grid>
          <Grid className='min-h-[20rem] max-h-[20rem] overflow-y-auto scrollbar scrollbar-track-[transparent]'>
          <TabPanel value={value} index={0}>
            {[1,2,3,4,5,6,7,8,9].map((_, i)=> (
              <Grid key={i} className="w-full flex justify-between items-center my-3">
                <Grid className='flex items-center'>
                  <Avatar src='/user.jpg' />
                  <Typography className='pl-2 p-0'>Shafin Ahmed</Typography>
                </Grid>
                <Button className='focus:outline-none flex items-center normal-case text-textLight dark:text-textDark bg-[#f0e1e1] dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'><PersonAddIcon/> <Typography className='pl-2 p-0'>Add to contact</Typography></Button>
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {[1,2].map((_, i)=> (
              <Grid key={i} className="w-full flex justify-between items-center my-3">
                <Grid className='flex items-center'>
                  <Avatar src='/user.jpg' />
                  <Typography className='pl-2 p-0'>Arif Azad</Typography>
                </Grid>
                <Button className='focus:outline-none flex items-center normal-case text-textLight dark:text-textDark bg-[#f0e1e1] dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover'><PersonAddIcon/> <Typography className='pl-2 p-0'>Add to contact</Typography></Button>
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

export default MembersList