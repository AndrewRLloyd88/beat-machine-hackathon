import React, { useState } from 'react';
import '../styles/index.css';

const Tempo = () => {

  const [tempo, setTempo] = useState(60);

  return (
    <div>
      <label>Tempo</label>
      <input
        label='Tempo'
        type='number'
        min='40'
        max='240'
        value={tempo}
        onChange={(event) => setTempo(event.value)}
      />
    </div>

  )
}

export default Tempo;