import styled from 'styled-components'

import Icon from '../../icon/Icon'
import Box from '../box/Box'

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  cursor: pointer;
`

function BoxSelect({ iconName, onClick }) {
  return (
    <StyledBox>
      <Icon iconName={iconName} onClick={onClick} />
    </StyledBox>
  )
}

export default BoxSelect
