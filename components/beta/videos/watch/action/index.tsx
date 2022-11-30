import React from "react";
import { Grid, Avatar, Typography, Button } from "@mui/material";
import channelPhoto from "../../../../../public/user.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Notification from "./Notification";
import Actions from "./Actions";
import Link from "next/link";

interface Props {
  handleShowInfoBox: () => void;
  handleShowCommentBox: () => void;
  handleShowReportBox: () => void;
}
const Index = ({
  handleShowInfoBox,
  handleShowCommentBox,
  handleShowReportBox,
}: Props) => {
  return (
    <Grid container className="mt-3 flex justify-between">
      <Grid item xs={4} className="flex items-center justify-start">
        <Link href="/beta/channels/222">
          <Avatar alt="Sazzad Hossen" src={`${channelPhoto.src}`} />
        </Link>
        <Grid>
          <Link href="/beta/channels/222">
            <Typography className="pl-3 font-bold text-textLight dark:text-textDark">
              Explore <CheckCircleIcon className="text-sm" />
            </Typography>
          </Link>
          <Typography className="pl-3 text-sm opacity-[0.8] text-textLight dark:text-textDark">
            162K Members
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={8} item>
        <Actions
          handleShowCommentBox={handleShowCommentBox}
          handleShowReportBox={handleShowReportBox}
          handleShowInfoBox={handleShowInfoBox}
        />
      </Grid>
    </Grid>
  );
};

export default Index;
