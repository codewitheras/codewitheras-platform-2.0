/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState } from "react";
import useVideoPlayer from "../../Hooks/useVideoPlayer";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ videoSrc, videoPosterImg }) => {
  const videoElement = useRef(null);
  const [isPlayButtonVisible, setIsPlayButtonVisible] = useState(false);

  const {
    isPlaying,
    // isMuted,
    progress,
    // speed,
    // toggleMute,
    togglePlayPause,
    handleVideoTimeUpdate,
    handleVideoProgress,
    toggleFullScreen,
    isControlsHidden,
    // handleVideoSpeed,
  } = useVideoPlayer(videoElement);
  return (
    <>
      <div className={styles.video__player}>
        <video
          src={videoSrc}
          poster={videoPosterImg}
          loading='lazy'
          ref={videoElement}
          onTimeUpdate={handleVideoTimeUpdate}
          onClick={togglePlayPause}></video>

        {/* Video Controls */}
        {/* <div className={styles.video__player_controls}>
          <button
            type='button'
            className={styles.play__pause_btn}
            onClick={togglePlayPause}>
            {!isPlaying ? "Play" : "Pause"}
          </button>
        </div> */}
        <div className={styles.video__progress}>
          {isControlsHidden && (
            <div className={`${isControlsHidden} ? ${styles.controls}`}>
              <button
                type='button'
                className={styles.play__pause_btn}
                onClick={togglePlayPause}>
                {!isPlaying ? "Play" : "Pause"}
              </button>
              <input
                type='range'
                name='video progress'
                id='video_progress'
                value={progress}
                min='0'
                max='100'
                onChange={e => handleVideoProgress(e)}
              />
              <button type='button' onClick={toggleFullScreen}>
                [fullscreen]
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
