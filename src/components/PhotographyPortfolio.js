import React, { useState, useEffect } from "react";
import "./PhotographyPortfolio.css";

const photos = [
  { src: "4V7A0096.jpg", caption: "Sunset over the mountains" },
  { src: "4V7A0138-Edit.jpg", caption: "Eagle in flight" },
  { src: "4V7A0770.jpg", caption: "Serene lake view" },
  { src: "4V7A1319.jpg", caption: "Forest pathway" },
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

const PhotoPortfolio = () => {
  const [noTransition, setNoTransition] = useState(false);

  useEffect(() => {
    document.title = "Gallery Room";
  }, []);

  return (
    <div className="photo-gallery">
      <header className="gallery-header">
        <h1>Landscape and Wildlife Gallery</h1>
        <h3>Aryan Mehra</h3>
        <p></p>
      </header>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-item" key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/photography/${photo.src}`}
              alt={`Photo ${index + 1}`}
            />
            <p className="photo-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoPortfolio;
