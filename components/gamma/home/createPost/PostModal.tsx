import React, { useState } from "react";
import { Button } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import Dialog from "@mui/material/Dialog";
import PublicIcon from "@mui/icons-material/Public";
import { useTheme } from "next-themes";
import Audience from "./Audience";
import ModalBody from "./ModalBody";
import Feelings from "./Feelings";

export default function PostModal() {
  const [postAudience, setPostAudience] = useState<{
    audience: string;
    icon: JSX.Element;
  }>({
    audience: "Public",
    icon: <PublicIcon className="text-sm" />,
  });
  const [showAudience, setShowAudience] = useState<boolean>(false);
  const [showFeelingsModal, setShowFeelingsModal] = useState<boolean>(false);
  const [showBody, setShowBody] = useState<boolean>(true);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full">
      <Button
        onClick={handleClickOpen}
        className="focus:outline-none ml-3 flex justify-start w-[calc(100%-0.75rem)] normal-case bg-bgButton dark:bg-[#707075] hover:bg-bgButtonHover dark:hover:bg-bgButtonDarkHover rounded-[20px] text-textLight dark:text-textDark"
      >
        What are you thinking?
      </Button>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: currentTheme === "dark" ? "#474849" : "#fff",
            width: "30rem",
            height: "27rem",
            maxHeight: "30rem",
            overflow: "hidden",
            transition: "height width var(--speed) ease",
          },
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CSSTransition
          in={showAudience}
          timeout={500}
          classNames="post_audience_modal"
          onEnter={() => setShowBody(false)}
          unmountOnExit
        >
          <Audience
            setShowBody={setShowBody}
            setPostAudience={setPostAudience}
          />
        </CSSTransition>
        <CSSTransition
          in={showFeelingsModal}
          timeout={500}
          classNames="post_feelings_modal"
          onEnter={() => setShowBody(false)}
          unmountOnExit
        >
          <Feelings
            setShowBody={setShowBody}
          />
        </CSSTransition>
        <CSSTransition
          in={showBody}
          timeout={500}
          classNames="post_main_modal"
          onEnter={() => {
            setShowAudience(false);
            setShowFeelingsModal(false);
          }}
          unmountOnExit
        >
          <ModalBody
            postAudience={postAudience}
            setShowAudience={setShowAudience}
            setShowFeelingsModal={setShowFeelingsModal}
            handleClose={handleClose}
          />
        </CSSTransition>
      </Dialog>
    </div>
  );
}
