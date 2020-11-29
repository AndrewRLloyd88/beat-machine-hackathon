import React from 'react';
import './styles/index.css';
import {Howl, Howler} from 'howler';
import BeatMachine from "./Components/BeatMachine"
import InstrumentRow from './Components/InstrumentRow';

const App = () => {
  
  const playSound = () => {
    console.log("clicked")
    var sound = new Howl({
      src: ["airplane-landing_daniel_simion.mp3"],
      html5: true,
    });
    
    sound.play();
    console.log(sound);
    Howler.volume(1);
  }
  
    return(
      <>
      <BeatMachine />
        <h1>Hello World, Let's try a pull request!</h1>
        <button onClick={playSound}>press</button>

        <table border='2'>
          <tbody>
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
