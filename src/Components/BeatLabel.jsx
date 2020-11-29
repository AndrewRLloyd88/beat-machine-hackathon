import React from 'react';
import '../styles/index.css';

const numbers = [];
  for (let i = 1; i <= 16; i++) {
    numbers.push(<td>{i}</td>);
  }

const BeatLabel = () => {

  return (
    <tr>
      <td></td>  
      {numbers}
    </tr>
  )
}

export default BeatLabel;