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

  // had to set initial value to -1 to allow counting from 0!
  let [counter, setCounter] = useState(-1);
  const [grid, setGrid] = useState([
    instruments[0].pattern,
    instruments[1].pattern,
    instruments[2].pattern,
    instruments[3].pattern,
    instruments[4].pattern,
    instruments[5].pattern
  ]);

  const updateGrid = (row, column, toggle) => {
    // console.log('row, col, toggle', row, column, toggle);
    const clonedObj = { ...grid[row] };
    clonedObj[column] = toggle;
    const arrayToPassSetGrid = [];
    for (let i = 0; i < 6; i++) {
      if (row === i) {
        arrayToPassSetGrid.push(clonedObj);
      } else {
        arrayToPassSetGrid.push(grid[i]);
      }
    }
    setGrid(arrayToPassSetGrid);
  }
  
  const handleTempoChange = (event) => {
    const eventValue = event.target.value
    setTempo(parseInt(eventValue))
  }

  const playSound = (source) => {
    var sound = new Howl({
      src: [source],
      html5: true
    });
    sound.play();
  }

  const playSounds = (array) => {
    for (let i = 0; i < array.length; i++) {
      playSound(array[i]);
    }
  }

  //updates count that loop is dependent on (our 2nd useEffect)
  const beats = Bpm(tempo)
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        // each square, counter increments to one (should be using and if else and setCounter here since it is part of state?)
        
        counter = counter >= 15 ? 0 : counter + 1
        // loop creates an array of up to 6 sounds that are then played at the same time 
        loop();
      }, beats);
      return () => clearInterval(interval)
    }
  }, [isPlaying, grid, beats])

  const loop = () => {
    let soundArr = []
    for (let j = 0; j < 6; j++) {
      if (grid[j][counter]) {
        let soundSrc = instruments[j].sound
        soundArr.push(soundSrc)
      }
      playSounds(soundArr)
    }
  }

  const handlePlayButton = () => {
    setIsPlaying(true)
  }

  const handleStopBtn = () => {
    setIsPlaying(false)
  }

  const instrumentRows = instruments.map((instrument, row) => {
    return (
      <InstrumentRow
        key={row}
        row={row}
        updateGrid={(row, column, toggle) => updateGrid(row, column, toggle)}
        instrumentName={instrument.name}
        instrumentSound={instrument.sound}
        pattern={instrument.pattern}
        instrumentColor={instrument.color}
      />)
  });

  return (
    <div className="container">
      <BeatMachine />
      <PlayButton onClick={handlePlayButton} isPlaying={isPlaying} />
      <StopButton onClick={handleStopBtn} />
      <Volume />
      <Tempo value={tempo} onTempoChange={(event) => { handleTempoChange(event) }} />
      <table border='0'>
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