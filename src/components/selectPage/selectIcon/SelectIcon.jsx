import ChoosePlayer from '../choosePlayer/ChoosePlayer'
import PlayerIcon from '../playerIcon/PlayerIcon'
import Button from '../button/Button'

function SelectPlay({ onClick, handleSelectIcon }) {
  return (
    <>
      <ChoosePlayer />
      <PlayerIcon onSelectIcon={handleSelectIcon} />
      <Button onClick={onClick}>Jogar</Button>
    </>
  )
}

export default SelectPlay
