import React, {useState} from 'react';
import Square from './Square';
import '../styles/index.css';


const InstrumentRow = (props) => {
<<<<<<< HEAD

  
  console.log("at instrument row")
  console.log(props.pattern)
=======
  // console.log(props.pattern)
>>>>>>> aa33ffba814fa47c9e05225ba606fcd7ac441e92
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