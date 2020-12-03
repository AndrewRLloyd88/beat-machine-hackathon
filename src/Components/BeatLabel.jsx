import React from 'react';
import '../styles/index.css';

const quarterBeatLabels = [];
for (let i = 1; i <= 16; i++) {
  quarterBeatLabels.push(<td key={i}>{i}</td>);
}

const beatLabels = [];
let b = 1;
for (let i = 1; i <= 16; i++) {

  if((i - 1) % 4 === 0) {
    beatLabels.push(<td key={i} className='instrument'>{b}</td>);
    b++;
  } else {
    beatLabels.push(<td key={i} className='instrument'></td>);
  }
}

const BeatLabel = () => {

  return (
    <>
      
      <tr>
      <td className='instrument'></td>  
        {beatLabels}
      </tr>
    </>
  )
}

export default BeatLabel;