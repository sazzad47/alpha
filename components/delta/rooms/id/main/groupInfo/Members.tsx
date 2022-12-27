import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import MembersList from "./MembersList";
import { useTheme } from "next-themes";

export default function Members() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid onClick={handleClickOpen} className="flex items-center cursor-pointer">
        <Typography className="p-0 text-sm opacity-[0.7]">120 members</Typography>
      </Grid>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: currentTheme === "dark" ? "#474849" : "#fff",
            minWidth: "30rem",
          },
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Grid className="flex flex-col">
          <Grid className="flex justify-between items-center p-4">
            <MembersList handleClose={handleClose} />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
