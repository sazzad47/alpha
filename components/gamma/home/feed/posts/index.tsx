import React, {useState} from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import MoreMenus from "./MoreMenus";


interface Props {
  children: string
}
const ReadMore = ( {children}: Props ) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="pl-0 my-3 inline w-full">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="font-bold text-textLight dark:text-textDark cursor-pointer">
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};

const Posts = () => {
  return (
    <Grid
      container
      className="text-textLight dark:text-textDark w-[calc(100%-2rem)] mx-1 my-5 p-5 bg-bgLight dark:bg-bgDark"
    >
      <Grid item xs={12} className="flex flex-col">
        <Grid className="flex items-center justify-between">
          <Grid className="flex items-start">
            <Avatar src="/user.jpg" />
            <Grid className="flex flex-col justify-start mt-[-2px]">
              <Typography className="p-0 pl-2">Arif Azad</Typography>
              <Typography className="p-0 pl-2 text-sm">
                8h <PublicIcon className="text-sm" />{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <MoreMenus />
          </Grid>
        </Grid>
        <ReadMore>
          What is the world made of? Depending on whom you ask, you will get
          very different answers to that question. To a biologist, the world is
          made of living organisms. To a chemist, the world is made of molecules
          formed from atoms. If you ask that question of a physicist, the
          physicist will probably start by talking about atoms, and then proceed
          to talk about the protons, neutrons and electrons that make up an atom
          </ReadMore>
         <hr className="my-4"/>
         
      </Grid>
    </Grid>
  );
};

export default Posts;
