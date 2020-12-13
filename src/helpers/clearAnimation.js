  //this function fixes sticking animations in playhead
  export default function clearAnimation () {
    let psquares = document.querySelectorAll('.cycle');
    for (const psquare of psquares) {
      if (psquare.classList.contains('playhead')) {
        psquare.classList.remove('playhead');
        psquare.classList.add('inactive');
      }
    }
  };
