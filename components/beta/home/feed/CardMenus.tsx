import * as React from "react";
import { useTheme } from "next-themes";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ShareIcon from "@mui/icons-material/Share";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

export default function CardMenus() {
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
          className="focus:outline-none w-0 h-[0]"
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MoreVertIcon className="text-end text-textLight dark:text-textDark" />
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
          <WatchLaterIcon /> <Grid className="ml-4">Save to Watch Later</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <DownloadForOfflineIcon /> <Grid className="ml-4">Download</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <ShareIcon /> <Grid className="ml-4">Share</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <DoNotDisturbIcon />{" "}
          <Grid className="ml-4">Don&apos;t recommend channel</Grid>
        </MenuItem>
        <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
          <FlagCircleIcon /> <Grid className="ml-4">Report</Grid>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
