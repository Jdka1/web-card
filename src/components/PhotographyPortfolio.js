import React, { useState, useEffect, useRef } from 'react';
import "./PhotographyPortfolio.css";
import Header from "./Header.js";
import Bio from "./Bio.js";

const photos = [
  { src: "4V7A5833-Enhanced-NR-Edit.jpg", caption: "Elemental, Lauterbrunnen", orientation: "landscape" },
  { src: "4V7A6203.jpg", caption: "Jewels, Moraine Lake, Banff National Park", orientation: "portrait" },
  { src: "4V7A5823-Edit-Edit.jpg", caption: "Atmospheric Chateau de Chillon, Montreux", orientation: "landscape" },
  { src: "4V7A6479-Edit.jpg", caption: "Mating season, ‘Ewa Forest Reserve", orientation: "landscape" },
  { src: "4V7A1319.jpg", caption: "Quiet Intruder Amongst the Pines, Denali National Park", orientation: "portrait" },
  { src: "4V7A2066.jpg", caption: "Lost in Thought, Chugach State Park", orientation: "landscape" },
  { src: "4V7A3686.jpg", caption: "Climate Crisis, Harding Icefield, Kenai Fjords National Park", orientation: "landscape" },
  { src: "4V7A3683.jpg", caption: "700 Miles, Harding Icefield, Kenai Fjords National Park", orientation: "landscape" },
  { src: "4V7A3643.jpg", caption: "Icewalk, Harding Icefield, Kenai Fjords National Park", orientation: "portrait" },
  // { src: "4V7A6236.jpg", caption: "\"Minn-waki\" Lake of the Spirits, Lake Minnewanka", orientation: "landscape" },
  { src: "4V7A0138-Edit.jpg", caption: " \"Tisseyak\" Half Dome, Yosemite National Park", orientation: "landscape" },
  { src: "4V7A0770.jpg", caption: "Ode to Ansel Adams, Yosemite National Park", orientation: "landscape" },
  { src: "4V7A0096.jpg", caption: "Misty Bridalveil Fall, Yosemite National Park", orientation: "landscape" },
];

const FullscreenOverlay = ({ src, onClose }) => {
  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <img src={src} alt="Fullscreen view" />
    </div>
  );
};

const PhotoItem = ({ src, caption, orientation, onImageClick }) => {
  const imgRef = useRef(null);
  const captionRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const updateCaptionPosition = () => {
      if (imgRef.current && orientation === 'landscape' || orientation === 'portrait') {
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
  }, [orientation]);

  return (
    <div className={`photo-item ${orientation}`} onClick={() => onImageClick(`${process.env.PUBLIC_URL}/photography/${src}`)}>
      <img
        ref={imgRef}
        src={`${process.env.PUBLIC_URL}/photography/${src}`}
        alt={caption}
        className={orientation}
      />
      <p
        ref={captionRef}
        className={`photo-caption ${orientation}`}
        style={orientation === 'landscape' ? { top: `calc(50% + ${imgHeight / 2.1}px)` } : {}}
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
        <Header />
      </header>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <PhotoItem 
            key={index} 
            src={photo.src} 
            caption={photo.caption} 
            orientation={photo.orientation} 
            onImageClick={handleImageClick} 
          />
        ))}
      </div>
      <Bio/>
      {fullscreenSrc && <FullscreenOverlay src={fullscreenSrc} onClose={handleCloseFullscreen} />}
    </div>
  );
};

export default PhotoPortfolio;
