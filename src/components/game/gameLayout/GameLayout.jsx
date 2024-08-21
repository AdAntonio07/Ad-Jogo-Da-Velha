import styled from 'styled-components'

import GameOption from '../gameOption/GameOption'
import Icon from '../../icon/Icon'

const GamePosition = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 150px;
  position: absolute;
`

function GameLayout() {
  return (
    <>
      <Icon iconName="JogoDaVelha" size="250px" />
      <GamePosition>
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
      </GamePosition>
    </>
  )
}

export default GameLayout
