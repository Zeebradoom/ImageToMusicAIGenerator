import React from 'react';
import GalleryItem from './GalleryItem';
import MusicPlayer from './MusicPlayer';

const Gallery = ({ items }) => {

    return (
      <div className="gallery-container">
        {items.map((item, index) => (
          <GalleryItem
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            username={item.username}
          />
        ))}
      </div>
    );
  };

// const Gallery = ({ galleryItems }) => {
//   return (
//     <div className="gallery">
//       {galleryItems.map((item, index) => (
//         <div key={index} className="gallery-item">
//           <img src={item.imageUrl} alt={`Gallery item ${index}`} />
//           <p>{item.lyrics}</p>
//           <MusicPlayer />
//         </div>
//       ))}
//     </div>
//   );
// };

export default Gallery;
