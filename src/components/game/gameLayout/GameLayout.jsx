import { useState } from 'react'

import styled from 'styled-components'

import GameOption from '../gameOption/GameOption'
import Icon from '../../icon/Icon'

const GamePosition = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: -233px 19px;
  position: absolute;
`
const GameContainer = styled.div`
  max-width: 250px;
  height: 250px;
`

function GameLayout() {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  console.log(gameState)

  return (
    <GameContainer>
      <Icon iconName="JogoDaVelha" size="250px" />
      <GamePosition>
        {gameState.map((valeu, pos) => (
          <GameOption key={`game-option-${pos}`} status={valeu} />
        ))}
      </GamePosition>
    </GameContainer>
  )
}

export default GameLayout
