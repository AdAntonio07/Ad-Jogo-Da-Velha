import styled from 'styled-components'
import Icon from '../icon/Icon'

const AlignItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: absolute;
  margin-top: 140px;
`

const P = styled.p`
  color: ${(props) => props.theme.colors.purple};
  font-weight: bolder;
  font-size: 20px;
`

function SubTitle() {
  return (
    <AlignItem>
      <P>Criado por Antonio Ferreira</P>
      <Icon iconName="Githunb" size="30px" />
    </AlignItem>
  )
}

export default SubTitle
