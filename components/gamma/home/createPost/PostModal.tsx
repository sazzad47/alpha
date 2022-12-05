import React, { useState } from "react";
import { Button } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import Dialog from "@mui/material/Dialog";
import PublicIcon from "@mui/icons-material/Public";
import { useTheme } from "next-themes";
import Audience from "./Audience";
import ModalBody from "./ModalBody";
import Feelings, { EmojiProps } from "./Feelings";
import { ActionProps } from ".";

export interface AudienceProps {
  audience: string;
  icon: JSX.Element;
}
interface Props {
  actions: ActionProps;
  setActions: Function;
  open: boolean;
  setOpen: Function;
}
export default function PostModal({
  actions,
  setActions,
  open,
  setOpen,
}: Props) {
  const { showFeelingsModal, showBody } = actions;
  const [postAudience, setPostAudience] = useState<AudienceProps>({
    audience: "Public",
    icon: <PublicIcon className="text-sm" />,
  });
  const [showAudience, setShowAudience] = useState<boolean>(false);
  const [feeling, setFeeling] = useState<EmojiProps>({});
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

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
          onEnter={() =>
            setActions((prevState: ActionProps) => ({
              ...prevState,
              showBody: false,
            }))
          }
          unmountOnExit
        >
          <Audience
            setActions={setActions}
            postAudience={postAudience}
            setPostAudience={setPostAudience}
          />
        </CSSTransition>
        <CSSTransition
          in={showFeelingsModal}
          timeout={500}
          classNames="post_feelings_modal"
          onEnter={() =>
            setActions((prevState: ActionProps) => ({
              ...prevState,
              showBody: false,
            }))
          }
          unmountOnExit
        >
          <Feelings setActions={setActions} setFeeling={setFeeling} />
        </CSSTransition>
        <CSSTransition
          in={showBody}
          timeout={500}
          classNames="post_main_modal"
          onEnter={() => {
            setShowAudience(false);
            setActions((prevState: ActionProps) => ({
              ...prevState,
              showFeelingsModal: false,
            }));
          }}
          unmountOnExit
        >
          <ModalBody
            postAudience={postAudience}
            setShowAudience={setShowAudience}
            actions={actions}
            setActions={setActions}
            feeling={feeling}
            handleClose={handleClose}
          />
        </CSSTransition>
      </Dialog>
    </div>
  );
}
