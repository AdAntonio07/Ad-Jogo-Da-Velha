import GameContainer from '../src/components/game/GameContainer'
import GameHeader from '../src/components/game/gameHeader/GameHeader'
import GameLayout from '../src/components/game/gameLayout/GameLayout'
function HomePage() {
  return (
    <GameContainer>
      <GameHeader />
      <GameLayout />
    </GameContainer>
  )
}

export default HomePage
