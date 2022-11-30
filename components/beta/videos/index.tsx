import React, { useState } from "react";
import { Grid, Collapse } from "@mui/material";
import Watch from "./watch";
import Suggestions from "./Suggestions";
import Action from "./watch/action";
import Description from "./watch/Description";
import CommentBox from "./watch/comment";

const Index = () => {
  const [showCommentBox, setShowCommentBox] = React.useState(false);
  const [showReportBox, setShowReportBox] = React.useState(false);
  const [showInfoBox, setShowInfoBox] = React.useState(false);

  const [theaterMode, setTheaterMode] = useState<boolean>(false);
  const toggleTheater = () => {
    setTheaterMode((prev) => !prev);
  };
  const handleShowCommentBox = () => {
    setShowCommentBox(!showCommentBox);
    setShowReportBox(false);
    setShowInfoBox(false);
  };
  const handleShowReportBox = () => {
    setShowReportBox(!showReportBox);
    setShowCommentBox(false);
    setShowInfoBox(false);
  };
  const handleShowInfoBox = () => {
    setShowInfoBox(!showInfoBox);
    setShowCommentBox(false);
    setShowReportBox(false);
  };

  return (
    <Grid className="min-h-[100vh] px-5 w-full max-w-full py-[5rem] bg-[#eee] dark:bg-[#242526]">
      <Grid
        container
        spacing={2}
        className={`${theaterMode ? "hidden" : "flex"}`}
      >
        <Grid item xs={12} md={7}>
          <Watch toggleTheater={toggleTheater} />
          <Grid>commentBox</Grid>
          <Action
            handleShowCommentBox={handleShowCommentBox}
            handleShowReportBox={handleShowReportBox}
            handleShowInfoBox={handleShowInfoBox}
          />
          {showInfoBox && <Description />}
          {showCommentBox && <CommentBox />}
          <Grid className="mt-5">
            <Suggestions />
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Suggestions />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        className={`${theaterMode ? "flex" : "hidden"}`}
      >
        <Grid item xs={12}>
          <Watch toggleTheater={toggleTheater} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Action
            handleShowCommentBox={handleShowCommentBox}
            handleShowReportBox={handleShowReportBox}
            handleShowInfoBox={handleShowInfoBox}
          />
          {showInfoBox && <Description />}
          {showCommentBox && <CommentBox />}
          <Grid className="mt-5">
            <Suggestions />
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Suggestions />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
