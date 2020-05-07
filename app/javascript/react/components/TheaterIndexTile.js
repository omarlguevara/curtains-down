import React from "react"
import { Link } from 'react-router-dom'

const TheaterIndexTile = props => {
  const id = props.theater.id

  let src
  if(props.theater.image) {
    src = props.theater.image
  } else {
    src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stateandbijou.org%2Fabout%2Fstatetheatre&psig=AOvVaw37KJNi0mplpshLndTyoeZ-&ust=1588855351768000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLC1me2hn-kCFQAAAAAdAAAAABAD"
  }

  return (
    <Link to={`theaters/${id}`} className="cell small-4 theater-tile">
    <div className="small-12">
    <div className="container">
     <img src={src}></img>
    </div>
     <h4>{props.theater.title}</h4>
    </div>
    </Link>
  )
}

export default TheaterIndexTile
