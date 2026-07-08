import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //useRef hook usecase 1:
  // const a = useRef(0)

  // useEffect(() => {
  //   a.current = a.current + 1
  //   console.log(`The value of a is ${a.current}`)
  // })

  //usecase 2: accessing any DOM element
    const btn_Ref = useRef()

  useEffect(() => { 
    console.log(`First rendering..`) 
    btn_Ref.current.style.backgroundColor = "red"
  }, []);


  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          ref={btn_Ref}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;
