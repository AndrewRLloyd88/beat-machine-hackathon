import React, { useEffect } from 'react';
import './styles/index.css';
import {Howl, Howler} from 'howler';
import BeatMachine from "./Components/BeatMachine"

const App = () => {

  const playSound = () => {
    var sound = new Howl({
      src: ["./DrumSamples/MainSnare/Snare1.wav"],
      html5: true,
    });    
    sound.play();
    Howler.volume(1);
  }
  
  // This sound file may not work due to cross-origin setting

    return(
      <>
      <BeatMachine />
        <h1>Hello World, Let's try a pull request!</h1>
        <button onClick={playSound}>press</button>
      </>
    )
  }

export default App;
