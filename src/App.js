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

        {/* <h3 className="sub-title"> hey! i'm </h3> */}
        <h1 className="main-title">eric ma</h1>
        <h3 className="sub-title"><a className="subtitle-link" target="_blank" href="https://brown.edu">brown '25</a></h3>
        <h3 className="sub-title">software intern <a class="subtitle-link"target="_blank" href="https://brown-dash.github.io/Dash-Documentation/about/"> @BrownDash</a></h3>

      </header>

      <main className="App-main">
        <section id="projects">
          <h2 class="title">Projects</h2>
            <div className = "qualification-list">
              
              <div className="list-element">
                <h3>Mini-Dash</h3>
                <p>
                  Built a <strong>hypermedia web application</strong> that  
                </p>
              </div>

              <div className="list-element">
                <h3>Othello</h3>
                <p>
                  Implemented a <strong> strategy board game </strong> that implements 3 levels of <strong>computer "AI WHAT IS IT"</strong> using <strong>mini-max algorithm</strong>
                </p>
              </div>

            </div>
        </section>

        <section id="experience">
          <h2 class="title">Experience</h2>
            <div className = "qualification-list">

            <div className="list-element">
                <h3>Mini-Dash</h3>
                <p>
                  Built a <strong>hypermedia web application</strong> that  
                </p>
              </div>

              <div className="list-element">
                <h3>Othello</h3>
                <p>
                  Implemented a <strong> strategy board game </strong> that implements 3 levels of <strong>computer "AI WHAT IS IT"</strong> using <strong>mini-max algorithm</strong>
                </p>
              </div>

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
