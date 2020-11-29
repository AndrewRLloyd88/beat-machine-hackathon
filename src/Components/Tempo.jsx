import React, { useState } from 'react';
import '../styles/index.css';

const Tempo = (props) => {
console.log("in tempo: ", props)

  return (
    <div>
      <label>Tempo</label>
      <input
        label='Tempo'
        type='number'
        min='40'
        max='240'
        value={props.value}
        onChange={props.onTempoChange}
      />
    </div>

  )
}

export default Tempo;