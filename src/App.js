import React, { useEffect, useState } from 'react';
import './styles/index.css';
import {Howl, Howler} from 'howler';
import SimpleCard from './Components/Columns'
import BeatMachine from "./Components/BeatMachine"
import InstrumentRow from './Components/InstrumentRow';
import Bpm from "./helpers/useBPM"
import BeatTracker from "./Components/BeatTracker"
import sounds from "./song.json"
import BeatLabel from "./Components/BeatLabel"
import Tempo from "./Components/Tempo"
import instruments from "./helpers/instruments"
import PlayButton from './Components/PlayButton';

const App = () => {
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
  const [isPlaying, setIsPlaying] = useState(false)
  const [tempo, setTempo] = useState(60);
  
  const handleTempoChange = (event) => {
    const eventValue = event.target.value
    setTempo(parseInt(eventValue))
  }
  
  const beats = Bpm(tempo) 

  useEffect(() => {
    if(isPlaying){
      setInterval(() => {
        //const counter = 0;
        //add business logic here to move playhead

        //secondary function to check instruments[0].pattern[i]
        // if Toggle{
        // sound.play(instruments[0].sound)
      //}
      }, beats);
    }
  }, [isPlaying])

  const handlePlayButton = () => {
    setIsPlaying(true)
    console.log(isPlaying)
  }

  const instrumentRows = instruments.map((i) => <InstrumentRow instrumentName={i.name} instrumentSound={i.sound} />);
    return(
      <>
      <BeatMachine />
        <h1>Hello World, Let's try a pull request!</h1>
        <h2>{beats} per minute</h2>
        <button onClick={playTogether}>press</button>
        <button onClick={playSound}>press</button>
        <button onClick={playSound1}>press</button>
      {/* <BeatMachine /> */}
      <Tempo />
      <table border='0'>
      <PlayButton onClick={handlePlayButton} />
      <Tempo value={tempo} onTempoChange={(event) => {handleTempoChange(event)}} />
      <table border='0'>value={} 
        <tbody>
          <BeatTracker />
          {instrumentRows}
          <BeatLabel />
        </tbody>
      </table>
    </table>
    </>
  )
}

export default App;
