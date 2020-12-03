// objects to represent each instrument
export const instruments = [
  { name: 'clap', sound: "./DrumSamples/Claps/Clap1.wav", pattern: {0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false }, color: 'pink' },
  { name: 'hi hat (open)', sound: "./DrumSamples/OpenHats/OH2.wav", pattern: {0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false }, color: 'silver' },
  { name: 'hi hat (closed)', sound: "./DrumSamples/ClosedHats/Hats1.wav", pattern: {0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false }, color: 'gold' },
  { name: 'snare 2', sound: "./DrumSamples/AltSnare1/AltSD25.wav", pattern: {0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false }, color: '#00DACD' },
  { name: 'snare 1', sound: "./DrumSamples/MainSnare/Snare1.wav", pattern: {0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false },color: 'orange' },
  { name: 'kick', sound: "./DrumSamples/Kicks/Kick-A-Long1.wav", pattern: {0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false }, color: 'purple' },
  { name: 'bass', sound: "./BassSamples/High-E-bass-16th.wav", pattern: {0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false }, color: 'blue' }
]

 // returns different sound pointer depending on the position of the counter on the grid
 export function getBassNote(position) {
  if(position >= 14) {
    return "./BassSamples/E-Bass-16th.wav";  
  }
  if(position >= 12){
    return "./BassSamples/E-Bass-16th.wav";
  }
  if(position >= 10){
    return "./BassSamples/E-Bass-16th.wav";
  }
  if(position >= 8){
    return "./BassSamples/EBassNote.wav"; // louder  

  }
  if(position >= 6) {
    return "./BassSamples/EBassNote.wav";   
  }
  if(position >= 4){
    return "./BassSamples/EBassNote.wav";   

  }
  if(position >= 2){
    return "./BassSamples/EBassNote.wav";   
  }
  if(position >= 0){
    return "./BassSamples/EBassNote.wav";  
  }
  return "./BassSamples/E-Synth-Note.wav";
}