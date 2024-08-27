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
  const [currentPlayer, setCurrentPlayer] = useState(-1)

  const HandleClick = (pos) => {
    if (gameState[pos] === 0) {
      let NewGameState = [...gameState]
      NewGameState[pos] = currentPlayer
      setGameState(NewGameState)
      setCurrentPlayer(currentPlayer * -1)
    }
  }

  return (
    <GameContainer>
      <Icon iconName="JogoDaVelha" size="250px" />
      <GamePosition>
        {gameState.map((valeu, pos) => (
          <GameOption key={`game-option-${pos}`} status={valeu} onClick={() => HandleClick(pos)} />
        ))}
      </GamePosition>
    </GameContainer>
  )
}

export default GameLayout
