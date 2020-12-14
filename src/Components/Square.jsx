import React, { useState } from 'react';
import '../styles/index.css';
import { Howl, Howler } from 'howler';
import { getBassNote } from '../helpers/instruments'

const Square = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    if(!toggle) {
      let sound = new Howl({
        src: [(props.name === 'Bassline') ? getBassNote(props.column) : props.sound],
        html5: true,
      });
      sound.play();
      Howler.volume(1);
    }
    // need to pass row, col, toggle back up to the grid in App.js
    props.updateGrid(props.row, props.column, !toggle);
  }

  //TODO: Move in-line styles out of components
  return (
    <td className="tCell"
      style={toggle ? { background: props.color, padding: '25px' } : { background: '#151515', padding: '25px' }}
      onClick={() => handleClick()}
    />
  )
}

export default Square;