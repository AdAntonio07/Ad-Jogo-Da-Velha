import styled from 'styled-components'

import Box from '../../box/Box'
import H3 from '../../typography/h3'

const AlignChosen = styled.div`
  display: flex;
  justify-content: center;
  gap: 170px;
  margin: 50px 0;
`

const BoxSelect = styled.div`
  text-align: center;
`

const TextAlign = styled(H3)`
  padding-top: 8px;
`

function ChosenPlayer() {
  return (
    <AlignChosen>
      <BoxSelect>
        <Box size="100px" />
        <TextAlign>Player 1</TextAlign>
      </BoxSelect>
      <BoxSelect>
        <Box size="100px" />
        <TextAlign>Player 2</TextAlign>
      </BoxSelect>
    </AlignChosen>
  )
}

export default ChosenPlayer
