import { Pause } from "lucide-react";
import React, { useRef, useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [paused, setPaused] = useState(false);
  const store = useRef(null);
  const colors = useRef(null);
  const tickSound = useRef(new Audio("/second-hand-149907.mp3"));

  const start = () => {
    clearInterval(store.current);
    store.current = setInterval(() => {
      setValue((prev) => prev + 1);
      colors.current.style.color = "green";
      // restart sound
      tickSound.current.play();
    }, 500);
  };

  const pause = () => {
    if (!paused) {
      clearInterval(store.current);
      store.current = null;
      colors.current.style.color = "orange";
      tickSound.current.pause();
      tickSound.current.currentTime = 0;
    } else {
      start();
    }

    setPaused(!paused);
  };

  const stop = () => {
    clearInterval(store.current);
    setValue(0);
    colors.current.style.color = "red";
    tickSound.current.pause();
    tickSound.current.currentTime = 0;
  };

  return (
    <div className=" justify-center items-center flex-col flex  lg:min-h-screen bg-gray-900  timer-main ">
      <div className="timer-app text-center justify-center items-center flex  flex-col    bg-gray-700/50 backdrop-blur-sm ">
        <h1 className="text-center text-3xl  font-semibold bg-gray-800 ">
          TIMER APP
        </h1>

        <h2
          className="  time-num rounded-full w-33 h-33     shadow-inner border-4 border-gray-700   text-green text-5xl font-bold my-5 bg-white    justify-center items-center flex"
          ref={colors}
        >
          {value}
        </h2>

        <div className="flex gap-3">
          <button
            onClick={start}
            className="bg-green-500 text-black  text-2xl font-bold lg:w-25 lg:h-13 rounded-2xl active:scale-95 border-2 hover:border-white "
          >
            Start
          </button>
          <button
            onClick={pause}
            className="bg-yellow-500 text-black font-bold  lg:w-25 lg:h-13 rounded-2xl active:scale-95 border-2  text-xl  hover:border-white"
          >
            {" "}
            {paused ? "Resume" : "Pause"}
          </button>
          <button
            onClick={stop}
            className="bg-red-500 text-black font-bold w-25 h-13 rounded-2xl active:scale-95 border-2 text-2xl  hover:border-white"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
