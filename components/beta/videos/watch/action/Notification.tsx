import * as React from 'react';
import {useTheme} from "next-themes";
import {Grid} from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Notification() {
  const {systemTheme , theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme ;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
        <Grid sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', pl:2 }}>
        <IconButton
            className='focus:outline-none'
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <NotificationsNoneIcon className='text-textLight dark:text-textDark'/>
          </IconButton>
        </Grid>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            boxShadow: "0px 0px 25px 25px rgba(0,0,0,0.2)",
            backgroundColor: currentTheme==='dark'? "#474849": "#fff",
            color: currentTheme==='dark'? "#fff": "#000",
            overflow: 'visible',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem className='hover:bg-bgLightHover dark:hover:bg-bgDarkHover'>
          <NotificationsActiveIcon /> <Grid className='ml-4'>All</Grid>
        </MenuItem>
        <MenuItem className='hover:bg-bgLightHover dark:hover:bg-bgDarkHover'>
          <NotificationsOffIcon /> <Grid className='ml-4'>None</Grid>
        </MenuItem>
        
      </Menu>
    </React.Fragment>
  );
}