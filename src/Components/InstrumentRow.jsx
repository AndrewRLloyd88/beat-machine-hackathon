import React, { useState } from 'react';
import Square from './Square';
import '../styles/index.css';
import { Howl, Howler } from 'howler';


const InstrumentRow = (props) => {


  const [toggle, setToggle] = useState(false);
  const changeAttr = (i) => { 
    if (toggle){
      props.pattern[i]=1
    } else{
      props.pattern[i]=0
    }
  }
    const playSound = () => {
      setToggle(!toggle);
      var sound = new Howl({
        src: [props.sound],
        html5: true,
      });
      sound.play();
      Howler.volume(1);
    }

  const squares = [];
  for (let i = 0; i < 16; i++) {
    squares.push(<Square key={i} sound={props.instrumentSound} color={props.instrumentColor} toggle={toggle} changeAttr={changeAttr} onClick={() => playSound(props.sound)}/>);
  }
  return (
    <tr>
      <td className="instrument">
        {props.instrumentName}
      </td>
      {squares}
    </tr>
  )
}

export default InstrumentRow;