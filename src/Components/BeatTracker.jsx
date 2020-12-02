import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import {Howl, Howler} from 'howler';
import BPM from "../helpers/useBPM"
import '../styles/playhead.css';

const BeatTracker = (props) => {
  const {isPlaying, tempo} = props;
  const beats = BPM(tempo);
  let [animCount, setAnimCount] = useState(0)
  const [squares, setSquares] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [playHeadArray, setPlayHeadArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  // const generateSquares = () => {
  // setPlayHeadArray(squares.map((square, i) => ( <td key={square} id={i} className={square > 0 ? "playhead" : "inactive"}></td> )))
  // return playHeadArray
  // }

// const setDumbSquares = squares.map((square) => ( <td key={square} className={square > 0 ? "playhead" : "inactive"}></td> ))


//helper function that gets the previous square (to remove classes)
const getPreviousSquare = () => {
if(animCount === 0){
  return document.getElementById('15')
} else {
  return document.getElementById(`${animCount - 1}`)
}
}

//gets index position and assigns that to setSquares
 const playHeadLoop = () => {
   //make a shallow copy of the pattern
   let pattern = [...squares]
  //make a shallow copy of the mutable object
   let position = squares[animCount]
   //replace the 0 with a 1
    position = 1;
  pattern[animCount] = position
  setSquares(pattern)
  //get the square to animate
  let squareToAnimate = document.getElementById(`${animCount}`)
  //find previousSquare
  let previousSquare = getPreviousSquare()
  //distribute classes as needed
  previousSquare.classList.remove('playead')
  previousSquare.classList.add('inactive')
  squareToAnimate.classList.remove('inactive')
  squareToAnimate.classList.add('playhead')
 }

 //resets the state of the playhead
const resetSquares = () => {
  setAnimCount(0)
  setSquares([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    setPlayHeadArray(squares.map((square, i) => ( <td key={square} id={i} className={square > 0 ? "playhead" : "inactive"}></td> )))
}
//handling page re-renders
 useEffect(() => {
  if(isPlaying){
    const interval = setInterval(() => {
      playHeadLoop()  
      //resetSquares() makes the playHead clear after each pass
      resetSquares()
      animCount = animCount >= 15 ? 0 : animCount + 1  
    }, beats);
    return () => clearInterval(interval)
  } else {
    resetSquares()
  }
}, [isPlaying, beats])

//mocking <tds> and hiding them was the only way I could work around the map
return isPlaying ? 
(
  <>
  <td />
    {playHeadArray}
  </>
)
: (
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
export default BeatTracker;
