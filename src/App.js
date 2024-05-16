import './App.css';
import ScrollIndicator from './components/ScrollIndicator';


function App() {
  return (
    <div className="App">
      <div className="header">
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
        </div>
        <div className="me">
          <img src={`${process.env.PUBLIC_URL}/header_image.png`} alt="Header" />
        </div>
      </div>

      <div className="projects">
        <div className="robotics panel">
          <h2>Robotics</h2>
          <img src={`${process.env.PUBLIC_URL}/roboticarm.gif`} alt="Robot Arm" />
        </div>

        <div className="machinelearning panel">
          <h2>Machine Learning</h2>
          <img src={`${process.env.PUBLIC_URL}/roboticarm.gif`} alt="Robot Arm" />
        </div>


        <ScrollIndicator />
      </div>
    </div>
  );
}

export default App;
