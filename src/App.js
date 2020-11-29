import React from 'react';
import './styles/index.css';
import {Howl, Howler} from 'howler';
import SimpleCard from './Components/Columns'
import BeatMachine from "./Components/BeatMachine"
import InstrumentRow from './Components/InstrumentRow';
import Bpm from "./helpers/useBPM"
import BeatTracker from "./Components/BeatTracker"
import sounds from "./song.json"

const App = () => {
const beats = Bpm();
  const playSound = () => {
    var sound = new Howl({
      src: [sounds[0].source],
      html5: true,
    });    
    sound.play();
    Howler.volume(1);
  }
  const playSound1 = () => {
    var sound = new Howl({
      src: [sounds[1].source],
      html5: true,
    });    
    sound.play();
    Howler.volume(1);
  }
  const playTogether = () => {
    playSound()
    playSound1()
  }
    return(
      <>
      <BeatMachine />
        <h1>Hello World, Let's try a pull request!</h1>
        <h2>{beats} per minute</h2>
        <button onClick={playTogether}>press</button>
        <button onClick={playSound}>press</button>
        <button onClick={playSound1}>press</button>

        <table border='2'>
      
          <tbody>
          <BeatTracker/>
           <InstrumentRow />
           <InstrumentRow />
           <InstrumentRow />
           <InstrumentRow />
           <InstrumentRow />
           <InstrumentRow />
         </tbody>
        </table>
      </>
    )
  }

export default App;
