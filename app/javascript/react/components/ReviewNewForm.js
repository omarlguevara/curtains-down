import React, { useState } from "react"
import _ from 'lodash'
import ErrorList from "../components/ErrorList"

const ReviewNewForm = (props) => {
  const [errors, setErrors] = useState({})
  let [formPayload, setFormPayload] = useState({
    rating: "",
    comment: "",
    theater_id: props.theaterID
  })

  const update = (event) => {
    event.preventDefault()
    setFormPayload({
      ...formPayload,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setFormPayload({
      rating: "",
      comment: "",
      theater_id: props.theaterID
    })
    setErrors({})
  }

  const formSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()){
      props.fetchPostNewReview(formPayload)
      clearForm()
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}
    let ratingErrors = ""

    const rating = parseFloat(formPayload.rating)

    if ((formPayload.rating < 1 || formPayload.rating > 5) || isNaN(rating)) {
      ratingErrors = "must be a number between 1 and 5"
      submitErrors = {
        ...submitErrors,
        rating: ratingErrors
      }
    }

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  return (
    <form onSubmit={formSubmit}>
    <ErrorList errors={errors}/>

    <label htmlFor="rating">
     Rating
        <input
        id="rating"
        name="rating"
        type="text"
        onChange={update}
        value={formPayload.rating}
        />
    </label>

    <label htmlFor="comment">
     Comment
        <input
        id="comment"
        name="comment"
        type="text"
        onChange={update}
        value={formPayload.comment}
        />
    </label>

    <input className="button" type="submit" value="Submit" />
    </form>
  )
}

export default ReviewNewForm
