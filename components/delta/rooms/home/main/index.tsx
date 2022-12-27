import React from "react";
import { Button, Grid, Typography, Badge, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px `,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Main = () => {
  return (
    <Grid className="w-full bg-bgLight dark:bg-bgDark min-h-[90vh] max-h-[90vh] overflow-y-auto p-5">
      <Grid className="w-full grid grid-cols-4 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
          <Grid key={i} className="flex flex-col items-center gap-2">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="" src="/thumbnail-coding.jpg" className="w-[70px] h-[70px]" />
            </StyledBadge>
            <Typography className="p-0 line-clamp-1">Data Science</Typography>
            <Button
              fullWidth
              className="text-textLight dark:text-textDark focus:outline-none bg-bgButton dark:bg-bgButtonDark hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover normal-case"
            >
              Join
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Main;
