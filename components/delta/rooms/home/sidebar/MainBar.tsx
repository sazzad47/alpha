import React from "react";
import { Avatar, Grid, Typography, Badge } from "@mui/material";
import Menubar from "./Menubar";
import Link from "next/link";
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
const MainBar = () => {
  return (
    <Grid className="absolute w-full h-full flex flex-col">
      <Grid className="h-[20%]">
        <Menubar />
      </Grid>
      <Grid className="h-[80%] max-h-[80%] overflow-y-auto">
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
            <Grid
              key={i}
              className="px-3 py-3 cursor-pointer flex items-start justify-between hover:bg-bgButton dark:hover:bg-bgButtonDark "
            >
              <Link href="/delta/groups/123">
                <Grid className="text-textLight dark:text-textDark w-full flex items-center gap-4">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt=""
                      src="/thumbnail-coding.jpg"
                      className="w-[50px] h-[50px]"
                    />
                  </StyledBadge>
                  <Grid className="flex-1 flex flex-col">
                    <Typography className="p-0 line-clamp-1">
                      Cyber Security
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainBar;
