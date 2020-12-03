import React, { useEffect, useState } from 'react';
import './styles/index.css';
import BeatMachine from "./Components/BeatMachine"
import InstrumentRow from './Components/InstrumentRow';
import Bpm from "./helpers/useBPM"
import BeatTracker from "./Components/BeatTracker"
import BeatLabel from "./Components/BeatLabel"
import Tempo from "./Components/Tempo"
import { instruments, getBassNote } from "./helpers/instruments"
import PlayButton from './Components/PlayButton';
import StopButton from './Components/StopButton';
import Volume from './Components/Volume'
import { Howl, Howler } from 'howler';
import Inst from "./Components/Inst";


const App = () => {

  const [isPlaying, setIsPlaying] = useState(false)
  const [tempo, setTempo] = useState(60);
  const [volNum, setVolNum] = useState(50)
  const [squares, setSquares] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [playHeadArray, setPlayHeadArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  const handleVol = (event, volNum) => {
    setVolNum(volNum);
    clearAnimation();
  };

  //this function fixes sticking animations in playhead
  const clearAnimation = () => {
    let psquares = document.querySelectorAll('.cycle')
    console.log(psquares)
    for(const psquare of psquares){
      if(psquare.classList.contains('playhead')){
        psquare.classList.remove('playhead')
        psquare.classList.add('inactive')
      }
    }
  }

  // had to set initial value to -1 to allow counting from 0!
  let [counter, setCounter] = useState(0);

  const [grid, setGrid] = useState([
    instruments[0].pattern,
    instruments[1].pattern,
    instruments[2].pattern,
    instruments[3].pattern,
    instruments[4].pattern,
    instruments[5].pattern,
    instruments[6].pattern
  ]);

  const updateGrid = (row, column, toggle) => {
    // console.log('row, col, toggle', row, column, toggle);
    const clonedObj = { ...grid[row] };
    clonedObj[column] = toggle;
    const arrayToPassSetGrid = [];
    for (let i = 0; i < 7; i++) {
      if (row === i) {
        arrayToPassSetGrid.push(clonedObj);
      } else {
        arrayToPassSetGrid.push(grid[i]);
      }
    }
    setGrid(arrayToPassSetGrid);
    clearAnimation();
}
  
  const handleTempoChange = (event) => {
    const eventValue = event.target.value
    console.log(eventValue)
    setTempo(parseInt(eventValue))
    clearAnimation();
  }

  const getPreviousSquare = () => {
    if(counter === 0){
      return document.getElementById('15')
    } else {
      return document.getElementById(`${counter - 1}`)
    }
    }

  const playHeadLoop = () => {
    //make a shallow copy of the pattern
    let pattern = [...squares]
   //make a shallow copy of the mutable object
    let position = squares[counter]
    //replace the 0 with a 1
     position = 1;
   pattern[counter] = position
   setSquares(pattern)
   //get the square to animate
   let squareToAnimate = document.getElementById(`${counter}`)
   //find previousSquare
   let previousSquare = getPreviousSquare()
   //distribute classes as needed
   previousSquare.classList.remove('playead')
   previousSquare.classList.add('inactive')
   squareToAnimate.classList.remove('inactive')
   squareToAnimate.classList.add('playhead')
  }

  const resetSquares = () => {
    setCounter(0)
    setSquares([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      setPlayHeadArray(squares.map((square, i) => ( <td key={i + squares} id={i} className={square > 0 ? "playhead" : "inactive cycle"}></td> )))
  }

  const playSound = (source) => {
    var sound = new Howl({
      src: [source],
      html5: true,
      volume: (volNum/100)
  
    });
    sound.play();
  }

  const playSounds = (array) => {
    for (let i = 0; i < array.length; i++) {
      playSound(array[i]);
    }
  }

  //setTimeout does actions at the set tempo e.g. 1000ms
  let beats = Bpm(tempo)
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        resetSquares();
        playHeadLoop()
        loop();
        // each square, counter increments to one (should be using and if else and setCounter here since it is part of state?)
        counter = counter >= 15 ? 0 : counter + 1
        // loop creates an array of up to 6 sounds that are then played at the same time 
        resetSquares();
      }, beats);
      return () => clearInterval(interval)
    }
    resetSquares();
  }, [isPlaying, grid, beats, volNum, counter])

  const loop = () => {
    let soundArr = []
    for (let j = 0; j < 7; j++) {
      if (grid[j][counter]) {  
        let soundSrc = (instruments[j].name === 'bass') ? getBassNote(counter) : instruments[j].sound;
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

 const playHead = () => {
    if(isPlaying){
    return <><td />{playHeadArray}</>
    } else {
      return (
      <>
      <td className={isPlaying ? 'hidden' : null}/>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td>
      <td className="inactive"></td> 
      </>
      )
    }
  }

  let playHeadComponent = playHead()

  return (
    <div className="container">
      <BeatMachine />
      <PlayButton onClick={handlePlayButton} isPlaying={isPlaying} />
      <StopButton onClick={handleStopBtn} />
      <Volume volNum={volNum} onChange={handleVol}/>
      <Tempo value={tempo} onTempoChange={(event) => { handleTempoChange(event) }} />
      <table border='0'>
        <tbody>
          <>
          {playHeadComponent}
          </>
          {instrumentRows}
          <BeatLabel />
        </tbody>
      </table>
    </div>
  )
}

export default App;