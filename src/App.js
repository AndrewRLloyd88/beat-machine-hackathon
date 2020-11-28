import React, { Component } from 'react';
import logo from './mintbean.png';
import './styles/index.css';
import {Howl, Howler} from 'howler';

const App = () => {

  const playSound = () => {
    console.log("clicked")
    var sound = new Howl({
      src: ['../public/effects/airplane-landing_daniel_simion.mp3'],
      html5: true,
    });
    
    sound.play();
    Howler.volume(0.5);
  }
  
  // This sound file may not work due to cross-origin setting

    return(
      <h1>Hello World, Let's try a pull request!</h1>
      // <button className="soundbtn" onClick={this.playSound.bind(this)}>press</button>
    )
  }

export default App;
