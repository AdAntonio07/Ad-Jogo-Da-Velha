import styled from 'styled-components'
import Button from '../../button/Button'

const GameProximo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 170px;
`

const H4 = styled.h2`
  font-size: 25px;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.purple};
`

function GameInfo({ currentPlay, player1, player2 }) {
  return (
    <GameProximo>
      <>
        <H4>Proximo a Jogar</H4>
        {currentPlay === 1 && player1}
        {currentPlay === -1 && player2}
      </>

      <Button sizew="100">Reniciar</Button>
    </GameProximo>
  )
}

export default GameInfo
