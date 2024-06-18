import React from 'react';
import './App.css';
import ScrollIndicator from './components/ScrollIndicator';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Aryan Mehra</h1>
        <p>Future-minded dreamer, present engager.</p>
        <div className="social-icons">
          <a href="https://github.com/Jdka1" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/social_icons/github_logo.png`} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/16mmphotos/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/social_icons/instagram_logo.png`} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/aryan-mehra/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/social_icons/linkedin_logo.png`} alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@arymehr" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/social_icons/youtube_logo.png`} alt="YouTube" />
          </a>
          <ScrollIndicator />
        </div>
        <div className="me">
          <img src={`${process.env.PUBLIC_URL}/header_image.png`} alt="Header" />
        </div>
      </header>

      <br></br>
      
      <main className="projects">

        <Project
          title="Venture"
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
          title="Finance"
          description="lorem ipsum"
          image="financeportfolio.png"
          orientation="portrait"
        ></Project>

        <Project
          title="Photography"
          description="lorem ipsum"
          image="holdingcamera.JPG"
          orientation="portrait"
        ></Project>

        <Project
          title="Japanese"
          description="lorem ipsum"
          image="dap_long.gif"
          orientation="portrait"
        ></Project>

        <Project
          title="Piano"
          description="lorem ipsum"
          image="lidar.gif"
          orientation="landscape"
        ></Project>


      </main>
    </div>
  );
}

export default App;
