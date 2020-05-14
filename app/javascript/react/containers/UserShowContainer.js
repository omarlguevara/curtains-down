import React, { useState, useEffect, Fragment } from 'react'
import UserProfileComponent from "./../components/UserProfileComponent"
import UserReviews from "./../components/UserReviews"
import GoogleMap from "./../components/GoogleMap"
import SearchBox from "./../components/SearchBox"

const UserShowContainer = (props) => {

  const defaultUserData = {
    email: "",
    user_name: "",
    profile_photo: {}
  }

  const [reviews, setReviews] = useState([])
  const [user, setUser] = useState(defaultUserData)

  let userId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/users/${userId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(user => {
      setUser(user)
      setReviews(user.reviews)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const fetchDeleteReview = (reviewId) => {
    fetch(`/api/v1/reviews/${reviewId}`, {
      credentials: "same-origin",
      method: "DELETE",
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
    .then(theater => {
      let newReviewList = reviews.filter((item) => {
        const keepReview = (item.id !== reviewId)
        return keepReview
      })
      setReviews(newReviewList)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return (
    <>
    <div className="grid-container">
      <div className="grid-x">
      <div className="cell small-6">
      <UserProfileComponent user={user} />
      </div>
      <div className="cell small-6">
      <UserReviews reviews={reviews} fetchDeleteReview={fetchDeleteReview} />
      </div>
      </div>
      <div className="map-container">
      <GoogleMap>
      <SearchBox/>
      </GoogleMap>
      </div>
      </div>
    </>
  )
}

export default UserShowContainer
