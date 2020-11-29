import React from 'react';
import Square from './Square';
import '../styles/index.css';

const squares = [];
  for (let i = 0; i < 16; i++) {
    squares.push(<Square key={i}/>);
  }  

const InstrumentRow = () => {

    return(      
        <tr>
          {squares}
        </tr>      
    )
  }

export default InstrumentRow;