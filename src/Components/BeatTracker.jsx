import React, { useEffect } from 'react';
import '../styles/index.css';
import {Howl, Howler} from 'howler';
import BPM from "../helpers/useBPM"
import '../styles/playhead.css';

const BeatTracker = () => {
  const beats = BPM();
  const squares = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];

 const playHeadArray = squares.map((square) => ( <td key={square} className={square > 0 ? "playhead" : "inactive"}></td> ))

return playHeadArray;
}


export default BeatTracker;