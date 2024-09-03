import ChoosePlayer from '../choosePlayer/ChoosePlayer'
import PlayerIcon from '../playerIcon/PlayerIcon'
import Button from '../button/Button'

function SelectPlay({ onClick, disabled, handleSelectIcon }) {
  return (
    <>
      <ChoosePlayer />
      <PlayerIcon onSelectIcon={handleSelectIcon} />
      <Button onClick={onClick} disabled={disabled}>
        Jogar
      </Button>
    </>
  )
}

export default SelectPlay
