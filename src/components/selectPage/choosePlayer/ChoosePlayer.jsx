import styled from 'styled-components'
import H3 from '../../typography/h3'

const StyledH3 = styled(H3)`
  color: ${(props) => props.theme.colors.green};
`

function ChoosePlayer() {
  return <StyledH3>Escolher Player 1</StyledH3>
}

export default ChoosePlayer
