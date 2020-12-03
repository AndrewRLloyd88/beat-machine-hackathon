import React, { useState } from 'react';
import '../styles/index.css';

const Tempo = (props) => {

  return (
    <div>
      <label className="temStyle">Tem<span className="poStyle">po</span></label>
      <input
        className="tempoBorder"
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