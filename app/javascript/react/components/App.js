import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"


import TheatersIndexContainer from "../containers/TheatersIndexContainer"
import TheatersShowContainer from "../containers/TheatersShowContainer"
import UserShowContainer from "../containers/UserShowContainer"
console.log(process.env.REACT_APP_GOOGLE_API_KEY)

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/theaters" component={TheatersIndexContainer} />
        <Route exact path="/theaters/:id" component={TheatersShowContainer} />
        <Route exact path="/users/:id" component={UserShowContainer} />
        <Route exact path="/" component={TheatersIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
