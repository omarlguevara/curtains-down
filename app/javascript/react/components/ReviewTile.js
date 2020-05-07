import React from "react"

const ReviewTile = (props) => {
  let reviewID = props.id

  const onClickHandler = (event) => {
    event.preventDefault()
    props.fetchDeleteReview(reviewID)
  }
  let deleteButton
  if (props.allowDeletion) {
    deleteButton = (<input
      className="button"
      type="button"
      value="delete"
      onClick={onClickHandler}
    />)
  }
  return (
    <div className="review-tile">
      <h4><span>{props.reviewUserName}: </span> {props.rating}/5</h4>
      <p>{props.comment}</p>
      {deleteButton}
    </div>
  )
}
export default ReviewTile
