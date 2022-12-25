import React, { useContext } from "react";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import { Context, StoreProps } from "../context/store";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { sidebarTypes } from "../context/types";

const Menubar = () => {
  const { dispatch } = useContext(Context) as StoreProps;
  return (
    <Grid className="h-full flex flex-col justify-center items-center px-3 gap-3">
      <Grid className="w-full flex items-center justify-between">
        <Typography className="p-0 text-xl">Contacts</Typography>
        <Tooltip
          title="Explore"
          PopperProps={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -15],
                },
              },
            ],
          }}
        >
          <IconButton
            onClick={() =>
              dispatch({
                type: sidebarTypes.CHANGE_SIDEBAR_STATE,
                payload: { showContactExplore: true },
              })
            }
            className="focus:outline-none bg-transparent text-textLight dark:text-textDark"
          >
            <TravelExploreIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid className="w-full flex">
        <SearchBar />
      </Grid>
    </Grid>
  );
};

export default Menubar;
