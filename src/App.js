import logo from './logo.svg';
import './App.css';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-flex" aria-label="primary-navigation">
            <img src={logo} className="App-logo" alt="Eric's Logo" tabindex="-1"/>
            <div className="flex-row">
                <a className="link" href="#projects">projects</a>
                <a className="link" href="#experience">experience</a>
                <a className="link" href="#resume">resume</a>
                <a className="link" href="#socials">find me!</a>
            </div>
        </nav>

        {/* <h3 className="sub-title"> hey! i'm </h3> */}
        <h1 className="main-title">eric ma</h1>
        <h3 className="sub-title"><a className="subtitle-link" target="_blank" href="https://brown.edu">brown '25</a></h3>
        <h3 className="sub-title">software intern <a className="subtitle-link"target="_blank" href="https://brown-dash.github.io/Dash-Documentation/about/"> @BrownDash</a></h3>
        <h3 className="sub-title">former dev <a className="subtitle-link"target="_blank" href="https://www.linkedin.com/company/full-stack-at-brown/"> @FullStack</a></h3>
        
        <p>githublogo/link, linkedin/logolink, email/logolink</p>
        {/* <button>
          <div class="py-3 px-3 border rounded-lg border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="h-5 w-5 fill-black dark:fill-white">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </svg>
          </div>
        </button> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="h-5 w-5 fill-black dark:fill-white">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
          </path>
        </svg> */}
      </header>

      <main className="App-main">
        <section id="projects">
          <h2 className="title">Projects</h2>
            <div className = "qualifications">
              
              <div className="exp-element">

                <h3 href='https://dash-starter-project-erc-ma.web.app/'>Mini-Dashboard</h3>
                


                <div className='element'>
                  <p>
                    Built a --/hypermedia web application/-- to store and organize media within an unbounded 2D freeform canvas. 
                    Functionality for images, websites, text editing, and collections with --/linking/-- and --/multi-view functionality/-- 
                  </p>

                  <div className='element-image'>
                    <img src='./dash.png'></img>
                    <figcaption>Skills: React, Typescript, MobX, SCSS <a href='https://github.com/brown-dash/dash-starter-project-erc-ma'>Repo</a></figcaption>
                  </div>
                </div>
                
              

              </div>

              <div className="exp-element">


                <h3>Othello</h3>
                <p>
                  Developed a <strong> strategy board game </strong> application that implements 3 levels of <strong>computer intelligence</strong> using <strong>recursive mini-max algorithm</strong>
                </p>

                <p>
                  Skills: Java (JavaFX Graphics)
                </p>
                <p>
                ADD GIF HERE (backup with image, backup with text)
                </p>
              </div>

            </div>
        </section>

        <section id="experience">
          <h2 className="title">Experience</h2>
            <div className = "qualifications">

            <div className="exp-element">
                <h3>Brown Dash [Adobe-Funded Project](Software Intern)</h3>
                <p>
                Worked on a collaborative browser-based web application in a team...
                  Implemented a map system using BingMapsReact API. Contributed many front-end UX updates.
                </p>
              </div>

              <div className="exp-element">
                <h3>Full Stack at Brown (Software Developer)</h3>
                <p>
                Created a dynamic website for the Brown Political Union with a team of developers, designers, and the product manager
                </p>

              </div>

              <div className="exp-element">
                <h3>Some courses I took are:</h3>
                <ul className="course-list">
                  <li className='current-course'>Data Structures and Algorithms</li>
                  <li className='current-course'>Discrete Structures and Probability</li>
                  <li className='current-course'>OOP Design</li>
                  <li className='current-course'>CS Independent Study</li>

                  <li className='future-course'>Systems (taken before Summer 2024)</li>
                  <li className='future-course'>Deep Learning (taken before Summer 2024)</li>
                  <li className='future-course'>Algorithms (taken before Summer 2024)</li>
                  <li className='future-course'>Graphics (taken before Summer 2024)</li>
                  <li className='future-course'>Computer Languages (taken before Summer 2024)</li>
                  

                </ul>
                
              </div>

            </div>
        </section>
        <section id="resume">
          <h2 className="title">Resume</h2>
          <p>Click the image to view</p>
        </section>

        <section id="socials">
          <h2 className="title">Stalk me (but in a fun way)</h2>
          <div className = "stalk-element">
            <h4>send me an email</h4>
            <p>email api</p>
            <p>(implemented with --- api)</p>
          </div>
          <div className = "stalk-element">
            <h4>my social media:</h4>
            <p>Github, LinkedIn, Instagram, Resume</p>
          </div>

          <div className = "stalk-element">
            <h4>i also make music!</h4>
            <p>musicPage, spotify, applemusic, youtube</p>
          </div>

          <div className = "stalk-element">
            <h4>my photography portfolio</h4>
            <p>ericma.com/photography -- JUST USE ADOBE TO SAVE TIME TBH</p>
            
          </div>

        </section>

      </main>






    </div>
  );
}

export default App;
