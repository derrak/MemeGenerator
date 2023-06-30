import React from "react";
import './Header.css';
import trollFace from '../../assets/img/Troll Face.png';

export default function Header() {
  return (
    <header className="header">
      <img
        src={trollFace}
        className="header--image"
        alt=""
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Project</h4>
    </header>
  )
}