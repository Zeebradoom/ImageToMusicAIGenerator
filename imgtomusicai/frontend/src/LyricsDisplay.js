import React from 'react';
import './LyricsDisplay.css'; // Make sure to create this CSS file

const LyricsDisplay = ({ imageUrl, lyrics }) => {
  return (
    <div className="lyrics-container">
      <div className="image-container-upload">
        <img src={imageUrl} alt="Uploaded content" className="uploaded-image" />
      </div>
      <textarea 
        className="lyrics-display" 
        value={lyrics} 
        readOnly 
      />
    </div>
  );
};

export default LyricsDisplay;
