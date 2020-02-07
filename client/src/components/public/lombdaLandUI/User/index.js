import React from "react"
import styled from "styled-components"

const User = props => {
  console.log(`user component:`, props)

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            Hello {props.first_name}, welcome to Lombda Land
          </div>
          <div className="card-content">
            <p className="level">Character Name: {props.char_name}</p>
            {/* Need to think about how we will implement health changes */}
            <p className="level">Current Health: {props.char_health}</p>
            <p className="level">Hacker Rank: {props.char_hacker_rank}</p>
            <p className="level">Character Bio: {props.char_description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default User
