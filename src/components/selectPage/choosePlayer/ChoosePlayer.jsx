import styled from 'styled-components'

const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colors.green};
  font-size: 28px;

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`

function ChoosePlayer() {
  return <StyledH2>Escolha o Icone de cada Jogador</StyledH2>
}

export default ChoosePlayer
