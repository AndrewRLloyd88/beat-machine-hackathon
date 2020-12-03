import React from 'react';
import Square from './Square';
import '../styles/index.css';

const generateRandomKey = () => {
  let result = '';
  const characters = '0123456789';
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return parseInt(result);
};

const InstrumentRow = (props) => {

  const squares = [];
  for (let i = 0; i < 16; i++) {
    let key = generateRandomKey()
    squares.push(<Square key={key} row={props.row} column={i} sound={props.instrumentSound} pattern={props.pattern[i]} color={props.instrumentColor} updateGrid={props.updateGrid}/>);
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