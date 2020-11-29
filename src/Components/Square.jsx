import React, { useState } from 'react';
import '../styles/index.css';

const Square = () => { 


  const [toggle, setToggle] = useState(false);

    return(
      
        <td
          style={toggle ? {background: 'red', padding: '25px'} : {background: 'blue', padding: '25px'}}
          onClick={() => setToggle(!toggle)}
        />
              
    )
  }

export default Square;