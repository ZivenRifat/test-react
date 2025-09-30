import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-neutral-800 flex flex-col items-center justify-center text-center">
        {/* Container logo + title */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-24 h-24 animate-spin" 
            alt="React logo"
            style={{ animationDuration: "0.3s" }}
            />
          </a>
        </div>

          <h1 className="text-6xl font-extrabold text-center text-white mb-16">
            Vite + React
          </h1>

        {/* Subtitle */}
        <h3 className="text-center font-semibold text-xl mb-4 mt-4 text-white">
          Ziven Rifat
        </h3>

        {/* Card */}
        <div className="card text-center space-y-6 rb-8">
          <button
            className="px-6 py-2 text-lg bg-neutral-900 hover:bg-neutral-700 text-white rounded-lg transition"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-neutral-400">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs mt-4 text-neutral-500 flex items-center justify-center">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
