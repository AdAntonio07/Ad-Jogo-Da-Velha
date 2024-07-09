import styled from 'styled-components'

import Square from '../../square/Square'
import H3 from '../../typography/h3'

const AlignChosen = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
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
        <Square size="100px" />
        <TextAlign>Player 1</TextAlign>
      </BoxSelect>
      <BoxSelect>
        <Square size="100px" />
        <TextAlign>Player 2</TextAlign>
      </BoxSelect>
    </AlignChosen>
  )
}

export default ChosenPlayer
