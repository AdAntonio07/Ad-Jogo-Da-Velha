import styled from 'styled-components'

import Icon from '../icon/Icon'

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function GameTitle() {
  return (
    <StyledTitle>
      <Icon iconName="Title" size="600px" />
    </StyledTitle>
  )
}

export default GameTitle
