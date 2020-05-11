import React from 'react'

const TheatersShowComponent = ({theater}) => {
  const { title, image, description, genre,
    site, } = theater

   return (
     <>
     <div className="showTitle">
       <h3>{title}</h3>
     </div>
     <div className="showImage">
     <img src={image}></img>
     </div>
     <div>
       <ul className="showText">
         <li>Description: {description}</li>
           <li>Genre: {genre}</li>
         <li>Site: <a href={site}>{site}</a></li>
       </ul>
     </div>
     </>
   )
 }

export default TheatersShowComponent
