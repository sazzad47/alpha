import * as React from "react";
import { useTheme } from "next-themes";
import { Grid, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';


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
        <Tooltip title="Menu">
        <IconButton
          className="focus:outline-none hover:bg-bgButton dark:hover:bg-bgButtonDark"
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MoreVertIcon className="text-end text-textLight dark:text-textDark" />
        </IconButton>
        </Tooltip>
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
          <Grid className="">Contact info</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
           <Grid className="">Close chat</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
           <Grid className="">Mute notifications</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
           <Grid className="">Delete chat</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
           <Grid className="">Report</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
           <Grid className="">Block</Grid>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
