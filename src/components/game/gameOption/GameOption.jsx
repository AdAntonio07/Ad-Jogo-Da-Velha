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

function GameOption({ status, player1, player2 }) {
  return (
    <StyledOption>
      {status === 1 && <Icon iconName="Triangulo" />}
      {status === -1 && <Icon iconName="X" />}
    </StyledOption>
  )
}

export default GameOption
