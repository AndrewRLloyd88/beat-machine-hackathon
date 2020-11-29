import React, { useState } from 'react';
import '../styles/index.css';
import { Howl, Howler } from 'howler';

const Square = (props) => {

  const [toggle, setToggle] = useState(false);

  const playSound = () => {
    setToggle(!toggle);
    var sound = new Howl({
      src: props.sound,
      html5: true,
    });
    sound.play();
    Howler.volume(1);
  }

  return (
    <td
      style={toggle ? { background: 'red', padding: '25px' } : { background: 'blue', padding: '25px' }}
      onClick={() => playSound(props.sound)}
    />
  )
}

export default Square;