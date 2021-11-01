import './App.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {faBehanceSquare, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import redMotionLogo from "./img/redmotion-logo.png";
import navBarLogo from "./img/nav-bar logo.svg";
import homeLogo from "./img/header logo.svg";

function App() {


  return (
      <div>
        <header className="header">
          <nav>
            <ul>
              <li>
                <a href="#about">o mnie</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
            </ul>
          </nav>
          <a href="#">
            <img alt=""
                 className="navbar-logo"
                 src={navBarLogo}/>
          </a>
        </header>
        <section className="home">
          <div className="empty-home"></div>
          <img alt=""
               className="home-logo"
               src={homeLogo}/>
        </section>
        <section className="about">
          <div>
            <h2>Kilka słów o mnie</h2>
            <p>Jestem absolwentem Liceum Ogólnokształcącego im. Powstańców Wielkopolskich w Wągrowcu. Później
              ukończyłem studia na Politechnice Poznańskiej na kierunku budownictwo, studiował także na WSNHiD na
              kierunku grafiki projektowej.
              Pierwsze rysunki i obrazy olejne zacząłem rysować i malować w 2003 roku.</p>
            <p> Były to obrazy o różnej tematyce, wśród nich przeważały akty, krajobrazy oraz motywy fantastyczne. Od
              roku 2006 biorę udział w wystawach cyklicznych
              organizowanych wielu miejscach w Polsce. Czym charakteryzują się moje prace? Obrazy, grafiki i rysunki
              łączy jedno - żadne nie posiada tytułu, ponieważ całą interpretację pragnę zostawić odbiorcy.</p>
          </div>
        </section>
        <section className="portfolio">
          <h2>Portfolio - Maciej Jańczak</h2>
          <img alt=""
               src=""/>
          <img alt=""
               src=""/>
          <img alt=""
               src=""/>
        </section>
        <footer>
          <div className="contact-footer">
            <h3>kontakt</h3>
            <a href="tel:+48 607 381 939">
              <FontAwesomeIcon icon={faMobileAlt}/>+48 607 381 939
            </a>
            <a href mailto="kontakt@gusano.pl">
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
      </div>
  );
}

export default App;
