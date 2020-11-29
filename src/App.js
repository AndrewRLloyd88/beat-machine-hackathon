import React from 'react';
import './styles/index.css';
import {Howl, Howler} from 'howler';
import SimpleCard from './components/Columns'
import BeatMachine from "./Components/BeatMachine"
import InstrumentRow from './Components/InstrumentRow';

const App = () => {

  const playSound = () => {
    var sound = new Howl({
      src: ["./DrumSamples/MainSnare/Snare1.wav"],
      html5: true,
    });    
    sound.play();
    Howler.volume(1);
  }
  
    return(
      <>
      <BeatMachine />
        <h1>Hello World, Let's try a pull request!</h1>
        <button onClick={playSound}>press</button>
<<<<<<< HEAD
        <SimpleCard/>
=======

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
>>>>>>> master
      </>
    )
  }

export default App;
