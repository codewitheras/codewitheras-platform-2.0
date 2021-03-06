import { useState, useEffect } from "react";

const useVideoPlayer = videoElement => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const [isControlsHidden, setIsControlsHidden] = useState(false);

  // Toggle play & pause functionality
  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => {
        setIsControlsHidden(true);
      });
    } else {
      setIsPlaying(true);
      setIsControlsHidden(false);
    }
  };

  useEffect(() => {
    isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [isPlaying, videoElement]);

  // Update video time
  const handleVideoTimeUpdate = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setProgress(progress);

    if (progress === videoElement.current.duration) {
      setProgress(0);
    }
  };

  // Handle video progress
  const handleVideoProgress = e => {
    const manualChange = Number(e.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;

    setProgress(manualChange);
  };

  // Video speed
  const handleVideoSpeed = e => {
    const speed = Number(e.target.value);
    videoElement.current.playbackRate = speed;

    setSpeed(speed);
  };

  // Toggle mute & unmute
  const toggleMute = () => setIsMuted(!isMuted);

  // Toggle Full Screen
  const toggleFullScreen = () =>
    videoElement.current && videoElement.current.requestFullscreen();

  // Video Duration
  // const videoDuration = () => (videoElement.current.currentTime / videoElement.current.duration) * 100;

  // Video Current Timestamp
  // const currentTimeStamp = () => videoElement.current.duration * 100;

  useEffect(() => {
    isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [isMuted, videoElement]);

  return {
    isPlaying,
    isMuted,
    progress,
    speed,
    toggleMute,
    togglePlayPause,
    handleVideoTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleFullScreen,
    isControlsHidden,
  };
};

export default useVideoPlayer;
