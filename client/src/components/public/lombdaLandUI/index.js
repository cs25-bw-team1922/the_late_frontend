import React, { useState } from "react"
import styled from "styled-components"
// components
import HeadsUpDisplay from "./HeadsUpDisplay/index"
import Map from "./Map"
import User from "./User"

// dummy data
const rooms = [
  {
    id: 0,
    room_name: "Entrance",
    room_description:
      "looks like you'll be walking through a ivy covered doorway",
    room_entrance: "north",
    room_exit: "north"
  }
]
const items = [
  {
    item_id: 0,
    item_name: "book",
    item_description: "an old dusty hardback",
    item_hacker_level: 5,
    item_health: 3.0,
    item_power: 1,
    item_damage: 1.0
  }
]
const dummyusers = [
  {
    user_id: 0,
    first_name: "Tommy",
    last_name: "Thompson",
    user_name: "TThomp23",
    password: "pass123",
    email: "tthomp23@gmail.com",
    characters: [
      {
        char_id: 0,
        char_name: "Arthur",
        char_description: "The Knight",
        char_action: "dash",
        char_direction: "north",
        char_speaks: "I am the Knight!",
        char_hacker_rank: 5,
        char_health: 3.0,
        char_lives: 3,
        char_save_stats: "TRUE"
      }
    ]
  }
]
export const LombdaLandUI = props => {
  const [userStats, setUserStats] = useState(dummyusers)
  console.log(userStats)

  return (
    <>
      <div>header w/ nav once api running</div>
      <div className="container">
        <MainView>
          <div className="level">lombda land</div>
          <div className="level">
            <MapPortalWrapper>
              <Map />
            </MapPortalWrapper>
            <UserStatsWrapper>
              {userStats.map(character => {
                console.log(
                  `character.characters`,
                  character.characters[0].char_id
                )
                return (
                  <User
                    key={character.user_id}
                    first_name={character.first_name}
                    char_name={character.characters[0].char_name}
                    char_description={character.characters[0].char_description}
                    char_health={character.characters[0].char_health}
                    char_hacker_rank={character.characters[0].char_hacker_rank}
                  />
                )
              })}
            </UserStatsWrapper>
          </div>
          <HeadsUpWrapper>
            {rooms.map(room => {
              console.log(`room:`, room)
              return (
                <HeadsUpDisplay
                  key={room.id}
                  room_name={room.room_name}
                  room_description={room.room_description}
                  room_entrance={room.room_entrance}
                  room_exit={room.room_exit}
                />
              )
            })}
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
