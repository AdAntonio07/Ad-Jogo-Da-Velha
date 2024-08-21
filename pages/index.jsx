import { useState } from 'react'

import Container from '../src/components/container/Container'

import Header from '../src/components/header/Header'
import SelectPlayer from '../src/components/selectPage/selectPlayer/SelectPlayer'
import GameLayout from '../src/components/game/gameLayout/GameLayout'

function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  const mostraComponent = () => {
    setIsVisible(true)
  }

  return (
    <Container>
      <Header />
      {!isVisible && <SelectPlayer onClick={mostraComponent} />}
      {isVisible && <GameLayout />}
    </Container>
  )
}

export default HomePage
