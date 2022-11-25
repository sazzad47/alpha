import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Paper
} from "@mui/material";
import screenful from "screenfull";
import ReactPlayer from "react-player";
import CloseIcon from '@mui/icons-material/Close';
import Controls from "./Controls";
import { ClickAwayListener } from "@mui/base";

let count = 0;

const format = (seconds: number) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};



interface Props {
  toggleTheater: () => void;
}
const Index = ({ toggleTheater }: Props) => {
  return (
    <Grid container className="flex flex-col">
      <VideoPlayer toggleTheater={toggleTheater} />
      <Grid className="mt-5">
        <Typography className="pl-0 text-xl font-medium text-textLight dark:text-textDark">
          Who created this beautiful world?
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Index;

const VideoPlayer = ({ toggleTheater }: Props) => {
  const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
  const [bookmarks, setBookmarks] = useState<
    { time: string; display: string; image: string }[]
  >([]);
  const [loop, setLoop] = useState<boolean>(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [state, setState] = useState({
    pip: false,
    playing: true,
    controls: false,
    light: false,

    muted: true,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    seeking: false,
  });

  const playerRef = useRef<any>();
  const playerContainerRef = useRef<any>();
  const controlsRef = useRef<any>();
  const canvasRef = useRef<any>();

  const {
    playing,
    controls,
    light,

    muted,
    playbackRate,
    pip,
    played,
    seeking,
    volume,
  } = state;

  

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
    if (playing === true) {
      controlsRef.current.style.visibility = "visible";
    }
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleProgress = (changeState: any) => {
    if (count > 3 && !openSettings) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility == "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = ( event: Event, newValue: number | number[]) => {
    // console.log({ newValue });
    let value = Number(newValue)
    setState({ ...state, played: value / 100 });
  };

  const handleSeekMouseDown = () => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (event: Event | React.SyntheticEvent<Element, Event>, newValue: number | number[]) => {
    let value = Number(newValue)
    setState({ ...state, seeking: false });
    // console.log(sliderRef.current.value)
    playerRef.current.seekTo(value / 100, "fraction");
  };

  const handleDuration = (duration: number) => {
    setState({ ...state, duration });
  };

  const handleVolumeSeekDown = (event: Event | React.SyntheticEvent<Element, Event>, newValue: number | number[]) => {
    let value = Number(newValue)
    setState({ ...state, seeking: false, volume: value / 100 });
  };
  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    // console.log(newValue);
    let value = Number(newValue)
    setState({
      ...state,
      volume: value / 100,
      muted: newValue === 0 ? true : false,
    });
  };

  const toggleFullScreen = () => {
    screenful.toggle(playerContainerRef.current);
  };

  const handleMouseMove = () => {
    console.log("mousemove");
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    if (!playing || openSettings) {

      controlsRef.current.style.visibility = "visible";
      count = 0;
    } else {
      controlsRef.current.style.visibility = "hidden";
    }
  };
 
  useEffect(()=> {
    if (playing === true) {
      controlsRef.current.style.visibility = "visible"
    }
   
  },[playing])

  const handleDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat == "normal" ? "remaining" : "normal"
    );
  };

  const handlePlaybackRate = (rate: number) => {
    setState({ ...state, playbackRate: rate });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const addBookmark = () => {
    const canvas = canvasRef.current;
    canvas.width = 160;
    canvas.height = 90;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      playerRef.current.getInternalPlayer(),
      0,
      0,
      canvas.width,
      canvas.height
    );
    const dataUri = canvas.toDataURL();
    canvas.width = 0;
    canvas.height = 0;
    const bookmarksCopy = [...bookmarks];
    bookmarksCopy.push({
      time: playerRef.current.getCurrentTime(),
      display: format(playerRef.current.getCurrentTime()),
      image: dataUri,
    });
    setBookmarks(bookmarksCopy);
  };
  const removeBookmark = (index: number)=> {
    setBookmarks(bookmarks => bookmarks.filter((_, i) => i !== index));
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  const elapsedTime =
    timeDisplayFormat == "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;

  const totalDuration = format(duration);
  console.log('loop', loop)
  const handleClickAway = () => {
    controlsRef.current.style.visibility = "hidden";
  };
  return (
   <ClickAwayListener onClickAway={handleClickAway}>
    <Grid>
    <Grid
      
      onMouseMove={handleMouseMove}
      onMouseLeave={hanldeMouseLeave}
      ref={playerContainerRef}
      className="w-full h-full relative"
    > 
     
      <ReactPlayer
        
        ref={playerRef}
        url="https://res.cloudinary.com/sazzadhossen/video/upload/v1669121335/test2_jjw78a.mp4"
        width="100%"
        height="100%"
        pip={pip}
        playing={playing}
        controls={false}
        light={light}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        onProgress={handleProgress}
        config={{
          file: {
            attributes: {
              crossorigin: "anonymous",
            },
          },
        }}
      />
      <Grid
        ref={controlsRef}
      >
        <Controls
          
          onSeek={handleSeekChange}
          onSeekMouseDown={handleSeekMouseDown}
          onSeekMouseUp={handleSeekMouseUp}
          onDuration={handleDuration}
          onRewind={handleRewind}
          onPlayPause={handlePlayPause}
          onFastForward={handleFastForward}
          playing={playing}
          played={played}
          elapsedTime={elapsedTime}
          totalDuration={totalDuration}
          onMute={hanldeMute}
          muted={muted}
          onVolumeChange={handleVolumeChange}
          onVolumeSeekDown={handleVolumeSeekDown}
          onChangeDispayFormat={handleDisplayFormat}
          playbackRate={playbackRate}
          onPlaybackRateChange={handlePlaybackRate}
          onToggleFullScreen={toggleFullScreen}
          volume={volume}
          onBookmark={addBookmark}
          loop={loop}
          setLoop={setLoop}
          setOpenSettings={setOpenSettings}
          openSettings={openSettings}
        />
      </Grid>
    </Grid>
    <Grid container style={{ marginTop: 20 }} spacing={3}>
          {bookmarks.map((bookmark, index) => (
            <Grid key={index} item>
              <Paper
                elevation={3}
                className="relative"
              > 
              <IconButton onClick={()=> removeBookmark(index)} className="focus:outline-none z-[10] text-white absolute w-[30px] h-[30px] top-0 right-0">
                <CloseIcon/>
              </IconButton>
                <img onClick={() => {
                  playerRef.current.seekTo(bookmark.time);
                  controlsRef.current.style.visibility = "visible";

                  setTimeout(() => {
                    controlsRef.current.style.visibility = "hidden";
                  }, 1000);
                }} className="cursor-pointer w-full" crossOrigin="anonymous" src={bookmark.image} />
                <Typography variant="body2" align="center">
                  bookmark at {bookmark.display}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <canvas className="hidden" ref={canvasRef} />
    </Grid>
        </ClickAwayListener>
  );
};
