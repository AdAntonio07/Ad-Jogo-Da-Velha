import { useState } from 'react'

import ChosenPlayer from '../chosenPlayer/ChosenPlayer'
import ChoosePlayer from '../choosePlayer/ChoosePlayer'
import PlayerIcon from '../playerIcon/PlayerIcon'
import Button from '../../button/Button'

function SelectPlay({ onClick }) {
  const [playUm, setPlayUm] = useState(null)
  const [playDois, setplayDois] = useState(null)

  const handleSelectIcon = (iconName) => {
    if (!playUm) {
      setPlayUm(iconName)
    } else if (!playDois) {
      setplayDois(iconName)
    }
  }

  return (
    <>
      <ChosenPlayer play1={playUm} play2={playDois} />
      <ChoosePlayer />
      <PlayerIcon onSelectIcon={handleSelectIcon} />
      <Button player1={playUm} player2={playDois} onClick={onClick}>
        Jogar
      </Button>
    </>
  )
}

export default SelectPlay
