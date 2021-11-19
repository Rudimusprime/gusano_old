import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import navBarLogo from "../../img/nav-bar logo.svg";
import './Header.css';

const Header = () => {
    return (
        <Router>
            <header className="main-header">
                <nav>
                    {/*<ul>*/}
                    {/*  <li>*/}
                    {/*    <a href="#about">o mnie</a>*/}
                    {/*  </li>*/}
                    {/*  <li>*/}
                    {/*    <a href="#portfolio">portfolio</a>*/}
                    {/*  </li>*/}
                    {/*</ul>*/}
                </nav>
                <a href="#">
                    <img alt=""
                         className="navbar-logo"
                         src={navBarLogo}/>
                </a>
            </header>
        </Router>
    );
}

export default Header;