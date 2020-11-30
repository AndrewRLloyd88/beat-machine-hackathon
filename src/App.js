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

const App = () => {
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

  const instrumentRows = instruments.map((i) => <InstrumentRow instrumentName={i.name} instrumentSound={i.sound} instrumentColor={i.color} />);
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