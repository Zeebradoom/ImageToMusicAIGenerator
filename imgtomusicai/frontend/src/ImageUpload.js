import React, { useState } from 'react';
import axios from 'axios';
import LyricsDisplay from './LyricsDisplay'; // Make sure to create this component
import Gallery from './Gallery'; // Make sure to create this component


const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [lyrics, setLyrics] = useState('');
  const [galleryItems, setGalleryItems] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setLyrics(response.data.lyrics);

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <button type="submit">Generate Lyrics</button>
      </form>
      {/* {lyrics && <div><h3>Generated Lyrics:</h3><p>{lyrics}</p></div>} */}
      <LyricsDisplay imageUrl={image && URL.createObjectURL(image)} lyrics={lyrics} />
      {/* <Gallery items={galleryItems} /> */}
    </div>
  );
};

export default ImageUpload;