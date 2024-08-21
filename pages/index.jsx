import Container from '../src/components/container/Container'

import Header from '../src/components/header/Header'
import SelectPlayer from '../src/components/selectPage/selectPlayer/SelectPlayer'
//import GameLayout from '../src/components/game/gameLayout/GameLayout'

function HomePage() {
  return (
    <Container>
      <Header />
      <SelectPlayer />
    </Container>
  )
}

export default HomePage
