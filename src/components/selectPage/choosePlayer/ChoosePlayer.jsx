import styled from 'styled-components'
import H3 from '../../typography/h3'

const StyledH3 = styled(H3)`
  color: ${(props) => props.theme.colors.green};
`

function ChoosePlayer({ status }) {
  return <StyledH3>Escolha o Icone do Jogador</StyledH3>
}

export default ChoosePlayer
