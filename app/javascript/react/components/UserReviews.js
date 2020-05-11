import React, { Fragment } from "react"
import ReviewTile from "./ReviewTile"

const UserReviews = props => {
  let allReviews = null
    if (props.reviews.length > 0) {
      allReviews = props.reviews.map((review) => {
        return(
          <ReviewTile
            key={review.id}
            id={review.id}
            rating={review.rating}
            comment={review.comment}
            byCurrentUser={true}
            fetchDeleteReview={props.fetchDeleteReview}
          />
        )
      })
    }

    let rev = "reviews"
    if (props.reviews.length === 1) {
      rev = "review"
    }

    return (
      <>
        <div className="user-reviews">
          <h3>You have written {props.reviews.length} {rev}!</h3>
          {allReviews}
        </div>
      </>
    )
  }

export default UserReviews
