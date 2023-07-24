import React from "react";
import './Header.css';
import logo_success from '../../assets/img/logo_success.png';
import gh_logo from '../../assets/img/github-64.png'

export default function Header() {
  return (
    <header className="header">
      <img
        src={logo_success}
        className="header--image"
        alt=""
      />
      <h2 className="header--title">Meme Generator</h2>
      <img
        src={gh_logo}
        className="header--ghLogo"
        alt=""
      />
      <h4 >
        <a href="https://github.com/derrak/meme-generator"
          target="_blank"
          className="header--project">
          Check out the repo
        </a>
      </h4>
    </header>
  )
}