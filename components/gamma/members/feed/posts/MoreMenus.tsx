import * as React from "react";
import { useTheme } from "next-themes";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HideSourceIcon from '@mui/icons-material/HideSource';
import SnoozeIcon from '@mui/icons-material/Snooze';
import ShareIcon from "@mui/icons-material/Share";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

export default function MoreMenus() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          m: 0,
          p: 0,
        }}
      >
        <IconButton
          className="focus:outline-none hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover"
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MoreHorizIcon className="text-end text-textLight dark:text-textDark" />
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
            backgroundColor: currentTheme === "dark" ? "#474849" : "#fff",
            color: currentTheme === "dark" ? "#fff" : "#000",
            overflow: "visible",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <NotificationsActiveIcon /> <Grid className="ml-4">Turn on notifications for this post</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <HideSourceIcon /> <Grid className="ml-4">Hide post</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <SnoozeIcon /> <Grid className="ml-4">Snooze Arif Azad for 30 days</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <DoNotDisturbIcon />{" "}
          <Grid className="ml-4">Unfollow Arif Azad</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <FlagCircleIcon /> <Grid className="ml-4">Report post</Grid>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
