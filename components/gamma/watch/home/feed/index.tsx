import React, { useState } from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import MoreMenus from "./MoreMenus";
import Angry from "../../../../../public/icons/angry.png";
import Care from "../../../../../public/icons/care.png";
import Haha from "../../../../../public/icons/haha.png";
import Like from "../../../../../public/icons/like.png";
import Love from "../../../../../public/icons/love.png";
import Sad from "../../../../../public/icons/sad.png";
import Wow from "../../../../../public/icons/wow.png";
import Actions from "./Actions";
import Link from "next/link";

interface Props {
  children: string;
}

const ReadMore = ({ children }: Props) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="pl-0 my-3 inline w-full">
      {isReadMore ? text.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        className="font-bold text-textLight dark:text-textDark cursor-pointer"
      >
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};
const icons = [
  { id: 1, icon: Like },
  { id: 2, icon: Love },
  { id: 3, icon: Care },
  { id: 4, icon: Wow },
  { id: 5, icon: Haha },
  { id: 6, icon: Sad },
  { id: 7, icon: Angry },
];
const Posts = () => {
  return (
    <React.Fragment>
     <Grid className="pt-5">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Grid
          key={i}
          container
          className="text-textLight dark:text-textDark w-full mb-5 p-5 bg-bgLight dark:bg-bgDark"
        >
          <Grid item xs={12} className="flex flex-col">
            <Grid className="flex items-center justify-between">
              <Grid className="flex items-start">
                <Link href="/gamma/profiles/123">
                  <Avatar src="/thumbnail-everest.jpg" />
                </Link>
                <Grid className="flex flex-col justify-start mt-[-2px]">
                  <Typography className="p-0 pl-2 text-lg text-textLight dark:text-textDark">
                    Beauty of Bangladesh
                  </Typography>
                  <Typography className="p-0 pl-2 text-sm">
                    1h <PublicIcon className="text-sm" />
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <MoreMenus />
              </Grid>
            </Grid>
            <ReadMore>
              Python is commonly used for developing websites and software, task
              automation, data analysis, and data visualization. Since its
              relatively easy to learn, Python has been adopted by many
              non-programmers such as accountants and scientists, for a variety
              of everyday tasks, like organizing finances.
            </ReadMore>
            <video src={"/bg-hero.mp4"} autoPlay loop controls />

            <Actions />
          </Grid>
        </Grid>
      ))}
     </Grid>
    </React.Fragment>
  );
};

export default Posts;
