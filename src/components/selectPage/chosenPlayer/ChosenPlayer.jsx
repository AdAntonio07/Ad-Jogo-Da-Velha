import styled from 'styled-components'

import Box from '../box/Box'
import H3 from '../../typography/h3'
import Icon from '../../icon/Icon'

const AlignChosen = styled.div`
  display: flex;
  justify-content: center;
  gap: 170px;

  @media screen and (max-width: 570px) {
    gap: 120px;
  }
  @media screen and (max-width: 430px) {
    gap: 60px;
  }
`

const BoxSelect = styled.div`
  text-align: center;
`

const TextAlign = styled(H3)`
  padding-top: 8px;
`
const PlayIcon = ({ iconName }) => <Icon iconName={iconName} size="80px" />

function ChosenPlayer({ play1, play2 }) {
  return (
    <AlignChosen>
      <BoxSelect>
        <Box size="100px">
          {play1 === 1 && <PlayIcon iconName="Triangulo" />}
          {play1 === 2 && <PlayIcon iconName="Quadrado" />}
          {play1 === 3 && <PlayIcon iconName="Circulo" />}
          {play1 === 4 && <PlayIcon iconName="X" />}
        </Box>
        <TextAlign>Player 1</TextAlign>
      </BoxSelect>
      <BoxSelect>
        <Box size="100px">
          {play2 === 1 && <PlayIcon iconName="Triangulo" />}
          {play2 === 2 && <PlayIcon iconName="Quadrado" />}
          {play2 === 3 && <PlayIcon iconName="Circulo" />}
          {play2 === 4 && <PlayIcon iconName="X" />}
        </Box>
        <TextAlign>Player 2</TextAlign>
      </BoxSelect>
    </AlignChosen>
  )
}

export default ChosenPlayer
