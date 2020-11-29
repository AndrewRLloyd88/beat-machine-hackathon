import React from 'react';
import './styles/index.css';
import BeatMachine from "./Components/BeatMachine"
import InstrumentRow from './Components/InstrumentRow';
import Bpm from "./helpers/useBPM"
import BeatTracker from "./Components/BeatTracker"
import BeatLabel from "./Components/BeatLabel"
import Tempo from "./Components/Tempo"
import instruments from "./helpers/instruments"

const App = () => {

  const instrumentRows = instruments.map((i) => <InstrumentRow instrumentName={i.name} instrumentSound={i.sound} />);
  return (
    <>
      <BeatMachine />
      <Tempo />
      <table border='0'>
        <tbody>
          <BeatTracker />
          {instrumentRows}
          <BeatLabel />
        </tbody>
      </table>
    </>
  )
}

export default App;
