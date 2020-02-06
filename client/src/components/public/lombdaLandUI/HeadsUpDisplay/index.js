import React from "react"
import styled from "styled-components"
//components
import RoomInfo from "./RoomInfo"
import Chat from "../Chat"

const HeadsUpDisplay = props => {
  return (
    <>
      <RoomInfoWrapper>
        <RoomInfo />
      </RoomInfoWrapper>
      <ChatWrapper>
        <Chat />
      </ChatWrapper>
    </>
  )
}
const RoomInfoWrapper = styled.div.attrs(props => ({
  className: "level-item has-background-grey"
}))`
  height: 28vh;
  margin-left: 5vw;
  margin-right: 2rem;
`
const ChatWrapper = styled.div.attrs(props => ({
  className: "level-item has-background-grey"
}))`
  height: 28vh;
  margin-right: 5vw;
  //   margin-left: 2rem;
`
export default HeadsUpDisplay
