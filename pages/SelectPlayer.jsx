import styled from 'styled-components'

import Header from '../src/components/header/Header'
import SelectPlay from '../src/components/selectPage/selectPlay/SelectPlay'
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
        <Header />
        <SelectPlay />
        <Button>Jogar</Button>
      </SyteledAligh>
    </Container>
  )
}

export default SelectPlayer
