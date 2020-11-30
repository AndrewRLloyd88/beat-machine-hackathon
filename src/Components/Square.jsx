import React from 'react';
import '../styles/index.css';

const Square = (props) => {


  return (
    <td
      style={props.toggle ? { background: props.color, padding: '25px' } : { background: '#151515', padding: '25px' }}
      changeAttr={props.changeAttr} onClick={props.onClick}
    />
  )
}

export default Square;