import React from "react";
import './Header.css';
import logo_success from '../../assets/img/logo_success.png';

export default function Header() {
  return (
    <header className="header">
      <img
        src={logo_success}
        className="header--image"
        alt=""
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">
        <a href="https://github.com/derrak/meme-generator">
          Check out the repo
        </a></h4>
    </header>
  )
}