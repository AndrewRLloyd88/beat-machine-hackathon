import React, {useState} from 'react';
import Square from './Square';
import '../styles/index.css';


const InstrumentRow = (props) => {
  // console.log(props.pattern)
  const squares = [];
  for (let i = 0; i < 16; i++) {
    squares.push(<Square key={i} sound={props.instrumentSound} pattern={props.pattern[i]} color={props.instrumentColor} />);
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