import React, { useEffect } from 'react';
import './styles/index.css';
import {Howl, Howler} from 'howler';
import SimpleCard from './components/Columns'
import BeatMachine from "./Components/BeatMachine"
// import airplane from './assets/airplane-landing_daniel_simion.mp3';



// let path = './assets/airplane-landing_daniel_simion.mp3';

// audioPlayer = (
  //             <div className="count-number-equivelance-audioPlayer">
  //                 <button id="equivalence-audio-button" onClick={() => audio.play()}>Soundclip!</button>
  //             </div>
  //         ); 
  
// let audio = new Audio(airplane);

const App = () => {
  
  // useEffect(() => {
  //   audio.load();
  // }, []);


  const playSound = () => {
    console.log("clicked")
    var sound = new Howl({
      src: ["airplane-landing_daniel_simion.mp3"],
      html5: true,
    });
    
    sound.play();
    console.log(sound);
    Howler.volume(1);
  }
  
  // This sound file may not work due to cross-origin setting

    return(
      <>
      <BeatMachine />
        <h1>Hello World, Let's try a pull request!</h1>
        <button onClick={playSound}>press</button>
        <SimpleCard/>
      </>
    )
  }

export default App;
