import React, {use, useEffect} from 'react'

const Navbar = ({color}) => {
    //case1
    useEffect(() => {
          alert("I run on Every render")
    })

    // case 2
    useEffect(() => {
          alert("I run only once when this component renders")
    }, [])

    // case 3
    useEffect(() => {
        alert("Color is changed to golden brown || I run only when certain value changes")
    }, [color])

    // Example of cleanup function
    useEffect(() => {
        return ()=>{
            alert("Navbar component is unmounted")
        }
    }, [color])
    

  return (
    <div>
      Hello This is navbar of {color} color noob!!!
    </div>
  )
}

export default Navbar
