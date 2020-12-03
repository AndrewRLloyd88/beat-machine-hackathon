import React from 'react';
import Square from './Square';
import '../styles/index.css';

const InstrumentRow = (props) => {

  const squares = [];
  for (let i = 0; i < 16; i++) {
    squares.push(<Square key={i + props.row} row={props.row} column={i} sound={props.instrumentSound} pattern={props.pattern[i]} color={props.instrumentColor} name={props.instrumentName} updateGrid={props.updateGrid}/>);
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