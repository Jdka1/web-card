import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Once the user starts scrolling, hide the scroll indicator
      setShowScrollIndicator(false);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`scroll-indicator ${showScrollIndicator ? 'show' : ''}`}>
      <div className="scroll-arrow" onClick={scrollToTop}>
        Scroll through my life
        <span className="arrow"></span>
      </div>
    </div>
  );
};

export default ScrollIndicator;
