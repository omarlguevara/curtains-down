import React, { Fragment } from "react"

const UserProfileComponent = props => {
  return (
    <>
      <img className="profile-pic" src={props.user.profile_photo.url}></img>
      <div className="user-info">
        <h1>{props.user.user_name}</h1>
        <h3>{props.user.email}</h3>
      </div>
    </>
  )
}

export default UserProfileComponent
