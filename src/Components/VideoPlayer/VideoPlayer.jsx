import React from "react";
import { useRef } from "react";
import useVideoPlayer from "../../Hooks/useVideoPlayer";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ videoSrc, videoPosterImg }) => {
  const videoElement = useRef(null);

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
          onTimeUpdate={handleVideoTimeUpdate}></video>

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
          <div className={styles.controls}>
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
            {/* <button
            type='button'
            className={styles.play__mute}
            onClick={toggleMute}>
            {!isMuted ? "Play" : "Pause"}
          </button> */}
            <button type='button' onClick={toggleFullScreen}>
              []
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
