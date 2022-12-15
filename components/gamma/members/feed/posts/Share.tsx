import * as React from "react";
import { useTheme } from "next-themes";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import LinkIcon from '@mui/icons-material/Link';
import { FaShare } from "react-icons/fa";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import ForumIcon from '@mui/icons-material/Forum';

export default function Share() {
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
        <Grid onClick={handleClick} className="flex items-center justify-end cursor-pointer px-5 py-2 rounded-sm hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover">
          <FaShare />
          <Typography className="pl-2 p-0">Share</Typography>
        </Grid>
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
          <ForumIcon /> <Grid className="ml-4">Share to feed</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <GroupsIcon /> <Grid className="ml-4">Share to a group</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <GroupIcon /> <Grid className="ml-4">Share to a friend&lsquo;s profile</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <LinkIcon />
          <Grid className="ml-4">Copy link</Grid>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
