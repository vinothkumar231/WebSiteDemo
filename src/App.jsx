import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='tr'>Hello World</h1>
      </div>
      <div>
      <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <h1>Welcome to our project</h1>
      </div>
      <h1 class="gt">Vinoth + Kumar</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
        <a>
          Edit <code>src/App.jsx</code> and save to test HMR
          </a>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
