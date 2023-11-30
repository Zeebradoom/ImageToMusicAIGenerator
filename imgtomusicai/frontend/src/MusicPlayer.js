import React from 'react';

const MusicPlayer = ({ audioSrc }) => {
  return (
    <audio controls src={audioSrc}>
      Your browser does not support the audio element.
    </audio>
  );
};

export default MusicPlayer;
