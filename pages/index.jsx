import styled from 'styled-components'

import { useState } from 'react'

import Container from '../src/components/container/Container'

import Header from '../src/components/header/Header'
import SelectPlayer from '../src/components/selectPage/selectPlayer/SelectPlayer'
import GameLayout from '../src/components/game/gameLayout/GameLayout'
import ChosenPlayer from '../src/components/selectPage/chosenPlayer/ChosenPlayer'

const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [playUm, setPlayUm] = useState(null)
  const [playDois, setplayDois] = useState(null)

  const handleSelectIcon = (iconName) => {
    if (!playUm) {
      setPlayUm(iconName)
    } else if (!playDois) {
      setplayDois(iconName)
    }
  }

  const handleDisabled = () => {
    if (playDois) return true
  }

  const mostraComponent = () => {
    setIsVisible(true)
  }

  return (
    <Container>
      <Header />
      <StyledSelect>
        {!isVisible && <ChosenPlayer play1={playUm} play2={playDois} />}
        {!isVisible && (
          <SelectPlayer
            onClick={mostraComponent}
            disabled={!handleDisabled()}
            handleSelectIcon={handleSelectIcon}
          />
        )}
      </StyledSelect>
      {isVisible && <GameLayout play1={playUm} play2={playDois} />}
    </Container>
  )
}

export default HomePage
