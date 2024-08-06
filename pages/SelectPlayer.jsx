import styled from 'styled-components'

import Header from '../src/components/header/Header'
import SelectIcon from '../src/components/selectPage/selectIcon/SelectIcon'
import Button from '../src/components/button/Button'

import Container from '../src/components/selectPage/Container'

const SyteledAligh = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

function SelectPlayer() {
  return (
    <Container>
      <SyteledAligh>
        <Header size="100%" />
        <SelectIcon />
        <Button>Jogar</Button>
      </SyteledAligh>
    </Container>
  )
}

export default SelectPlayer
