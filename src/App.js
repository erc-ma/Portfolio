import logo from './logo.svg';
import './App.css';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <nav class="nav-flex" aria-label="primary-navigation">
            <img src={logo} className="App-logo" alt="Eric's Logo" tabindex="-1"/>
            <div class="flex-row">
                <a class="link" href="#projects">projects</a>
                <a class="link" href="#experience">experience</a>
                <a class="link" href="#resume">resume</a>
                <a class="link" href="#links">find me!</a>
            </div>
        </nav>

        <h1 className="Main-title">Eric Ma</h1>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

      <main className="App-main">
        <section id="projects">
          <h2 class="title">Projects</h2>
            <div className = "qualification-list">
              
              {/* TODO: CREATE A PROJECT NODE CLASS AND MAP THROUGH */}
              <div className="PROJECT_MAKE_OWN_CLASS">
                <h3>Mini-Dash</h3>
                <p>
                  Built a <strong>hypermedia web application</strong> that  
                </p>
              </div>




            </div>
        </section>

        <section id="experience">
          <h2 class="title">Experience</h2>
            <div className = "qualification-list">
                <p>
                  This project <strong>strongly recommend</strong>
                    
                </p>
              </div>
        </section>
        <section id="resume">
          <h2 class="title">Resume</h2>
        </section>
        <section id="links">
          <h2 class="title">Stalk me (but in a fun way)</h2>
        </section>

      </main>






    </div>
  );
}

export default App;
