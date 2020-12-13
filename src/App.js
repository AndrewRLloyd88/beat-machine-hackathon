import React, { useEffect, useState } from 'react';
import './styles/index.css';
import './styles/playhead.css';
import BeatMachine from './Components/BeatMachine';
import InstrumentRow from './Components/InstrumentRow';
import Bpm from './helpers/useBPM';
// import BeatTracker from './Components/BeatTracker';
import BeatLabel from './Components/BeatLabel';
import Tempo from './Components/Tempo';
import { instruments, getBassNote } from './helpers/instruments';
import PlayButton from './Components/PlayButton';
import StopButton from './Components/StopButton';
import Volume from './Components/Volume';
import { Howl } from 'howler';

const App = () => {
  //beat machine initial states
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);
  const [volNum, setVolNum] = useState(50);
  // state tracking for playhead when isPlaying
  const [squares, setSquares] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  // state tracking for our dumb component when !isPlaying
  const [playHeadArray, setPlayHeadArray] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const [counter, setCounter] = useState(0);
  // holds state for each row of instruments
  const [grid, setGrid] = useState([
    instruments[0].pattern,
    instruments[1].pattern,
    instruments[2].pattern,
    instruments[3].pattern,
    instruments[4].pattern,
    instruments[5].pattern,
    instruments[6].pattern,
  ]);

  // TODO: Refactor player controls into helpers
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  //set BPM
  let beats = Bpm(tempo);

  //ParseInt() as tempo field currently a string
  const handleTempoChange = (event) => {
    const eventValue = event.target.value;
    setTempo(parseInt(eventValue));
  };

  //volume handler
  const handleVol = (event, volNum) => {
    setVolNum(volNum);
  };

  //Animation Specific functions
  //helper function for playHeadLoop()
  const getPreviousSquare = () => {
    if (counter === 0) {
      return document.getElementById('15');
    } else {
      return document.getElementById(`${counter - 1}`);
    }
  };

  // animates playhead based off the counter position
  const playHeadLoop = () => {
    //make a shallow copy of the pattern
    let pattern = [...squares];
    //make a shallow copy of the mutable object
    let position = squares[counter];
    //set the current square to a truthy value
    position = 1;
    pattern[counter] = position;
    setSquares(pattern);
    //get the square to animate
    let squareToAnimate = document.getElementById(`${counter}`);
    //find previousSquare
    let previousSquare = getPreviousSquare();
    //distribute classes as needed
    previousSquare.classList.remove('playead');
    previousSquare.classList.add('inactive');
    squareToAnimate.classList.remove('inactive');
    squareToAnimate.classList.add('playhead');
  };
  //this function fixes sticking animations in playhead
  const clearAnimation = () => {
    let psquares = document.querySelectorAll('.cycle');
    console.log(psquares);
    for (const psquare of psquares) {
      if (psquare.classList.contains('playhead')) {
        psquare.classList.remove('playhead');
        psquare.classList.add('inactive');
      }
    }
  };

  //when player is stopped reset playhead and array to initial values
  const resetSquares = () => {
    setCounter(0);
    setSquares([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setPlayHeadArray(
      squares.map((square, i) => (
        <td
          key={i + squares}
          id={i}
          className={square > 0 ? 'playhead' : 'inactive cycle'}
        ></td>
      ))
    );
  };

  //handles the array of instruments on each tick
  const updateGrid = (row, column, toggle) => {
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
  };

  const playSound = (source) => {
    var sound = new Howl({
      src: [source],
      html5: true,
      volume: volNum / 100,
    });
    sound.play();
  };

  const playSounds = (array) => {
    for (let i = 0; i < array.length; i++) {
      playSound(array[i]);
    }
  };

  //useEffect re-renders and runs our beat machine functions if IsPlaying per tick of setInterval
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        playHeadLoop();
        loop();
        // each square, counter increments to one (should be using and if else and setCounter here since it is part of state?)
        if (counter < 15) {
          setCounter((prevState) => ++prevState);
        } else {
          setCounter(0);
        }
        console.log(counter);
        // loop creates an array of up to 6 sounds that are then played at the same time
      }, beats);
      return () => clearInterval(interval);
    }
    resetSquares();
  }, [isPlaying, beats, volNum, counter]);

  const loop = () => {
    let soundArr = [];
    for (let j = 0; j < 7; j++) {
      if (grid[j][counter]) {
        let soundSrc =
          instruments[j].name === 'Bassline'
            ? getBassNote(counter)
            : instruments[j].sound;
        soundArr.push(soundSrc);
      }
      playSounds(soundArr);
    }
  };

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
      />
    );
  });

  const playHead = () => {
    if (isPlaying) {
      return (
        <>
          <td className="instrument" />
          {playHeadArray}
        </>
      );
    } else {
      return (
        <>
          <td className={isPlaying ? 'hidden' : 'instrument'} />
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
      );
    }
  };

  let playHeadComponent = playHead();

  return (
    <div className="container">
      <div className="titleImg">
        <BeatMachine />
        <img
          src="https://www.pngkey.com/png/full/237-2373068_linuxserver-beets-cartoon-beet-png.png"
          alt="beetJuice logo"
          width="200"
          height="200"
        ></img>
      </div>
      <div className="btnGroup">
        <PlayButton onClick={togglePlay} isPlaying={isPlaying} />
        <StopButton onClick={togglePlay} isPlaying={isPlaying} />
      </div>
      <br />
      <div className="volTempo">
        <div className="volStyle">
          <Volume volNum={volNum} onChange={handleVol} />
        </div>
        <div className="tempoStyle">
          <Tempo
            value={tempo}
            onTempoChange={(event) => {
              handleTempoChange(event);
            }}
          />
        </div>
      </div>
      <br />
      <table border="0">
        <tbody>
          {playHeadComponent}
          {instrumentRows}
          <BeatLabel />
        </tbody>
      </table>
    </div>
  );
};

export default App;
