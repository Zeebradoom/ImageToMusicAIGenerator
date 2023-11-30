// GalleryItem.js
import React from 'react';
import './GalleryItem.css'; // Make sure to create this CSS file

const GalleryItem = ({ imageUrl, title, username }) => {
  return (
    <div className="gallery-item">
      {/* <img src={imageUrl} alt={title} className="gallery-image" />
      <div className="gallery-item-info">
        <h5 className="gallery-item-title">{title}</h5>
        <p className="gallery-item-username">@{username}</p>
      </div> */}
      <div className="gallery-item-username">@{username}</div>
      <img src={imageUrl} alt={`Content by @${username}`} className="gallery-image" />
    </div>
  );
};

export default GalleryItem;