import * as React from 'react';
import {useTheme} from "next-themes";
import {Grid} from '@mui/material'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NotifyHeadDropdown() {
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
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',  }}>
          <IconButton
            className='focus:outline-none'
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreHorizIcon className='text-textLight dark:text-textDark'/>
          </IconButton>
      </Box>
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
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: currentTheme==='dark'? "#474849": "#fff",
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem className='hover:bg-bgLightHover dark:hover:bg-bgDarkHover'>
          <CheckIcon /> <Grid className='ml-4'>Mark all as read</Grid>
        </MenuItem>
        <MenuItem className='hover:bg-bgLightHover dark:hover:bg-bgDarkHover'>
          <SettingsIcon /> <Grid className='ml-4'>Notifications settings</Grid>
        </MenuItem>

        
      </Menu>
    </React.Fragment>
  );
}