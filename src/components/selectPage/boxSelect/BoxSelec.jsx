import styled from 'styled-components'

import Icon from '../../icon/Icon'
import Box from '../../box/Box'

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`

function BoxSelect({ iconName }) {
  return (
    <StyledBox>
      <Icon iconName={iconName} />
    </StyledBox>
  )
}

export default BoxSelect
