import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState(0)

  // useEffect(() => {
  //      alert("Welcome to the page , buddy!!!!") //------> triggers when the page mount or loaded and nothing changes
                                                      //--> runs only once
  // }, [])

  useEffect(() => {
        alert(`count is changed to ${count}`)  //----> triggers when count changes
        
        setcolor(color + 1)
  }, [count])


  return (

    <>
    {/* <Navbar color = {"golden" + "brown" + color}/> */}
      <section id="center">
        
        
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

     
    </>
  )
}

export default App
