import React from "react";
import { Link } from "react-router-dom";
import logoNoBg from "../img/logo-nobg.png";

function Nav(props) {
  return (
    <nav id="nav" className="navbar navbar-dark navbar-expand-md">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="gs-logo" src={logoNoBg} alt="" /> <span>Game</span>
          Snap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-center">
            <li className="nav-item">
              <Link to={"/"} className={`nav-link ${props.nav[0]}`} href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/games"}
                className={`nav-link ${props.nav[1]}`}
                href="#"
              >
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/news"}
                className={`nav-link ${props.nav[2]}`}
                href="#"
              >
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/giveaways"}
                className={`nav-link ${props.nav[3]}`}
                href="#"
              >
                Giveaways
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
