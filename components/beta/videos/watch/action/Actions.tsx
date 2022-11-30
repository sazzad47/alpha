import React from "react";
import { Grid, Button, Badge, Tooltip, IconButton } from "@mui/material";
import MoreActions from "./MoreActions";
import GroupsIcon from "@mui/icons-material/Groups";
import DoneIcon from "@mui/icons-material/Done";
import StarIcon from "@mui/icons-material/Star";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CommentIcon from "@mui/icons-material/Comment";
import InfoIcon from "@mui/icons-material/Info";
import Report from "./Report";
interface Props {
  handleShowInfoBox: () => void;
  handleShowCommentBox: () => void;
  handleShowReportBox: () => void;
}
const Actions = ({
  handleShowInfoBox,
  handleShowCommentBox,
  handleShowReportBox,
}: Props) => {
  return (
    <Grid className="flex justify-between">
      <Tooltip title="You are a member">
        <IconButton className="focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark">
          <Badge
            badgeContent={
              <DoneIcon className="text-textLight dark:text-textDark text-sm" />
            }
          >
            <GroupsIcon className="text-textLight dark:text-textDark" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Star">
        <IconButton className="focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark">
          <StarIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Angry">
        <IconButton className="focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark">
          <SentimentVeryDissatisfiedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Comment">
        <IconButton
          onClick={handleShowCommentBox}
          className="focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark"
        >
          <CommentIcon />
        </IconButton>
      </Tooltip>
     
      <Report/>
      <Tooltip title="Information">
        <IconButton onClick={handleShowInfoBox} className="focus:outline-none bg-bgButton hover:bg-bgButtonHover dark:bg-bgButtonDark dark:hover:bg-bgButtonDarkHover text-textLight dark:text-textDark">
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <MoreActions />
    </Grid>
  );
};

export default Actions;
