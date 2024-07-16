import { useState } from 'react'

import ChosenPlayer from '../chosenPlayer/ChosenPlayer'
import ChoosePlayer from '../choosePlayer/ChoosePlayer'
import PlayerIcon from '../playerIcon/PlayerIcon'

function SelectPlay() {
  return (
    <>
      <ChosenPlayer play1={2} play2={3} />
      <ChoosePlayer />
      <PlayerIcon onClick={console.log('CLICOU AQUI')} />
    </>
  )
}

export default SelectPlay
