import { useState } from 'react'
import Link from 'next/link'

import ChosenPlayer from '../chosenPlayer/ChosenPlayer'
import ChoosePlayer from '../choosePlayer/ChoosePlayer'
import PlayerIcon from '../playerIcon/PlayerIcon'

function SelectPlay() {
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
      <>
        <ChosenPlayer play1={playUm} play2={playDois} />
        <ChoosePlayer />
        <PlayerIcon onSelectIcon={handleSelectIcon} />
      </>
    </>
  )
}

export default SelectPlay
