import React, { Suspense, lazy } from "react";
import "./Home.css";
import ScrollIndicator from "./ScrollIndicator";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Project = lazy(() => import("./Project"));

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Aryan Mehra</h1>
        <p>
          Doing and dreaming. <br></br>
          <br></br>
          <a href="mailto:staryan.mehra@gmail.com">staryan.mehra@gmail.com</a>
        </p>
        <ScrollIndicator />

        <div className="social-icons">
          <a
            href="https://github.com/Jdka1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/social_icons/github_logo.png`}
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.instagram.com/16mmphotos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/social_icons/instagram_logo.png`}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-mehra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/social_icons/linkedin_logo.png`}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.youtube.com/@arymehr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/social_icons/youtube_logo.png`}
              alt="YouTube"
            />
          </a>
        </div>

        <div className="me">
          <img
            src={`${process.env.PUBLIC_URL}/header_image_print.jpg`}
            alt="Header"
          />
        </div>
      </header>

      <br></br>

      <Suspense fallback={<div style={{ marginTop: '100vh' }}>Loading life...</div>}>
        <main className="projects">
          <Project
            title="AI & ML"
            description={
              <p>
                Coding since{" "}
                <a href="https://scratch.mit.edu/users/staryan/" target="_blank" rel="noreferrer" >
                  6 years old.
                </a>{" "}
                Building AI since{" "}
                <a
                  href="https://replit.com/@amehra_5535/Hangman-Bot#main.cpp"
                  target="_blank"
                  rel="noreferrer" 
                >
                  11 years old.
                </a>
                <br></br>
                <br></br>
                Diving deep into transformer CV (computer vision) and NLP (natural
                language processing) the past 3 years.
                <br></br>
                <br></br>
                The pace of advancement in deep learning technology excites me
                greatly, and I am very glad to be a part of its open-source
                advancements for the democratization of AI. All of my research and
                projects are publicly available on my{" "}
                <a href="https://github.com/Jdka1" target="_blank" rel="noreferrer" >
                  GitHub
                </a>{" "}
                with recreation, install, and application guides.
              </p>
            }
            image="roboticarm.gif"
            orientation="portrait"
          ></Project>


          <Project
            title="Practicum"
            image="lidar.gif"
            orientation="landscape"
            description={<p>
              <center><i><a href="/reflection/3" target="_blank" rel="noreferrer" >Why you should work for your heroes.</a></i></center>

              <br></br>

              <i style={{ color: 'grey' }}>above: LiDAR input visualization for a sensor fusion home security system (current work)</i>
            </p>}
            ></Project>


        <Project
            link="/gallery_room"
            title="Photography"
            description={
              <p>
                Expressing the world as a Landscape, Wildlife, and more recently,
                Cityscape photographer.
                <br></br>
                <br></br>I have embarked on many natural expeditions with friends
                and family including multiple to Yosemite, Banff, and Alaska, my
                personal favorite.
                <br></br>
                <br></br>
                A video I created pertaining to{" "}
                <a
                  href="https://www.youtube.com/watch?v=_EGjFYGZgb8"
                  target="_blank"
                  rel="noreferrer" 
                >
                  The 15 Rules of Photography, and Why You Should Break Them.
                </a>

                <br></br>
                <br></br>
                <br></br>
                <i style={{ color: 'grey' }}>&larr; click to view work from solo exhibiton at the Kriewall-Haehl Gallery</i>
              </p>
            }
            image="holdingcamera.JPG"
            orientation="portrait"
          ></Project>


          <Project
            title="日本語 (Japanese)"
            description={
              <p>
                Immersing myself in Japanese language and culture since 2018.
                Participated in an exchange and host program in 2023—traveled to
                Osaka, Kyoto, and Hiroshima where I made lifelong friends.
                <br></br>
                <br></br> Developed a {" "}
                <a
                  href="https://github.com/Jdka1/Kanji-Recognition"
                  target="_blank"
                  rel="noreferrer" 
                >
                  CNN based OCR (optical character recognition) model
                </a>{" "}
                to identify Kanji characters in a research project. <br></br>
                <br></br> Currently practicing Japanese for conversational and
                fluency and literacy, working on{" "}
                <a
                  href="https://docs.google.com/document/d/1Or-LR5FuShHkpLk3xenBmfHvi2g_QY8uS49a74R2Dhc/preview"
                  target="_blank"
                  rel="noreferrer" 
                >{" "}
                  translations
                </a>{" "}
                and{" "}
                <a
                  href="https://drive.google.com/file/d/1KcFXxN0al1vz-BiIN9fTVLcIatVbKGjo/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer" 
                >
                  other various projects
                </a>
                , and planning to return to Japan soon.
              </p>
            }
            image="dap.gif"
            orientation="portrait"
          ></Project>


          <Project
            title="Finance"
            description={
              <p>
                I started learning about finance 2 years prior and have had a
                vested interest going deeper since.
                <br></br>
                <br></br>
                In my current financial ecosystem I use Fidelity as my main
                brokerage and pseudo bank account and Charles Schwab for
                derivatives, I use Venmo and Cashapp for interpersonal
                transactions, and Phantom as my cryptocurrency and NFT wallet
                (planning to transition to Coinbase).

                <br></br>
                <br></br>

                <i style={{ color: 'grey' }}><b>Fidelity</b> (noun) – faithfulness to a person, cause, or belief, demonstrated by continuing loyalty and support &emsp;Oxford English Dictionary</i>
                <br></br>
                <br></br>
                {/* Similarly to my stance on AI, I strongly believe in democratized
                access to finance education. Thus, at The Nueva School I
                co-founded a finance club to teach high schoolers at all
                experience levels financial management through hands-on learning. */}
              </p>
            }
            image="wallstreet.gif"
            orientation="portrait"
          ></Project>

          <Project
            title="Piano"
            link="https://www.youtube.com/shorts/JBtvQVUFSKY"
            description={
              <p>
                Started (was forced) to learn piano starting in 2011 and stopped
                playing after a few years. Relearning since summer 2023.

                <br></br>
                <br></br>

                <i><a href="/reflection/1" target="_blank" rel="noreferrer" >Piano as physical therapy?</a></i>

                <br></br>
                <br></br>
                <br></br>
                <i style={{ color: 'grey' }}>&larr; click to view renditions on YouTube</i>
              </p>
            }
            image="piano.gif"
            orientation="portrait"
          ></Project>

          <Project
            title="Sports"
            description="Rower @ Pacific Rowing Club & Redwood Scullers, Basketball Point Guard & Track @ The Nueva School"
            image="boxing.gif"
            orientation="landscape"
          ></Project>

          <Project
            link="/reflections"
            title="Reflections"
            image="reflection.jpg"
            orientation="portrait"
            description={<p>
              <i style={{ color: 'grey' }}>&larr; click to view my thoughts/writings/blog</i>
            </p>}
          ></Project>
        </main>
      </Suspense>
    </div>
  );
}

export default App;
