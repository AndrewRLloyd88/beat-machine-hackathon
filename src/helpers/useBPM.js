// returns the length of time in milliseconds for a sixteenth note 
//(i.e. the smallest division in the beat machine - one square of time)
export default function useBPM(bpm) {
  return bpm / 60 / 4 * 1000;
}