import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src="https://i.ebayimg.com/images/g/6hsAAOSwMNJd8sZz/s-l1200.jpg" alt="" width={233} style = {{border: "blue"}} />
        <h1>{props.title} </h1>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Card
