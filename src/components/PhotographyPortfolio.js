// src/PhotoPortfolio.js
import React from 'react';
import './PhotographyPortfolio.css';

const photos = [
    '4V7A0096.jpg',
    '4V7A0138-Edit.jpg',
    '4V7A0770.jpg',
    '4V7A1319.jpg',
    '4V7A2066.jpg',
    '4V7A3643.jpg',
    '4V7A3683.jpg',
    '4V7A3686.jpg',
    '4V7A5823-Edit-Edit.jpg',
    '4V7A5833-Enhanced-NR-Edit.jpg',
    '4V7A6203.jpg',
    '4V7A6236.jpg',
    '4V7A6479-Edit.jpg',
  ];
  

const PhotoPortfolio = () => {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div className="photo-item" key={index}>
        <img src={`${process.env.PUBLIC_URL}/photography/${photo}`} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PhotoPortfolio;
