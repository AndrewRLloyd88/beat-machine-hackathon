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
import Inst from "./Components/Inst";


const App = () => {

  console.log("Inst: ")
  console.log(Inst)
  const [isPlaying, setIsPlaying] = useState(false)
  const [tempo, setTempo] = useState(60);
  const [volNum, setVolNum] = useState(50)
  console.log("at app: " + volNum)

  let [counter, setCounter] = useState(0);
  let [grid, updateGrid] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0])

  const handleVol = (event, volNum) => {
    setVolNum(volNum);
  };

  
  const handleTempoChange = (event) => {
    const eventValue = event.target.value
    setTempo(parseInt(eventValue))
  }


  const playSound = (sound) => {
    var sound = new Howl({
      src: [sound],
      html5: true,
      volume: (volNum/100)
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
        // setCounter(counter = counter + 1)
        counter = counter >= 15 ? 0 : counter + 1  
        // if(counter > 15) {
        //   setCounter(0);
        // } else {
        //   setCounter(counter + 1);
        // }
        loop()  
        console.log("in useEffect: ", counter);
      }, beats);
      return () => clearInterval(interval)
    }
  }, [isPlaying, beats])

  const loop = () => {
    // if(counter > 15){
    //   setCounter(0)
    // }
      let i = counter
        // console.log("in loop: i: ", i)
          let soundArr = []
          for (let j = 0; j < 6; j++){
            // console.log(j)
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
  const instrumentRows = instruments.map((i) => <InstrumentRow  volNum={volNum} instrumentName={i.name} instrumentSound={i.sound} pattern={i.pattern} instrumentColor={i.color} />);
  return (
    <div className="container">
      <BeatMachine />
          <PlayButton onClick={handlePlayButton} isPlaying={isPlaying}/>
          <StopButton onClick={handleStopBtn} />
          <Volume volNum={volNum} onChange={handleVol}/>
      <Tempo value={tempo} onTempoChange={(event) => {handleTempoChange(event)}} />
      <table className="tableStyle" border='0'>value={} 
        <tbody>
          <BeatTracker count={counter} updateGrid={updateGrid}/>
          {instrumentRows}
          <BeatLabel />
        </tbody>
      </table>
    </div>
  )
}

export default App;