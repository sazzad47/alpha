import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";

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
    <p className="pl-0 inline w-full">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="font-bold text-textLight dark:text-textDark cursor-pointer">
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};

const Description = () => {

  return (
    <Grid className="mt-5 bg-bgButton dark:bg-bgButtonDark p-2 text-textLight dark:text-textDark">
      <Typography className="pl-0 font-bold opacity-[0.8]">
        118K views • 5 days ago
      </Typography>
        <ReadMore>
          This entire universe is composed of billions of galaxies and we
          earthlings are a tiny part of one tiny planet having unimaginable
          imagination power to discover its composition and keep exploring self
          to find the eternal truth. We are surrounded by tangible and
          intangible things all around. To see the tangibles we have gifted with
          eyes and to see the intangibles we are given an unbounded/unlimited
          imagination power.
        </ReadMore>
    </Grid>
  );
};

export default Description;
