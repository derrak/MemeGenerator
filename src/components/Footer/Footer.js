import React from "react";
import './Footer.css';
import gh_logo from '../../assets/img/github-64.png'

export default function Footer(props) {
  return (
    <footer 
      className={props.darkMode ? "footer--dark" : "footer"}>

        <img
          src={gh_logo}
          className={props.darkMode ? "footer--ghLogo--dark" : "footer--ghLogo"}
          alt=""
        />
        <h4 >
          <a href="https://github.com/derrak/meme-generator"
            target="_blank"
            className={props.darkMode ? "footer--project--dark" : "footer--project"}
            >
            Check out the repo
          </a>
        </h4>
    </footer>
  );
}