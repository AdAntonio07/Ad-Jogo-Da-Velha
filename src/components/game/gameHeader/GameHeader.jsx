import styled from 'styled-components'

import Header from '../../header/Header'
import Icon from '../../icon/Icon'

const AlingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const P = styled.p`
  color: ${(props) => props.theme.colors.purple};
  font-size: 15px;
  font-weight: bolder;
`
const Position = styled.div`
  position: absolute;
  margin-top: 60px;
`

function GameHeader() {
  return (
    <AlingItem>
      <Header size="70%" />
      <Position>
        <P>Criado por Antonio Ferreira</P>
      </Position>
      <Icon iconName="githunb" size="30px" />
    </AlingItem>
  )
}

export default GameHeader
