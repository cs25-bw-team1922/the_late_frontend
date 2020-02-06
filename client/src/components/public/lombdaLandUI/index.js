import React from "react"
import styled from "styled-components"
// components
import HeadsUpDisplay from "./HeadsUpDisplay"

export const LombdaLandUI = props => {
  return (
    <>
      <div>header w/ nav once api running</div>
      <div className="container">
        <MainView>
          <div className="level">lombda land</div>
          <div class="level">
            <MapPortalWrapper>map</MapPortalWrapper>
            <UserStatsWrapper>user stats</UserStatsWrapper>
          </div>
          <HeadsUpWrapper>
            <HeadsUpDisplay />
          </HeadsUpWrapper>
        </MainView>
      </div>
    </>
  )
}

const MainView = styled.div.attrs(props => ({
  className: "container"
}))`
  height: 90vh;
  background-color: black;
`
const MapPortalWrapper = styled.div.attrs(props => ({
  className: "level-item"
}))`
  height: 40vh;
  background-color: white;
  margin-left: 5vw;
  padding: 5rem;
`
const UserStatsWrapper = styled.div.attrs(props => ({
  className: "level-item"
}))`
  height: 32vh;
  background-color: white;
  margin-right: 5vw;
  margin-left: 2rem;
`
const HeadsUpWrapper = styled.div.attrs(props => ({
  className: "level"
}))``
