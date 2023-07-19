import React from "react";
import './Meme.css';
import { toPng } from 'html-to-image';
import download from 'downloadjs';


export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/gk5el.jpg"
  })
  
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    //console.log(event)
    const { name, value, } = event.target
    setMeme(prevMemeData => {
      return {
        ...prevMemeData,
        [name]: value
      }
    })
  }

  function handleDownload() {
    const memeContainer = document.getElementById('meme-container');

    // Use htmlToImage to convert the meme container to an image
    toPng(memeContainer)
      .then(function (dataUrl) {
        // Trigger the download using downloadjs
        download(dataUrl, 'meme.png');
      })
      .catch(function (error) {
        console.error('Error generating image: ', error);
      });
  }

  return (
    <main className="form--main">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
            <button
              className="form--button"
              onClick={getMemeImage}
            >
              Get a new meme image 🖼
            </button>
            <button
              className="form--button"
              onClick={handleDownload}
            >
              Download Meme 📥
          </button>
        </div> 
      <div className="meme" id="meme-container">
        <img src={meme.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}