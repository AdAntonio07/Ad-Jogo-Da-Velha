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
const PlayIcon = ({ iconName }) => <Icon iconName={iconName} size="80%" />

function ChosenPlayer({ play1, play2 }) {
  return (
    <AlignChosen>
      <BoxSelect>
        <Box size="120px">{play1 && <PlayIcon iconName={play1} />}</Box>
        <TextAlign>Play 1</TextAlign>
      </BoxSelect>
      <BoxSelect>
        <Box size="120px">{play2 && <PlayIcon iconName={play2} />}</Box>
        <TextAlign>Play 2</TextAlign>
      </BoxSelect>
    </AlignChosen>
  )
}

export default ChosenPlayer
