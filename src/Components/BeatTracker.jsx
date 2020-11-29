import React, { useEffect } from 'react';
import '../styles/index.css';
import {Howl, Howler} from 'howler';
import BPM from "../helpers/useBPM"
import '../styles/playhead.css';

const BeatTracker = () => {
  const beats = BPM();
<<<<<<< HEAD
  const squares = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
=======
  const squares = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
>>>>>>> master

 const playHeadArray = squares.map((square) => ( <td key={square} className={square > 0 ? "playhead" : "inactive"}></td> ))

return (
  <>
  <td />
  {playHeadArray}
  </>
)
}


export default BeatTracker;