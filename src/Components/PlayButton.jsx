import React, { useEffect } from 'react';
import '../styles/index.css';
import {Howl, Howler} from 'howler';

const PlayButton = (props) => {

    return(
      <>
        <button onClick={props.onClick}>Play</button>
      </>
    )
  }

export default PlayButton;