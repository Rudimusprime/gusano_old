import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Gallery from "./components/gallery/Gallery.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {faBehanceSquare, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import redMotionLogo from "./img/redmotion-logo.png";
import homeLogo from "./img/header logo.svg";
import Header from "./components/nav/Header";

function App() {
  return (
      <Router>
        {<Header/>}
        <main>
          <section className="home">
            <div className="empty-home"></div>
            <img alt=""
                 className="home-logo"
                 src={homeLogo}/>
          </section>
          <section className="about">
            <h2>O mnie</h2>
            <p>Nazywam się Maciej Jańczak i jestem grafikiem. Ukończyłem studia na Politechnice Poznańskiej i
              pracowałem jako projektant konstrukcji, ale zamieniłem budownictwo na grafikę i od tego czasu
              szczęśliwie realizuję się twórczo.
              Ukończyłem studia podyplomowe na WSNHiD na kierunku grafiki projektowej. Aktualnie pracuję jako grafik w
              drukarni fleksograficznej.
              Pierwsze rysunki i obrazy olejne zacząłem rysować i malować w 2003 roku. Były to obrazy o różnej
              tematyce, wśród nich przeważały akty. Od roku 2006 biorę udział w wystawach cyklicznych organizowanych
              wielu miejscach w Polsce. Ostatnio realizuję się głównie w grafice komputerowej.
            </p>
          </section>
          <section className="portfolio">
            <h2>Portfolio - Maciej Jańczak</h2>

            {<Gallery/>}

          </section>
        </main>
        <footer>
          <div className="contact-footer">
            <h3>kontakt</h3>
            <a href="tel:+48 607 381 939">
              <FontAwesomeIcon icon={faMobileAlt}/>+48 607 381 939
            </a>
            <a href='mailto:kontakt@gusano.pl'>
              <FontAwesomeIcon icon={faEnvelope}/>kontakt@gusano.pl
            </a>
          </div>
          <div className="follow-me">
            <h3>zaobserwuj mnie</h3>
            <a href="https://www.behance.net/maciejjot55c0"
               target="_blank">
              <FontAwesomeIcon icon={faBehanceSquare}/>
            </a>
            <a href="https://www.facebook.com/Maciej.JotJanczak"
               target="_blank">
              <i className="fab fa-facebook-square"/>
              <FontAwesomeIcon icon={faFacebookSquare}/>
            </a>
          </div>
          <div className="creator">
            <h3>wykonawca</h3>
            <a href="https://redmotion.pl/">
              <img alt=""
                   className="creator-logo"
                   src={redMotionLogo}/>
            </a>
          </div>
        </footer>
        <div className="copyrights">
          <p>Copyright &copy; Gusano {new Date().getFullYear()}</p>
        </div>
      </Router>
  );
}

export default App;
