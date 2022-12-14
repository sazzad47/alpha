import React, { useContext } from "react";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import { Context, StoreProps } from "../context/store";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { sidebarTypes } from "../context/types";

const Menubar = () => {
  const { dispatch } = useContext(Context) as StoreProps;
  return (
    <Grid className="w-full h-full flex flex-col">
      <Grid className="w-full px-3 h-[50%] bg-[#34b483] dark:bg-[#66814b33] flex items-center justify-between">
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
      <Grid className="w-full h-[50%] flex">
        <SearchBar />
      </Grid>
    </Grid>
  );
};

export default Menubar;
