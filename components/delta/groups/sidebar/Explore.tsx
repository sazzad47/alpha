import React, { useContext } from "react";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { sidebarTypes } from "../context/types";
import { Context, StoreProps } from "../context/store";
import SearchBar from "./SearchBar";
import AddIcon from '@mui/icons-material/Add';
import SearchWith from "../../common/SearchWith";

const Explore = () => {
  const { dispatch } = useContext(Context) as StoreProps;

  return (
    <Grid className="absolute w-full h-full flex flex-col">
      <Grid className="relative text-lg text-textDark h-[10%] bg-[#34b483] dark:bg-[#66814b33] flex items-center justify-center">
        <IconButton
          onClick={() =>
            dispatch({
              type: sidebarTypes.CHANGE_SIDEBAR_STATE,
              payload: { showMainBar: true },
            })
          }
          className="focus:outline-none absolute left-2 text-inherit"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        Explore
      </Grid>
      <Grid className="w-full flex gap-5 justify-start items-center h-[10%] px-3">
        <Typography className="p-0">Search with</Typography>
        <SearchWith/>
      </Grid>
     <Grid className="w-full flex justify-center h-[10%] px-3">
      <SearchBar/>
     </Grid>
      <Grid className="h-[70%] max-h-[70%] overflow-y-auto">
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
            <Grid
              key={i}
              className="px-3 py-3 cursor-pointer flex items-center justify-between hover:bg-bgButton dark:hover:bg-bgButtonDark "
            >
              <Grid className="flex items-center gap-2">
                <Avatar src="/thumbnail-everest.jpg" className="w-[50px] h-[50px]" />
                <Typography className="p-0">Bike Lovers</Typography>
              </Grid>
                <IconButton className="focus:outline-none bg-transparent text-textLight dark:text-textDark">
                  <AddIcon/>
                </IconButton>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Explore;
