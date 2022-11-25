import React, { forwardRef, useRef, useState } from "react";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Popover,
} from "@mui/material";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import screenful from "screenfull";
import Image from "next/legacy/image";
import ReactPlayer from "react-player";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Settings from "./Settings";


const PrettoSlider = styled(Slider)({
  // color: '#52af77',
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
interface Props {
  onSeek: (event: Event, newValue: number | number[]) => void;
  onSeekMouseDown: () => void;
  onSeekMouseUp: (
    event: Event | React.SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => void;
  onDuration: (duration: number) => void;
  onRewind: () => void;
  onPlayPause: () => void;
  onFastForward: () => void;
  playing: boolean;
  played: number;
  elapsedTime: string;
  totalDuration: string;
  onMute: () => void;
  muted: boolean;
  onVolumeSeekDown: (
    event: Event | React.SyntheticEvent<Element, Event>,
    newValue: number | number[]
  ) => void;
  onChangeDispayFormat: () => void;
  playbackRate: number;
  onPlaybackRateChange: (rate: number) => void;
  onToggleFullScreen: () => void;
  volume: number;
  onVolumeChange: (event: Event, newValue: number | number[]) => void;
  onBookmark: () => void;
  loop: boolean;
  setLoop: Function;
  setOpenSettings: Function;
  openSettings: boolean;
}
const Controls = ({
  onSeek,
  onSeekMouseDown,
  onSeekMouseUp,
  onDuration,
  onRewind,
  onPlayPause,
  onFastForward,
  playing,
  played,
  elapsedTime,
  totalDuration,
  onMute,
  muted,
  onVolumeSeekDown,
  onChangeDispayFormat,
  playbackRate,
  onPlaybackRateChange,
  onToggleFullScreen,
  volume,
  onVolumeChange,
  onBookmark,
  loop,
  setLoop,
  openSettings,
  setOpenSettings
}: Props) => {

  function ValueLabelComponent(props: SliderValueLabelProps) {
    const { children } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={elapsedTime}>
        {children}
      </Tooltip>
    );
  }
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

 

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid className="absolute z-[1] bg-[rgba(0,0,0,0.8)] top-0 left-0 right-0 bottom-0 flex flex-col justify-between">
      <Grid container className=" p-2 flex justify-between">
        <Typography className="pl-0 text-white">Video Title</Typography>
        <Button
          onClick={onBookmark}
          variant="contained"
          color="primary"
          startIcon={<BookmarkIcon />}
        >
          Bookmark
        </Button>
      </Grid>
      <Grid container className="flex items-center justify-center">
        <IconButton
          onClick={onRewind}
          className="focus:outline-none text-[#777] scale-[0.9] text-[50px] hover:text-[#fff] hover:scale-[1]"
          aria-label="rewind"
        >
          <FastRewindIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          onClick={onPlayPause}
          className="focus:outline-none text-[#777] scale-[0.9] text-[50px] hover:text-[#fff] hover:scale-[1]"
          aria-label="play"
        >
          {playing ? (
            <PauseIcon fontSize="inherit" />
          ) : (
            <PlayArrowIcon fontSize="inherit" />
          )}
        </IconButton>
        <IconButton
          onClick={onFastForward}
          className="focus:outline-none text-[#777] scale-[0.9] text-[50px] hover:text-[#fff] hover:scale-[1]"
          aria-label="forward"
        >
          <FastForwardIcon fontSize="inherit" />
        </IconButton>
      </Grid>
      <Grid container className="flex items-center justify-between p-[16px]">
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            slots={{
              valueLabel: ValueLabelComponent,
            }}
            // ValueLabelComponent={(props) => (
            //   <ValueLabelComponent {...props} value={elapsedTime} />
            // )}
            aria-label="custom thumb label"
            value={played * 100}
            onChange={onSeek}
            onMouseDown={onSeekMouseDown}
            onChangeCommitted={onSeekMouseUp}
            valueLabelDisplay="auto"
            // onDuration={onDuration}
          />
        </Grid>
        <Grid item>
          <Grid className="flex items-center">
            <IconButton
              onClick={onPlayPause}
              className="focus:outline-none text-[#999] hover:text-[#fff]"
              aria-label="play-button"
            >
              {playing ? (
                <PauseIcon fontSize="large" />
              ) : (
                <PlayArrowIcon fontSize="large" />
              )}
            </IconButton>
            <IconButton
              onClick={onMute}
              className="focus:outline-none text-[#999] hover:text-[#fff]"
              aria-label="volume-button"
            >
              {muted ? (
                <VolumeOffIcon fontSize="large" />
              ) : volume > 0.5 ? (
                <VolumeUpIcon fontSize="large" />
              ) : (
                <VolumeDownIcon fontSize="large" />
              )}
            </IconButton>
            <Slider
              min={0}
              max={100}
              value={muted ? 0 : volume * 100}
              onChange={onVolumeChange}
              aria-labelledby="input-slider"
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onVolumeSeekDown}
              defaultValue={100}
              className="w-[100px]"
            />
            <Button
              onClick={onChangeDispayFormat}
              variant="text"
              className="text-white ml-[16px]"
            >
              <Typography className="pl-0">
                {elapsedTime}/{totalDuration}
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Settings openSettings={openSettings} setOpenSettings={setOpenSettings} loop={loop} setLoop={setLoop} playbackRate={playbackRate} onPlaybackRateChange={onPlaybackRateChange}  />
          <IconButton onClick={onToggleFullScreen} className="focus:outline-none text-[#999] hover:text-[#fff]">
            <FullscreenIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Controls;
