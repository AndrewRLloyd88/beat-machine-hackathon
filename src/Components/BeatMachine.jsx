import React from 'react';
import '../styles/index.css';
import './PlayButton'
import PlayButton from './PlayButton';
import '../styles/beatMachine.css';


const BeatMachine = () => {

    return(
      <>
        <div className="beatMachineTitle"><span className="beat">Beat</span><span className="juice">Juice</span></div>
        {/* <PlayButton /> */}
      </>
    )
  }

export default BeatMachine;
