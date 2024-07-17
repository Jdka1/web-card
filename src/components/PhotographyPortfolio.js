import React, { useState, useEffect, useRef } from 'react';
import "./PhotographyPortfolio.css";

const photos = [
  { src: "4V7A0096.jpg", caption: "Sunset over the mountains" },
  { src: "4V7A0138-Edit.jpg", caption: "Eagle in flight" },
  { src: "4V7A0770.jpg", caption: "Serene lake view" },
  { src: "4V7A1319.jpg", caption: "Moose" },
  { src: "4V7A2066.jpg", caption: "Mountain peak" },
  { src: "4V7A3643.jpg", caption: "Wildlife in the wild" },
  { src: "4V7A3683.jpg", caption: "Calm river" },
  { src: "4V7A3686.jpg", caption: "Flowing waterfall" },
  { src: "4V7A5823-Edit-Edit.jpg", caption: "Starry night sky" },
  { src: "4V7A5833-Enhanced-NR-Edit.jpg", caption: "Golden sunrise" },
  { src: "4V7A6203.jpg", caption: "Majestic mountains" },
  { src: "4V7A6236.jpg", caption: "Peaceful meadow" },
  { src: "4V7A6479-Edit.jpg", caption: "Desert landscape" },
];

const FullscreenOverlay = ({ src, onClose }) => {
  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <img src={src} alt="Fullscreen view" />
    </div>
  );
};

const PhotoItem = ({ src, caption, onImageClick }) => {
  const imgRef = useRef(null);
  const captionRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const updateCaptionPosition = () => {
      if (imgRef.current && imgRef.current.classList.contains('landscape')) {
        setImgHeight(imgRef.current.clientHeight);
      }
    };

    if (imgRef.current.complete) {
      updateCaptionPosition();
    } else {
      imgRef.current.onload = updateCaptionPosition;
    }

    window.addEventListener('resize', updateCaptionPosition);

    return () => {
      window.removeEventListener('resize', updateCaptionPosition);
    };
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    const caption = captionRef.current;

    if (img) {
      if (img.naturalWidth > img.naturalHeight) {
        img.classList.add('landscape');
        caption.classList.add('landscape');
      } else {
        img.classList.add('portrait');
        caption.classList.add('portrait');
      }
    }
  }, []);

  return (
    <div className="photo-item" onClick={() => onImageClick(`${process.env.PUBLIC_URL}/photography/${src}`)}>
      <img
        ref={imgRef}
        src={`${process.env.PUBLIC_URL}/photography/${src}`}
        alt={caption}
      />
      <p
        ref={captionRef}
        className="photo-caption"
        style={imgRef.current && imgRef.current.classList.contains('landscape') ? { top: `calc(50% + ${imgHeight / 2.1}px)` } : {}}
      >
        {caption}
      </p>
    </div>
  );
};

const PhotoPortfolio = () => {
  const [fullscreenSrc, setFullscreenSrc] = useState(null);

  const handleImageClick = (src) => {
    setFullscreenSrc(src);
  };

  const handleCloseFullscreen = () => {
    setFullscreenSrc(null);
  };

  useEffect(() => {
    document.title = "Gallery Room";
  }, []);

  return (
    <div className="photo-gallery">
      <header className="gallery-header">
        <h1>Landscape and Wildlife Gallery</h1>
        <h3>Aryan Mehra</h3>
      </header>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <PhotoItem key={index} src={photo.src} caption={photo.caption} onImageClick={handleImageClick} />
        ))}
      </div>
      {fullscreenSrc && <FullscreenOverlay src={fullscreenSrc} onClose={handleCloseFullscreen} />}
    </div>
  );
};

export default PhotoPortfolio;
