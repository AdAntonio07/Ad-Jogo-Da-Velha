import styled from 'styled-components'

import GameTitle from '../src/components/gameTitle/GameTitle'
import ChosenPlayer from '../src/components/selectPage/chosenPlayer/ChosenPlayer'
import Container from '../src/components/selectPage/Container'

function SelectPlayer() {
  return (
    <Container>
      <GameTitle />
      <ChosenPlayer />
    </Container>
  )
}

export default SelectPlayer
