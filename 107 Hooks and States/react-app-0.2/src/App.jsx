import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Count is {count}</div>
      <button onClick={()=>{setCount(count + 1)}} >Click to add 1</button>
    </>
  )
}

export default App
