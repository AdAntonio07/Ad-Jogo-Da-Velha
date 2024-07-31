import { useState } from 'react'

import styled from 'styled-components'
import H6 from '../../typography/H6'
import Box from '../box/Box'
import Icon from '../../icon/Icon'

const AlighChoice = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 570px) {
    gap: 20px;
  }

  @media screen and (max-width: 430px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const StyledBox = styled(Box)`
  margin-bottom: 5px;
  cursor: pointer;
`
const BoxOfChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PlayerIcon = ({ onSelectIcon }) => {
  const [selectIcon, setSelectIcon] = useState(null)

  const handleIconClick = (iconName) => {
    setSelectIcon(iconName)
    onSelectIcon(iconName)
  }

  return (
    <AlighChoice>
      <BoxOfChoice>
        <StyledBox onClick={() => handleIconClick('Triangulo')}>
          <Icon iconName="Triangulo" />
        </StyledBox>
        <H6>Triangulo</H6>
      </BoxOfChoice>
      <BoxOfChoice>
        <StyledBox onClick={() => handleIconClick('Quadrado')}>
          <Icon iconName="Quadrado" />
        </StyledBox>
        <H6>Quadrado</H6>
      </BoxOfChoice>
      <BoxOfChoice>
        <StyledBox onClick={() => handleIconClick('Circulo')}>
          <Icon iconName="Circulo" />
        </StyledBox>
        <H6>Circulo</H6>
      </BoxOfChoice>
      <BoxOfChoice>
        <StyledBox onClick={() => handleIconClick('X')}>
          <Icon iconName="X" />
        </StyledBox>
        <H6>X</H6>
      </BoxOfChoice>
    </AlighChoice>
  )
}

export default PlayerIcon
