import styled from 'styled-components'

import GameTitle from '../src/components/gameTitle/GameTitle'
import ChosenPlayer from '../src/components/selectPage/chosenPlayer/ChosenPlayer'
import ChoosePlayer from '../src/components/selectPage/choosePlayer/ChoosePlayer'
import PlayerIcon from '../src/components/selectPage/playerIcon/PlayerIcon'
import Button from '../src/components/button/Button'

import Container from '../src/components/selectPage/Container'

const SyteledAligh = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

function SelectPlayer() {
  return (
    <Container>
      <SyteledAligh>
        <GameTitle />
        <ChosenPlayer />
        <ChoosePlayer />
        <PlayerIcon />
        <Button>Jogar</Button>
      </SyteledAligh>
    </Container>
  )
}

export default SelectPlayer
