import styled from 'styled-components'
import Icon from '../../icon/Icon'

const StyledOption = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

function GameOption({ onClick, status, play1, play2 }) {
  return (
    <StyledOption onClick={onClick}>
      {status === 1 && <Icon iconName={play1} />}
      {status === -1 && <Icon iconName={play2} />}
    </StyledOption>
  )
}

export default GameOption
