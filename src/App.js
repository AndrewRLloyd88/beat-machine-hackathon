import React, { useEffect, useState } from 'react';
import './styles/index.css';
import BeatMachine from "./Components/BeatMachine"
import InstrumentRow from './Components/InstrumentRow';
import Bpm from "./helpers/useBPM"
import BeatTracker from "./Components/BeatTracker"
import BeatLabel from "./Components/BeatLabel"
import Tempo from "./Components/Tempo"
import instruments from "./helpers/instruments"
import PlayButton from './Components/PlayButton';
import { Howl, Howler } from 'howler';


const App = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [tempo, setTempo] = useState(60);
  const [t, setT] = useState(0);
  
  const handleTempoChange = (event) => {
    const eventValue = event.target.value
    setTempo(parseInt(eventValue))
  }

  const playSound = (sound) => {
    var sound = new Howl({
      src: [sound],
      html5: true,
    });
    sound.play();
  }
  
const playSounds = (array) => {
  for (let i = 0; i < array.length; i++){
    playSound(array[i])
  }
}

  const beats = Bpm(tempo) 
  useEffect(() => {
    if(isPlaying){
      setInterval(() => {
        //const counter = 0;
        //add business logic here to move playhead
        for (let i = 0; i< 16; i++){
          let soundArr = []
          for (let j = 0; j < 6; j++){
            if (instruments[j].pattern[i] == 1){
              let soundSrc = instruments[j].sound
              console.log(soundSrc)
              soundArr.push(soundSrc)
            }
            playSounds(soundArr)
        }
        //secondary function to check instruments[0].pattern[i]
        // if Toggle{
        // sound.play(instruments[0].sound)
      //}
        setT(t+1)
        if (t == 15){
          setIsPlaying(false)
        }
        }
        
      }, beats);
    }
  }, [isPlaying])

  const handlePlayButton = () => {
    setIsPlaying(true)
    console.log(isPlaying)
  }

  const instrumentRows = instruments.map((i) => <InstrumentRow instrumentName={i.name} instrumentSound={i.sound} pattern={i.pattern} instrumentColor={i.color} />);
  return (
    <div className="container">
      <BeatMachine />
      <PlayButton onClick={handlePlayButton} />
      <Tempo value={tempo} onTempoChange={(event) => {handleTempoChange(event)}} />
      <table border='0'>value={} 
        <tbody>
          <BeatTracker />
          {instrumentRows}
          <BeatLabel />
        </tbody>
      </table>
    </div>
  )
}

export default App;