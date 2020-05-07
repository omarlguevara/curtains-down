import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import TheatersIndexPane from "../components/TheatersIndexPane"
import NewTheaterFormComponent from "../components/NewTheaterFormComponent"

const TheatersIndexContainer = props => {
  const [user, setUser] = useState({})
  const [theaters, setTheaters] = useState([])

  useEffect(() => {
    fetch("/api/v1/users/:id.json")
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json() )
    .then(user => {
      setUser(user)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  useEffect(() => {
    fetch("/api/v1/theaters.json")
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json() )
    .then(body => {
      setTheaters(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const fetchPostNewTheater = (theaterPayload) => {
    fetch("/api/v1/theaters", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(theaterPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      let theater = body
      setTheaters([
        ...theaters,
        theater
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  let formOrNot = <NewTheaterFormComponent fetchPostNewTheater={fetchPostNewTheater} />
  if (user === null) {
    formOrNot = <div className="sign-in-message"><a href="/users/sign_in">Sign in here to add new theaters to review!</a></div>
  }

  return (
    <div>
      <div id="welcome-box" className="grid-container">
      </div>
      <div className="grid-container theater-index-margin gic">
        <TheatersIndexPane theatersList={theaters} />
        {formOrNot}
      </div>
    </div>
  )
}

export default TheatersIndexContainer
