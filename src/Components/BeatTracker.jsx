import React, { useEffect } from 'react';
import '../styles/index.css';
import {Howl, Howler} from 'howler';
import BPM from "../helpers/useBPM"
import '../styles/playhead.css';

const BeatTracker = (props) => {
  // let [counter] = props;
  // console.log(counter)
  const beats = BPM();
  const squares = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

 const playHeadArray = squares.map((square) => ( <td key={square} className={square > 0 ? "playhead" : "inactive"}></td> ))

return (
  <>
  <td />
  {playHeadArray}
  </>
)
}


export default BeatTracker;