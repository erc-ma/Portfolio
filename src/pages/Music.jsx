import logo from '../logo.svg';
import mooncake from '../mooncake.png'
import albumcover from '../albumcover.jpg'
import '../App.css';

const Music = () => {

  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-flex" aria-label="primary-navigation">
            <img src={mooncake} className="App-logo" alt="Eric's Logo" tabindex="-1"/>
        </nav>
        <h1 className="main-title">Half Lucid</h1>
        <h3 className="sub-title">streaming everywhere!</h3>


        <div className='logos-row'>
          <a target="_blank" href='https://open.spotify.com/artist/2xVoQRcVWpeu8Crpd1SiIy?si=iePbBzTGTNCybs9SKkzf_A'>
            <img className="social-logo" src='https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png'></img>
          </a>
          <a target="_blank" href='https://www.linkedin.com/in/eric-ma-149041233/'>
            <img className="social-logo" src='https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png'></img>
          </a>
          <a target="_blank" href='mailto:eric_ma@brown.edu'>
            <img className="social-logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png'></img>
          </a>
          <a target="_blank" href='mailto:eric_ma@brown.edu'>
            <img className="social-logo" src='https://w7.pngwing.com/pngs/1009/93/png-transparent-youtube-computer-icons-logo-youtube-angle-social-media-share-icon.png'></img>
          </a>
        </div>
      </header>

      <main className="App-main">
        <section id="projects">
        
          <h2 className="title">What is Half Lucid?</h2>
            <div className = "qualifications">
              
              <div className="exp-element">
                
                <div className='element'>
                  <p>
                  Half Lucid is a solo project I began in the summer of 2022, 
                and now, my first song is finally out!
                  </p>
                  

                  <div className='element-image'>
                    <img className="half-lucid-image" src={albumcover}></img>
                  </div>
                </div>
              </div>
              <div className='logos-row'>
                <a target="_blank" href='https://open.spotify.com/artist/2xVoQRcVWpeu8Crpd1SiIy?si=iePbBzTGTNCybs9SKkzf_A'>
                  <img className="social-logo" src='https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png'></img>
                </a>
                <a target="_blank" href='https://www.linkedin.com/in/eric-ma-149041233/'>
                  <img className="social-logo" src='https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png'></img>
                </a>
                <a target="_blank" href='mailto:eric_ma@brown.edu'>
                  <img className="social-logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png'></img>
                </a>
                <a target="_blank" href='mailto:eric_ma@brown.edu'>
                  <img className="social-logo" src='https://w7.pngwing.com/pngs/1009/93/png-transparent-youtube-computer-icons-logo-youtube-angle-social-media-share-icon.png'></img>
                </a>
              </div>
              
              <h3 className="sub-title">
                
              </h3>
              <a className="link" href="/">done listening? check out my main site!</a>
            </div>

        </section>



      </main>






    </div>
  );
}

export default Music;
