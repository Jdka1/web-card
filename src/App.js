import React from 'react';
import './App.css';
import ScrollIndicator from './components/ScrollIndicator';
import Project from './components/Project';
import { useState, useEffect } from 'react';


function App() {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaQueryChange = (e) => setIsDarkMode(e.matches);
  
    mediaQueryList.addEventListener('change', handleMediaQueryChange);
  
    // Cleanup function to remove the listener on component unmount
    return () => mediaQueryList.removeEventListener('change', handleMediaQueryChange);
  }, []);


  return (
    <div className="App">
      <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>

        <header className="header">
          <h1>Aryan Mehra</h1>
          <p>Future-minded dreamer, present engager.</p>
          <ScrollIndicator />

          <div className="social-icons">
            <a href="https://github.com/Jdka1" target="_blank" rel="noopener noreferrer">
              {isDarkMode ? (
                <img src={`${process.env.PUBLIC_URL}/social_icons/github_logo_dark.png`} alt="GitHub (dark)" />
              ) : (
                <img src={`${process.env.PUBLIC_URL}/social_icons/github_logo.png`} alt="GitHub" />
              )}
            </a>
            <a href="https://www.instagram.com/16mmphotos/" target="_blank" rel="noopener noreferrer">
              {isDarkMode ? (
                <img src={`${process.env.PUBLIC_URL}/social_icons/instagram_logo_dark.png`} alt="Instagram (dark)" />
              ) : (
                <img src={`${process.env.PUBLIC_URL}/social_icons/instagram_logo.png`} alt="Instagram" />
              )}
            </a>
            <a href="https://www.linkedin.com/in/aryan-mehra/" target="_blank" rel="noopener noreferrer">
              {isDarkMode ? (
                <img src={`${process.env.PUBLIC_URL}/social_icons/linkedin_logo_dark.png`} alt="LinkedIn (dark)" />
              ) : (
                <img src={`${process.env.PUBLIC_URL}/social_icons/linkedin_logo.png`} alt="LinkedIn" />
              )}
            </a>
            <a href="https://www.youtube.com/@arymehr" target="_blank" rel="noopener noreferrer">
              {isDarkMode ? (
                <img src={`${process.env.PUBLIC_URL}/social_icons/youtube_logo_dark.png`} alt="YouTube (dark)" />
              ) : (
                <img src={`${process.env.PUBLIC_URL}/social_icons/youtube_logo.png`} alt="YouTube" />
              )}
            </a>
          </div>

          <div className="me">
            <img src={`${process.env.PUBLIC_URL}/header_image.png`} alt="Header" />
          </div>
        </header>

        <br></br>
        
        <main className="projects">

          <Project
            title="Practicum"
            description="lorem ipsum"
            image="lidar.gif"
            orientation="landscape"
          ></Project>

          <Project
            title="AI & ML"
            description="lorem ipsum"
            image="roboticarm.gif"
            orientation="portrait"
          ></Project>

          <Project
            title="Photography"
            description="lorem ipsum"
            image="holdingcamera.JPG"
            orientation="portrait"
          ></Project>

          <Project
            title="Finance"
            description="lorem ipsum"
            image="financeportfolio.png"
            orientation="portrait"
          ></Project>


          <Project
            title="Japanese"
            description="lorem ipsum"
            image="dap.gif"
            orientation="portrait"
          ></Project>

          <Project
            title="Piano"
            description="lorem ipsum"
            image="piano.gif"
            orientation="portrait"
          ></Project>
        </main>

      </div>
    </div>
  );
}

export default App;
