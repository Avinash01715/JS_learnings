import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Showbtn, setShowbtn] = useState(false)
   const [lists, setLists] = useState([
    {
      title: "Cat",
      desc: "Cat is an animal"
    },
    {
      title: "Dog",
      desc: "Dog is an animal too"
    },
    {
      title: "Ant",
      desc: "Ant is an insect"
    },

  ])


//component:
  //  const List = ({list}) => {
  //   return (<>
  //   <div className="m-4 border border-purple-400">

  //     <div className="list">{list.title}</div>
  //     <div className="list">{list.desc}</div>
  //   </div>
  //     </>)
  // }

  return (
    <>
      <section id="center" className=" text-amber-300 flex justify-center">
        
        <button
          type="button"
          className="counter border-2 p-4 bg-black"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        
      </section>
      <div className=" flex justify-center text-blue-900 border-blue-950">
        {/* ternary operation if-else condition */}

        {/* {Showbtn?<button className='bg-amber-600'>I will be shown when new button is clicked</button>:"Nothing"} */}
       
        {Showbtn && <button className='bg-amber-600'>I will be shown when new button is clicked</button>}
      </div>
      <div className='flex justify-center text-blue-900 border-blue-950 '>
         <button onClick={()=>{setShowbtn(!Showbtn)}} className="bg-cyan-300 " >new</button>
      </div>

        {lists.map(list => {
              //  return <List key={list.title} list={list}/>
              //or
               return (<>
    <div key={list.title} className="m-4 border border-purple-400">

      <div className="list">{list.title}</div>
      <div className="list">{list.desc}</div>
    </div>
      </>)
        })}
      

      
      
    </>
  )
}

export default App
