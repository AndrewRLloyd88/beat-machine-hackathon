import React, { useState } from 'react';
import '../styles/index.css';
import { Howl, Howler } from 'howler';

const Square = (props) => {
  // console.log('props in Square: ', props)


  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    // setToggle(!toggle) seems to change the color but it does not update in state??
    setToggle(!toggle);
    if(!toggle) {
      let sound = new Howl({
        src: [props.sound],
        html5: true,
      });
      sound.play();
      Howler.volume(1);
    }
    // need to pass row, col, toggle back up to the grid in App.js, but for some reason toggle needs to be flipped again???
    props.updateGrid(props.row, props.column, !toggle);
  }

  return (
    <td
      style={toggle ? { background: props.color, padding: '25px' } : { background: '#151515', padding: '25px' }}
      onClick={() => handleClick()}
    />
  )
}

export default Square;