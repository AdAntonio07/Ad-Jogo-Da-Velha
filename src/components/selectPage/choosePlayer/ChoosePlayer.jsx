import styled from 'styled-components'
import H3 from '../../typography/h3'

const StyledH3 = styled.h2`
  color: ${(props) => props.theme.colors.green};
  font-size: 28px;

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`

function ChoosePlayer() {
  return <StyledH3>Escolha o Icone de cada Jogador</StyledH3>
}

export default ChoosePlayer
