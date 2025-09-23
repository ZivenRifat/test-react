import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Container logo + title */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
        </a>
        <h1 className="text-4xl font-extrabold text-center">Vite + React</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-16 h-16" alt="React logo" />
        </a>
      </div>

      {/* Subtitle */}
      <h3 className="text-center font-semibold text-lg mb-4">Ziven Rifat</h3>

      {/* Card */}
      <div className="card text-center">
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-2">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs mt-4 text-gray-600">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
