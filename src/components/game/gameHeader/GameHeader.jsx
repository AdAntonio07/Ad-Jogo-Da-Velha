import styled from 'styled-components'

import Header from '../../header/Header'
import Icon from '../../icon/Icon'

const AlingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`
const P = styled.p`
  color: ${(props) => props.theme.colors.purple};
  font-size: 15px;
  font-weight: bolder;
`

function GameHeader() {
  return (
    <AlingItem>
      <Header size="70%" />
      <P>Criado por Antonio Ferreira</P>
      <Icon iconName="githunb" size="30px" />
    </AlingItem>
  )
}

export default GameHeader
