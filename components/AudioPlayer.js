import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setAudioUrl(url);
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    return () => {
      audioUrl && URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  return (
    <div className="audio-player">
      <input type="file" onChange={handleFileChange} accept="audio/mp3" />
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} controls />
      )}
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;