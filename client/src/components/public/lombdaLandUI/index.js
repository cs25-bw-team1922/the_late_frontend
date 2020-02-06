import React from "react"
import styled from "styled-components"

export const LombdaLandUI = props => {
  return (
    <>
      <div>header w/ nav once api running</div>
      <div className="container">
        <MainView>
          <MapPortal />
        </MainView>
      </div>
    </>
  )
}

const MainView = styled.div`
  height: 90vh;
  width: 90vw;
  background-color: black;
  margin: 0 auto;
`
const MapPortal = styled.div`
  height: 40vh;
  width: 80vw;
  background-color: white;
  position: absolute;
  top: 4rem;
  left: 10vw;
`
