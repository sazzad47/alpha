import React, { useRef, ReactNode } from "react";
import { Grid, Button, Avatar, Typography, IconButton, Divider } from "@mui/material";
import Image from "next/image";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from "next/link";

type Props = {
  children?: ReactNode
}

const ProfileLayout = ({ children }: Props) => {
  const coverPhotoInput = useRef<HTMLInputElement>(null);
  const profilePhotoInput = useRef<HTMLInputElement>(null);

  const handleCoverPhoto = () => {};
  const handleProfilePhoto = () => {};
  const handleChooseCoverPhoto = () => {
    coverPhotoInput.current?.click();
  };
  const handleChooseProfilePhoto = () => {
    profilePhotoInput.current?.click();
  };
  const friendsPhotos = [
    { id: 1, name: "Amir Khan", photo: "/user.jpg" },
    { id: 2, name: "Misbah Ahmed", photo: "/user.jpg" },
    { id: 3, name: "Saiful Islam", photo: "/user.jpg" },
    { id: 4, name: "Zamil Borhan", photo: "/user.jpg" },
    { id: 5, name: "Johir Rayhan", photo: "/user.jpg" },
    { id: 6, name: "Zahidur Rahman", photo: "/user.jpg" },
    { id: 7, name: "Nayeem Nishat", photo: "/user.jpg" },
    { id: 8, name: "Tanbir Islam", photo: "/user.jpg" },
  ];
  return (
    <Grid className="bg-[#f7f2f2] flex flex-col items-center justify-start w-full dark:bg-[#242526] pt-[80px] min-h-[100vh] text-textLight dark:text-textDark">
      <Grid className="relative w-full h-[18rem]">
        <Image src="/fb-cover-photo.jpg" alt="" fill />
        <Button
          onClick={handleChooseCoverPhoto}
          className="bottom-5 right-5 focus:outline-none absolute normal-case text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark"
        >
          <CameraAltIcon className="pr-1" /> Edit cover photo
        </Button>
        <input
          ref={coverPhotoInput}
          hidden
          type="file"
          accept="image/*"
          onChange={handleCoverPhoto}
        />
      </Grid>
      <Grid
        container
        className="w-full relative p-5 flex justify-between items-end"
      >
        <Grid item className="flex">
          <Avatar
            onClick={handleChooseProfilePhoto}
            src="/user.jpg"
            sx={{
              width: "10rem",
              height: "10rem",
              position: "absolute",
              top: "-2rem",
              cursor: "pointer",
            }}
          />
          <IconButton
            onClick={handleChooseProfilePhoto}
            className="absolute left-[8rem] bottom-3 focus:outline-none normal-case text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark"
          >
            <CameraAltIcon className="" />
          </IconButton>
          <input
            ref={profilePhotoInput}
            hidden
            type="file"
            accept="image/*"
            onChange={handleProfilePhoto}
          />
          <Grid className="flex flex-col ml-[10rem] pl-4">
            <Typography className="p-0 text-4xl">Sazzad Hossen</Typography>
            <Link href="/gamma/profiles/123/friends"><Typography className="p-0 opacity-[0.7] text-textLight dark:text-textDark">3.2k friends</Typography></Link>
            <Grid className="flex mt-2">
              {friendsPhotos.map((friend, i) => (
                <Grid
                  key={friend.id}
                  className={`w-[30px] h-[30px] relative rounded-full border-2 ${
                    i >= 1 ? "ml-[-7px]" : "ml-0"
                  }`}
                >
                  <Avatar
                    className="z-[1] absolute w-full h-full text-textLight dark:text-textDark"
                    src={`${friend.photo}`}
                  />
                  {i===7 && <MoreHorizIcon className={`z-[20] absolute w-full h-full ${i===7 && "bg-[0,0,0,0.8]"}`}/>}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="">
          <Button className="focus:outline-none normal-case text-textLight dark:text-textDark bg-bgButton dark:bg-bgButtonDark">
            <EditIcon className="pr-1" />
            Edit profile
          </Button>
        </Grid>
      </Grid>
      <Grid className="w-full px-5">
      <Divider className="w-full my-5 text-textLight dark:text-textDark"/>
        <Link href="/gamma/profiles/123">Posts</Link>
        <Link href="/gamma/profiles/123/about">About</Link>
        <Link href="/gamma/profiles/123/friends">Friends</Link>
        <Link href="/gamma/profiles/123/photos">Photos</Link>
        <Link href="/gamma/profiles/123/videos">Videos</Link>
      </Grid>
      {children}
    </Grid>
  );
};

export default ProfileLayout;
