import * as React from "react";
import { useTheme } from "next-themes";
import { Grid, Typography, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function SortComment() {
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
      <Grid container className="mt-5 flex flex-col">
        <Grid className="flex justify-end">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              m: 0,
              p: 0,
            }}
          >
            <Tooltip title="Sort comments">
              <IconButton
                className="flex focus:outline-none h-[0] text-textLight dark:text-textDark"
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                disableRipple
              >
                <Typography className="p-0">All comments</Typography>
                <ArrowDropDownIcon className="text-textLight dark:text-textDark" />
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
              <Grid>All comments</Grid>
            </MenuItem>
            <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
              <Grid>Top comments</Grid>
            </MenuItem>
            <MenuItem className="hover:bg-bgLightHover dark:hover:bg-bgDarkHover">
              <Grid>Most recent comments</Grid>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
