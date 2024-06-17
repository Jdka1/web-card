import React from 'react';
import './App.css';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Aryan Mehra</h1>
        <p>Future-minded dreamer, present engager.</p>
        <div className="social-icons">
          <a href="https://github.com/Jdka1" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/github_logo.png`} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/16mmphotos/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/instagram_logo.png`} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/aryan-mehra/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/linkedin_logo.png`} alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@arymehr" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/youtube_logo.png`} alt="YouTube" />
          </a>
          <ScrollIndicator />
        </div>
        <div className="me">
          <img src={`${process.env.PUBLIC_URL}/header_image.png`} alt="Header" />
        </div>
      </header>

      <br></br>

      <main className="projects">
        <div className="project">
          <img src={`${process.env.PUBLIC_URL}/roboticarm.gif`} alt="Robot Arm" />
          <div className="text-panel">
            <h2>Project Title</h2>
            <p>Description of the project goes here...</p>
          </div>
        </div>
        {/* Add more projects as needed */}

      </main>
    </div>
  );
}

export default App;
