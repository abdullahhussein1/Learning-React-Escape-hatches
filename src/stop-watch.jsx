import { useState } from "react";
import useRef from "./hooks/useRef";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <p className="flex w-44 items-center justify-center rounded-3xl border bg-gray-50 py-3 text-5xl font-semibold">
        {secondsPassed.toFixed(3)}
      </p>
      <div className="flex w-44 justify-between gap-2">
        <button
          onClick={handleStart}
          className="flex-1 rounded-xl border border-green-200 bg-green-50 px-3 py-1 transition-all hover:text-green-700 active:scale-90"
        >
          start
        </button>
        <button
          onClick={handleStop}
          className="flex-1 rounded-xl border border-pink-200 bg-pink-50 px-3 py-1 transition-all hover:text-pink-700 active:scale-90"
        >
          stop
        </button>
      </div>
    </div>
  );
}
