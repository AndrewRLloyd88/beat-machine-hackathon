import React from 'react';

export default class Inst extends React.Component {

    state = {
        instruments: [
            {
                name : "clap",
                sound : "./DrumSamples/Claps/Clap1.wav",
                pattern: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: 'pink'
            },
            {
                name : "hi hat (open)",
                sound : "./DrumSamples/OpenHats/OH2.wav",
                pattern: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: 'silver'
            },
            {
                name : "hi hat (closed)",
                sound : "./DrumSamples/ClosedHats/Hats1.wav",
                pattern: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: 'gold'
            },
            {
                name: 'snare 2',
                sound: "./DrumSamples/AltSnare1/AltSD25.wav",
                pattern: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                color: '#00DACD' 
            },
            {
                name: 'snare 1', 
                sound: "./DrumSamples/MainSnare/Snare1.wav", 
                pattern: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                color: 'orange'
            },
            {
                name: 'kick', 
                sound: "./DrumSamples/Kicks/Kick-A-Long1.wav", 
                pattern: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0], 
                color: 'purple'
            }
        ]
      };
    
    }

//   let instruments = [
//     { name: 'clap', sound: "./DrumSamples/Claps/Clap1.wav", pattern: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], color: 'pink' },
//     { name: 'hi hat (open)', sound: "./DrumSamples/OpenHats/OH2.wav", pattern: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], color: 'silver' },
//     { name: 'hi hat (closed)', sound: "./DrumSamples/ClosedHats/Hats1.wav", pattern: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], color: 'gold' },
//     { name: 'snare 2', sound: "./DrumSamples/AltSnare1/AltSD25.wav", pattern: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], color: '#00DACD' },
//     { name: 'snare 1', sound: "./DrumSamples/MainSnare/Snare1.wav", pattern: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], color: 'orange' },
//     { name: 'kick', sound: "./DrumSamples/Kicks/Kick-A-Long1.wav", pattern: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0], color: 'purple' }
//   ]