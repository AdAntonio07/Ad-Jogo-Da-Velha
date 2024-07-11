import styled from 'styled-components'

import GameTitle from '../src/components/gameTitle/GameTitle'
import ChosenPlayer from '../src/components/selectPage/chosenPlayer/ChosenPlayer'
import ChoosePlayer from '../src/components/selectPage/choosePlayer/ChoosePlayer'
import PlayerIcon from '../src/components/selectPage/playerIcon/PlayerIcon'

import Container from '../src/components/selectPage/Container'

const StyledGameTitle = styled.div``

function SelectPlayer() {
  return (
    <Container>
      <StyledGameTitle>
        <GameTitle />
      </StyledGameTitle>
      <ChosenPlayer />
      <ChoosePlayer />
      <PlayerIcon />
    </Container>
  )
}

export default SelectPlayer
