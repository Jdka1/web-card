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
            <img src={`${process.env.PUBLIC_URL}/header_image_print.png`} alt="Header" />
          </div>
        </header>

        <br></br>
        
        <main className="projects">


          <Project
            title="AI & ML"
            description={<p>Coding since <a href="https://scratch.mit.edu/users/staryan/" target="_blank">6 years old.</a> Building AI since <a href="https://replit.com/@amehra_5535/Hangman-Bot#main.cpp" target="_blank">11 years old.</a>
            <br></br><br></br>
            Diving deep into CV (computer vision) and NLP (natural language processing) the past 3 years.
            <br></br><br></br>
            The pace of advancement in deep learning technology excites me greatly, and I am glad to be a part of its open-source advancements for the democratization of AI. All of my research and projects are publicly available on my <a href="https://github.com/Jdka1" target="_blank">GitHub</a> with recreation, install, and application guides.

            </p>}
            image="roboticarm.gif"
            orientation="portrait"
          ></Project>

          <Project
            title="Practicum"
            description={"lorem ipsum"}
            image="lidar.gif"
            orientation="landscape"
          ></Project>

          <Project
            title="Photography"
            description={"lorem ipsum"}
            image="holdingcamera.JPG"
            orientation="portrait"
          ></Project>

          <Project
            title="Finance"
            description={"lorem ipsum"}
            image="financeportfolio.png"
            orientation="portrait"
          ></Project>


          <Project
            title="日本語 (Japanese)"
            description={<p>Immersing myself in Japanese language and culture since 2018. Participated in an exchange and host program in 2023—traveled to Osaka, Kyoto, and Hiroshima where I made lifelong friends. <br></br><br></br> Developed a <a href="https://github.com/Jdka1/Kanji-Recognition" target="_blank">CNN based OCR (optical character recognition) model</a> to identify Kanji characters in a research project. <br></br><br></br> Currently practicing Japanese for conversational and fluency and literacy, working on translations and essays, and planning to return to Japan soon.</p>}
            image="dap.gif"
            orientation="portrait"
          ></Project>

          <Project
            title="Piano"
            description={"lorem ipsum"}
            image="piano.gif"
            orientation="portrait"
          ></Project>
        </main>

      </div>
    </div>
  );
}

export default App;
