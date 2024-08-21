import styled from 'styled-components'

import Icon from '../icon/Icon'
import SubTitle from './SubTitle'

const AlignItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`

function Header() {
  return (
    <AlignItem>
      <Icon iconName="Title" size="750" />
      <SubTitle />
    </AlignItem>
  )
}

export default Header
