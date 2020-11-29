import React, { useState } from "react";

export default function useBPM(defaultBPM) {
  const [bpm, setBpm] = useState(120);

  return bpm;
}