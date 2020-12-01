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

  // let playHeadArray = squares.map((square) => ( <td key={square} className={square > 0 ? "playhead" : "inactive"}></td> ))
  // console.log("playHeadArray: ", playHeadArray)

  const generateSquares = () => {
    const playHeadArray = []
  squares[animCount] = 1
while(isPlaying){
for (let i = 0; i < 16; i++){
playHeadArray.push(squares[i]=<td key={i} className={squares[animCount] > 0 ? "playhead" : "inactive"}></td>)
}
}
return playHeadArray;
  }

 const playHeadLoop = () => {
   //make a shallow copy of the pattern
   let pattern = [...squares]
  //make a shallow copy of the mutable object
   let position = squares[animCount]
   //replace the 0 with a 1
    position = 1;
  pattern[animCount] = position
  setSquares(pattern)
  console.log(squares)
 }


      //  let slicePlayHead = (squares.slice(0, 15).map((square) => ( <td key={square} className={square > 0 ? "playhead" : "inactive"}></td> )))


 useEffect(() => {
  if(isPlaying){
    const interval = setInterval(() => {
      animCount = animCount >= 15 ? 0 : animCount + 1  
      playHeadLoop()  
      console.log("in useEffect: ", animCount);
    }, beats);
    return () => clearInterval(interval)
  }
}, [isPlaying, beats])

return (
  <>
    {/* <td /> */}
    {generateSquares}
  {() => {generateSquares()}}
  </>
)

//  return isPlaying ?
//  (
//   <>
//   <td />
//   {() => {playHeadLoop()}}
//   </>
// )
 
//  : (
//   <>
//   <td />
//   {playHeadArray}
//   </>
// )
}


export default BeatTracker;