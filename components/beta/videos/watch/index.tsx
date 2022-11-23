import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";

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
  const videoContainer = useRef<any>();
  const volumeSlider = useRef<any>();
  const video = useRef<any>();
  const [totalTime, setTotalTime] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [playbackSpeed, setPlaybackSpeed] = useState<string>('1')
  const togglePlay = () => {
    video.current.paused ? video.current.play() : video.current.pause();
  };
  const removePlayIcon = () => {
    videoContainer.current.classList.remove("paused");
  };
  const addPlayIcon = () => {
    videoContainer.current.classList.add("paused");
  };

  const toggleFullScreenMode = () => {
    if (document.fullscreenElement == null) {
      videoContainer.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const toggleMiniPlayerMode = () => {
    if (videoContainer.current.classList.contains("mini-player")) {
      document.exitPictureInPicture();
    } else {
      video.current.requestPictureInPicture();
    }
  };


  const toggleMute = () => {
    video.current.muted = !video.current.muted;
  };
  const handleVolumeInput = (e: React.ChangeEvent<HTMLInputElement>)=> {
    video.current.volume = e.target.value
    // video.current.muted = e.target.value === 0
  }
  const handleVolume = () => {
    volumeSlider.current.value = video.current.volume;

    let volumeLevel;
    if (video.current.muted || video.current.volume === 0) {
      volumeSlider.current.value = 0;
      volumeLevel = "muted";
    } else if (video.current.volume >= 0.5) {
      volumeLevel = "high";
    } else {
      volumeLevel = "low";
    }

    videoContainer.current.dataset.volumeLevel = volumeLevel;
  };

   const handleTotalTime = ()=> {
      let duration = formatDuration(video.current.duration)
       setTotalTime(duration)
   }

   const handleCurrentTime = ()=> {
      let time = formatDuration(video.current.currentTime)
      setCurrentTime(time)
   }
   const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  })

  function formatDuration(time:any) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600)
    if (hours === 0) {
      return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    } else {
      return `${hours}:${leadingZeroFormatter.format(
        minutes
      )}:${leadingZeroFormatter.format(seconds)}`
    }
  }

  const changePlaybackSpeed = ()=> {
    let newPlaybackRate = video.current.playbackRate + 0.25
    if (newPlaybackRate > 2) newPlaybackRate = 0.25
    video.current.playbackRate = newPlaybackRate
    setPlaybackSpeed(newPlaybackRate);
  }
  // useEffect(() => {
  //   const fullScreenHandler = () => {
  //     videoContainer.current.classList.toggle(
  //       "full-screen",
  //       document.fullscreenElement
  //     );
  //   };

  //   document.addEventListener("fullscreenchange", fullScreenHandler);
  //   video.current.addEventListener(
  //     "enterpictureinpicture",
  //     miniPlayerEnterHandler
  //   );
  //   video.current.addEventListener(
  //     "leavepictureinpicture",
  //     miniPlayerLeaveHandler
  //   );

  //   // clean up
  //   return () => {
  //     document.removeEventListener("fullscreenchange", fullScreenHandler);
  //     video.current.removeEventListener(
  //       "enterpictureinpicture",
  //       miniPlayerEnterHandler
  //     );
  //     video.current.removeEventListener(
  //       "leavepictureinpicture",
  //       miniPlayerLeaveHandler
  //     );
  //   };
  // }, []);

  return (
    <div
      ref={videoContainer}
      className="video-container paused"
      data-volume-level="high"
    >
      <img className="thumbnail-img" />
      <div className="video-controls-container">
        <div className="timeline-container">
          <div className="timeline">
            <img className="preview-img" />
            <div className="thumb-indicator"></div>
          </div>
        </div>
        <div className="controls">
          <button onClick={togglePlay} className="play-pause-btn">
            <svg className="play-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
            </svg>
            <svg className="pause-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
            </svg>
          </button>
          <div className="volume-container">
            <button onClick={toggleMute} className="mute-btn">
              <svg className="volume-high-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
                />
              </svg>
              <svg className="volume-low-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
                />
              </svg>
              <svg className="volume-muted-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
                />
              </svg>
            </button>
            <input
              onInput={handleVolumeInput}
              ref={volumeSlider}
              className="volume-slider"
              type="range"
              min="0"
              max="1"
              step="any"
              // value="1"
            />
          </div>
          <div className="duration-container">
            <div className="current-time"> {currentTime} </div>/
            <div className="total-time"> {totalTime} </div>
          </div>
          {/* <button className="captions-btn">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z"
              />
            </svg>
          </button> */}
          <button onClick={changePlaybackSpeed} className="speed-btn wide-btn"> {playbackSpeed}x </button>
          <button onClick={toggleMiniPlayerMode} className="mini-player-btn">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"
              />
            </svg>
          </button>
          <button onClick={() => toggleTheater()} className="theater-btn">
            <svg className="tall" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"
              />
            </svg>
            <svg className="wide" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
              />
            </svg>
          </button>
          <button onClick={toggleFullScreenMode} className="full-screen-btn">
            <svg className="open" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
              />
            </svg>
            <svg className="close" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <video
        onLoadedData={handleTotalTime}
        onTimeUpdate={handleCurrentTime}
        onVolumeChange={handleVolume}
        onClick={togglePlay}
        onPlay={removePlayIcon}
        onPause={addPlayIcon}
        ref={video}
        src={
          "https://res.cloudinary.com/sazzadhossen/video/upload/v1669121335/test2_jjw78a.mp4"
        }
      >
        <track kind="captions" src="assets/subtitles.vtt" />
      </video>
    </div>
  );
};
