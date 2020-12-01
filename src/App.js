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
import StopButton from './Components/StopButton';
import Volume from './Components/Volume'
import { Howl, Howler } from 'howler';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [tempo, setTempo] = useState(60);
  let [counter, setCounter] = useState(0);
  
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
    console.log("play song array")
    // if (array.length == 0){
    //   continue
    // }
    console.log(array)
  }
}

//updates count that loop is dependent on (our 2nd useEffect)
  const beats = Bpm(tempo) 
  useEffect(() => {
    if(isPlaying){
      const interval = setInterval(() => {
        counter = counter >= 15 ? 0 : counter + 1  
        loop()  
        console.log("in useEffect: ", counter);
      }, beats);
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const loop = () => {
      let i = counter
        console.log("in loop: i: ", i)
          let soundArr = []
          for (let j = 0; j < 6; j++){
            console.log(j)
            if (instruments[j].pattern[i] === 1){
              let soundSrc = instruments[j].sound
              soundArr.push(soundSrc)
            }
            playSounds(soundArr)
        }
  }
  const handlePlayButton = () => {
    setIsPlaying(true)
    console.log(isPlaying)
  }

  const handleStopBtn = () => {
    setIsPlaying(false)
    console.log("stop playing")
  }
  const instrumentRows = instruments.map((i) => <InstrumentRow instrumentName={i.name} instrumentSound={i.sound} pattern={i.pattern} instrumentColor={i.color} />);
  return (
    <div className="container">
      <BeatMachine />
      <PlayButton onClick={handlePlayButton} isPlaying={isPlaying}/>
      <StopButton onClick={handleStopBtn} />
      <Volume/>
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