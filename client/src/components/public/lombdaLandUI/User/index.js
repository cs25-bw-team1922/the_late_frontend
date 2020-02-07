import React from "react"
import styled from "styled-components"

const User = props => {
  return (
    <>
      <div className="level" user={props.users}>
        <p>Character Name: {props.user_id}</p>
      </div>
    </>
  )
}

export default User
