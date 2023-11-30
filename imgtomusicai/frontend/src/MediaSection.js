import React from 'react';
import './MediaSection.css'; // Make sure to create this CSS file

const MediaSection = ({ imageUrl, videoUrl }) => {
  return (
    <div className="media-section">
      <div className="media-image-container">
        <img src={imageUrl} alt="Descriptive Alt Text" className="media-image" />
      </div>
      <div className="media-video-container">
        <video className="media-video" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MediaSection;
