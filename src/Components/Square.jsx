import React, { useState } from 'react';
import '../styles/index.css';
import { Howl, Howler } from 'howler';

const Square = (props) => {

  const [toggle, setToggle] = useState(false);

  const playSound = () => {
    setToggle(!toggle);
    var sound = new Howl({
      src: [props.sound],
      html5: true,
    });
    sound.play();
    Howler.volume(1);
    updatePattern()
  }

  function updatePattern(){
    // to update the pattern number
    console.log(props.pattern)
  }

  return (
    <td
      style={toggle ? { background: props.color, padding: '25px' } : { background: '#151515', padding: '25px' }}
      onClick={() => playSound(props.sound)}
    />
  )
}

export default Square;