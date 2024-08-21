import GameContainer from '../src/components/game/GameContainer'
import GameHeader from '../src/components/game/gameHeader/GameHeader'
import GameLayout from '../src/components/game/gameLayout/GameLayout'

function GamePage() {
  return (
    <GameContainer>
      <GameHeader />
      <GameLayout />
    </GameContainer>
  )
}

export default GamePage
