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
        <ScrollIndicator />

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
        </div>

        <div className="me">
          <img src={`${process.env.PUBLIC_URL}/header_image_print.jpg`} alt="Header" />
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
          The pace of advancement in deep learning technology excites me greatly, and I am very glad to be a part of its open-source advancements for the democratization of AI. All of my research and projects are publicly available on my <a href="https://github.com/Jdka1" target="_blank">GitHub</a> with recreation, install, and application guides.

          </p>}
          image="roboticarm.gif"
          orientation="portrait"
        ></Project>

        <Project
          title="Practicum"
          description={"Recently, I received a piece of advice that I've taken to heart: \"Work for your heros.\" I am an entrepreneurial person and have been itching to get into the startup space forever, even more so because I live in the Bay Area. I always wanted to jump straight in and be founder but I realized that this would be an improbable path to success. No matter how many articles I had read or people I had talked to, I had no idea how to actually build a startup. I probably knew how to handle less than 10% of the tasks that would come up, and within the 10% I did know I would likely do 0% of those properly on the first try. The only way to efficiently solve these problems is to have direct experience dealing with them beforehand. This is why serial entrepreneurs such as Elon Musk, Steve Jobs, and Mark Zuckerberg—who get exponentially more successful with each company—exist.\n\n This year, I found a ML home security startup in San Francisco and I've managed to push my way into an ML engineering role. In this experience, I've been able to learn a profuse amount of skills and practices much more efficiently than I would have if I was on my own, and by surrounding myself with people who are where I want to be in 5 years I significantly grown my network and worldview and have been pushed to exceed and learn.\n\nI highly value real world experience as a core facet of my learning, and I am very grateful to have this exciting work experience. I am also planning to branch out and start my own venture in the near future."}
          image="lidar.gif"
          orientation="landscape"
        ></Project>

        <Project
          title="日本語 (Japanese)"
          description={<p>Immersing myself in Japanese language and culture since 2018. Participated in an exchange and host program in 2023—traveled to Osaka, Kyoto, and Hiroshima where I made lifelong friends. <br></br><br></br> Developed a <a href="https://github.com/Jdka1/Kanji-Recognition" target="_blank">CNN based OCR (optical character recognition) model</a> to identify Kanji characters in a research project. <br></br><br></br> Currently practicing Japanese for conversational and fluency and literacy, working on <a href="https://docs.google.com/document/d/1Or-LR5FuShHkpLk3xenBmfHvi2g_QY8uS49a74R2Dhc/preview" target="_blank">translations</a> and <a href="https://drive.google.com/file/d/1KcFXxN0al1vz-BiIN9fTVLcIatVbKGjo/view?usp=sharing" target="_blank">other various projects</a>, and planning to return to Japan soon.</p>}
          image="dap.gif"
          orientation="portrait"
        ></Project>

        <Project
          title="Photography"
          description={<p>Expressing the world as a Landscape, Wildlife, and more recently, Cityscape photographer.
          <br></br>
          <br></br>
          I have embarked on many natural expeditions with friends and family including multiple to Yosemite, Banff, and Alaska, my personal favorite.
          <br></br>
          <br></br>
          In 9th grade, I created a video to teach <a href="https://www.youtube.com/watch?v=_EGjFYGZgb8" target="_blank">The 15 Rules of Photography, and Why You Should Break/Use Them.</a>
          </p>}
          image="holdingcamera.JPG"
          orientation="portrait"
        ></Project>

        <Project
          title="Finance"
          description={<p>
              I started learning about finance 2 years prior and have had a vested interest in it since. 

              <br></br>
              <br></br>

              In my current financial ecosystem I use Fidelity as my main brokerage and pseudo bank account and Charles Schwab for derivatives, I use Venmo and Cashapp for interpersonal transactions, and Phantom as my cryptocurrency and NFT wallet (planning to transition to Coinbase). 
 

              <br></br>
              <br></br>

              Similarly to my stance on AI, I strongly believe in democratized access to finance education. Thus, at The Nueva School I co-founded a finance club to teach high schoolers at all experience levels financial management through hands-on learning. 

          </p>}
          image="financeportfolio.png"
          orientation="portrait"
        ></Project>



        <Project
          title="Piano"
          description={<p>Started (was forced) to learn piano starting in 2011 and stopped playing after a few years.
            <br></br>
            <br></br>
            In the summer of 2023 I picked up the instrument again, initially as a form of leisure to relax, and started relearning the basics. Since then, it has found a very important place in my life.
            <br></br>
            <br></br>
            Most of my joints are hypermobile (which you can probably tell from <a href="https://www.youtube.com/shorts/JBtvQVUFSKY" target="_blank">this video of me playing La Campanella</a>), meaning they extend past the point they are supposed to. This has caused my significant difficulties with injuries, especially in the hands and fingers, when playing sports or even just doing daily tasks. I saw many medical professionals but was unfortunately not able to fix this issue, and after a long time I decided to just deal with it.
            <br></br>
            <br></br>
            From when I restarted playing piano, my fingers have gotten much stronger as it has acted as a form of physical therapy for me, and I haven't had a single joint injury in the past year. This, and my pure enjoyment of playing the piano freely, is what makes me sure I'll stick with it this time.</p>}
          image="piano.gif"
          orientation="portrait"
        ></Project>
      </main>

    </div>
  );
}

export default App;
