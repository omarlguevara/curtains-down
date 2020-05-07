import React from 'react'

import TheaterIndexTile from './TheaterIndexTile'

const TheatersIndexPane  = props => {
  const theaterTiles = props.theatersList.map(theater => {
     return (<TheaterIndexTile
       key={theater.id}
       theater={theater}
     />)
   })

   return (
     <div className="grid-x grid-margin-x grid-margin-y" id="theater-index-background">
       {theaterTiles}
     </div>
   )
 }

export default TheatersIndexPane
