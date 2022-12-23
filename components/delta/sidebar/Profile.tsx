import React, { useContext, useRef } from "react";
import { Avatar, Button, Grid, IconButton, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { SideMenuProps } from ".";
import { sidebarTypes } from "../context/types";
import { Context, StoreProps } from "../context/store";

interface ProfileProps {
  setState: Function;
}
const Profile = () => {
  const { dispatch } = useContext(Context) as StoreProps;
  const profilePhotoInput = useRef<HTMLInputElement>(null);

  const handleChooseProfilePhoto = () => {
    profilePhotoInput.current?.click();
  };
  return (
    <Grid className="absolute w-full h-full flex flex-col">
      <Grid className="relative text-lg text-textDark h-[20%] bg-[#34b483] dark:bg-[#66814b33] flex items-center justify-center">
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
        Profile
      </Grid>
      <Grid className="h-[80%] max-h-[80%] overflow-y-auto bg-[#e4c6c6] dark:bg-[#596570]">
        <Grid className="w-full flex flex-col items-center">
          <Grid className="w-full flex justify-center py-5">
            <Grid className="relative w-[150px] h-[150px] rounded-full">
              <Avatar
                onClick={handleChooseProfilePhoto}
                className="cursor-pointer absolute w-[150px] h-[150px]"
              />
              <IconButton
                onClick={handleChooseProfilePhoto}
                className="focus:outline-none absolute right-0 bottom-1"
              >
                <CameraAltIcon className="text-3xl" />
              </IconButton>
              <input
                type="file"
                accept="image/*"
                hidden
                ref={profilePhotoInput}
              />
            </Grid>
          </Grid>
          <Grid className="w-full py-3 bg-[#e4c6c6] dark:bg-[#596570]">
            <form>
              <Grid className="w-full flex flex-col px-3">
                <label>Name</label>
                <TextField
                  autoFocus
                  multiline
                  sx={{
                    "& label.Mui-focused": { color: "#fff" },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#fff",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#fff",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#fff",
                    },
                    "& .MuiInput-underline:hover:after": {
                      borderBottomColor: "#fff",
                    },
                  }}
                  variant="standard"
                  className="flex-1 bg-inherit focus:outline-none focus:border-b-2"
                />
              </Grid>
              <Grid className="w-full flex flex-col mt-3 px-3">
                <label>About</label>
                <TextField
                  autoFocus
                  multiline
                  minRows={3}
                  sx={{
                    "& label.Mui-focused": { color: "#fff" },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#fff",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#fff",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#fff",
                    },
                    "& .MuiInput-underline:hover:after": {
                      borderBottomColor: "#fff",
                    },
                  }}
                  variant="standard"
                  className="flex-1 bg-inherit focus:outline-none focus:border-b-2"
                />
                <Grid className="w-full flex justify-end mt-4">
                  <Button className="text-textDark normal-case focus:outline-none bg-[#34b483] dark:bg-[#66814b33]">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
