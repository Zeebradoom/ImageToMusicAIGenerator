import React from 'react';
import './LyricsDisplay.css'; // Make sure to create this CSS file

const LyricsDisplay = ({ imageUrl, lyrics }) => {
    if (imageUrl === null) {
        return (
            <div className="lyrics-container">
                <textarea 
                    className="lyrics-display" 
                    value={"Instructions:\n\n1. Upload an arbitrary image (GIFs are also supported!).\n\n2. Click the \"Generate Lyrics\" button.\n\n3. Wait for the lyrics & chords to be generated(around 3-5s).\n\n4. Enjoy the lyrics & chords!"}
                    readOnly 
                />
            </div>
        );
    }
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
