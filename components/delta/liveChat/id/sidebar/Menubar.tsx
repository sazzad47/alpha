import React, { useContext } from "react";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import { Context, StoreProps } from "../../context/store";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { sidebarTypes } from "../../context/types";
import CreateIcon from '@mui/icons-material/Create';

const Menubar = () => {
  const { dispatch } = useContext(Context) as StoreProps;
  return (
    <Grid className="h-full flex flex-col justify-center items-center">
      <Grid className="w-full px-3 h-[50%] bg-[#34b483] dark:bg-[#66814b33] flex items-center justify-between">
        <Typography className="p-0 text-xl">Groups</Typography>
        <Grid className="flex items-center">
        <Tooltip
          title="Create new group"
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
                payload: { showCreateBar: true },
              })
            }
            className="focus:outline-none bg-transparent text-textLight dark:text-textDark"
          >
            <CreateIcon />
          </IconButton>
        </Tooltip>
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
                payload: { showGroupExplore: true },
              })
            }
            className="focus:outline-none bg-transparent text-textLight dark:text-textDark"
          >
            <TravelExploreIcon />
          </IconButton>
        </Tooltip>
        </Grid>
      </Grid>
      <Grid className="w-full h-[50%] flex">
        <SearchBar />
      </Grid>
    </Grid>
  );
};

export default Menubar;
