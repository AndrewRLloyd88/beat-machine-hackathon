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
    console.log("play song array")
    if (array.length == 0){
      continue
    }
    console.log(array)
  }
}

  const beats = Bpm(tempo) 
  // useEffect(() => {
  //   if(isPlaying){
  //     setInterval(() => {
  //       //const counter = 0;
  //       //add business logic here to move playhead
  //       for (let i = 0; i< 16; i++){
  //         let soundArr = []
  //         for (let j = 0; j < 6; j++){
  //           console.log("playing this column")
  //           if (instruments[j].pattern[i] == 1){
  //             let soundSrc = instruments[j].sound
  //             soundArr.push(soundSrc)
  //           }
  //           playSounds(soundArr)
  //       }
  //       //secondary function to check instruments[0].pattern[i]
  //       // if Toggle{
  //       // sound.play(instruments[0].sound)
  //     //}
  //       setT(t+1)
  //       if (t == 15){
  //         setIsPlaying(false)
  //       }
  //       }
        
  //     }, beats);
  //   }
  // }, [isPlaying])

  const handlePlayButton = () => {
    setIsPlaying(true)
    console.log(isPlaying)
    if(isPlaying){
      setInterval(() => {
        for (let i = 0; i< 16; i++){
          let soundArr = []
          for (let j = 0; j < 6; j++){
            if (instruments[j].pattern[i] == 1){
              let soundSrc = instruments[j].sound
              soundArr.push(soundSrc)
            }
            playSounds(soundArr)
        }
        setT(t+1)
        if (t == 15){
          setIsPlaying(false)
        }
        }
        
      }, beats);
    }
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